
<template>
  <div class="OrderList bodybox">
    <div class="row bodybox1">
        <b-container class="box">
      <b-row class="text-left title">
        <b-col class="titleBg">
          <!-- {{content.title}} -->
          {{ticket.title}}
        </b-col>
      </b-row>

      <!-- <b-row class="text-right">
        <b-col>Status : 
            <b-button v-if="ticket.status === 'Closed'" size="sm" variant="success">
            {{ ticket.status }}
          </b-button>
          <b-button v-if="ticket.status === 'In Progress'" size="sm" variant="warning">
            {{ ticket.status }}
          </b-button>
          <b-button v-if="ticket.status === 'Open'" variant="danger" size="sm">
            {{ ticket.status }}
          </b-button>

        </b-col>
      </b-row> -->

    

      <b-row class="text-left mt-3">
        
        <b-col class="col-md-9">ID : {{ticket.token}}</b-col>
        <b-col class="col-md-3">   <b-col class="text-right">Status : 
            <b-button v-if="ticket.status === 'Closed'" size="sm" variant="success">
            {{ ticket.status }}
          </b-button>
          <b-button v-if="ticket.status === 'In Progress'" size="sm" variant="warning">
            {{ ticket.status }}
          </b-button>
          <b-button v-if="ticket.status === 'Open'" variant="danger" size="sm">
            {{ ticket.status }}
          </b-button>

        </b-col></b-col>
        <b-col class="col-md-12">Created On : {{ticket.ticket_date}}</b-col>
      </b-row>


      <!-- <b-row class="text-left">

        <b-col>Created On : {{ticket.ticket_date}}</b-col>
      </b-row> -->
      <hr>
      <b-row class="text-left">
        <b-col>Description</b-col>
      </b-row>
      <p class="text-left mt-3">{{ticket.description}}</p>
      <hr>
      <b-row class="text-left">
        <b-col>Attachments:
            <div class="row mt-3">
              <div   v-for="item in ticket_attachments" class="col-md-3">
            <van-image
							style="width: 100%;height:auto;"
							v-bind:src= 'item.image_path'
							fit="contain"
                            square
							/>
                        </div>
                    </div>
        </b-col>
      </b-row>
      <hr>
   
        <div class="row mb-2">
       
        <div class="col-md-3">
          <van-button  @click="announcementsShow"  :id="'annButId'"
          
            class="announcements">
            Comments ({{this.comments_count}})
          </van-button>
          <!-- <van-button  @click="announcementsShow"  :id="'annButId'"
            :style="{ border: '0', background: 'transparent' }" squre block type="info"
            class="announcements">
            Comments ({{this.comments_count}})
          </van-button> -->
        </div>
        <div class="col-md-3">
          <van-button   @click="notificationsShow"  :id="'notButId'" squre block type="info"
            class="notifications">
            Activity Logs
          </van-button>
          <!-- <van-button   @click="notificationsShow"  :id="'notButId'" squre block type="info"
            :style="{ border: '1px solid #a4aeb9', background: '#a4aeb9' }" class="notifications">
            Activity Logs
          </van-button> -->
        </div>
     
      </div>
      
      <div class="OrganizeChart_info" :id="'notId'" :style="{ display: 'none' }">
      <template>
      <div  class="outBox1" center v-for="(logData, index) in activity_log">
          <div class="comtTime">
            <!-- {{ logData.created_at }} -->
            {{ logData.created_date }} at {{ logData.created_time }}
          </div>
          <div>
            {{ logData.description }}
          </div>
        </div>

    </template>
    </div>

    <div :id="'annId'" >
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
  
    
      
      <div id="passage"></div>

     
      <van-field type="tel"> 
       
    <template #input>
        <van-field
      class="txtarea"
          v-model="formData.description"
          :required="false"
          type="textarea"
          rows="4"
         
          placeholder="Please enter the Description"
         
        />
<div>
      <van-uploader v-model="source_of_wealth_file1x" :after-read="afterRead31x" :before-delete="beforeRead31x" accept="*" :max-count="1" :disabled="isDone"/>
    </div>
  
</template>
    </van-field>

    <!-- float: right;
    width: 180px; -->
      <van-button round block type="info" native-type="submit"  class="button1" color="#7C655D">
        Post
      </van-button>
    </van-form>
     

    <div  class="outBox1" center v-for="(commentsData, index) in comments">
        <van-image
							style="width: 40px;height:auto;margin: 0 auto; margin-right:10px;"
							v-bind:src= 'commentsData.author_avatar'
							fit="contain"
                            round
                            class="cmtImge"
                        
							/>
                       
          <div>
            {{ commentsData.comment_author }}
          </div>
          <div class="comtTime">
            {{ commentsData.created_date }} at {{ commentsData.created_time }}
          </div>
          <div>
            {{ commentsData.description }}
          </div>
        </div>
    </div>

    </b-container>
   


    </div>
 

  </div>
</template>
<script type="text/javascript" src="js/list.min.js"></script>
<script type="text/javascript" src="js/your-own.js"></script>
<script>
import {dateApi} from "@/api/performance"
import { getHelpDesk } from "@/api/tools";
import { getRequestDetail } from "@/api/order";
import Dropdown from 'vue-simple-search-dropdown';
import LinkPreview from '@ashwamegh/vue-link-preview'
import { uploadFileRequest } from "@/api/util";
import {postComments } from "@/api/order";

export default {


  data() {
    return {
        formData: {
            ticket_id: this.$route.query.id,
            description: "",
            attachments:""
      },
    //  ticket:'comments',
      source_of_wealth_file1x: [],
      source_of_wealth_file1xId:'',
      el: '#app',
              filters: null,
        selectedValue: "0",
      list: [],
    
      fields: [
        {key: 'sl_no',label: 'Sl'},
            {key: 'token',label: 'ID'},
        {key: 'title',label: 'Title'},
        {key: 'ticket_date',label: 'Created On'},
            {key: 'status',label: 'Status'}
      ],
      per_page: 10,
      currentPage: 1,
      rows: 3,
      searchval:'',
      status:'',
      loadingShow: true,
      ticket:[],
      ticket_attachments:[],
      comments_count:'',
      comments:[],
      isDone: false, 
activity_log:[]
    }
  },
  mounted() {
    this.getMonth()

 this.fullData()
 
  
  },
  methods: {
    fullData() {
        getRequestDetail({
        ticket_id: this.$route.query.id
      })
        .then((res) => {
          console.log(".......555....555555.....",res)
        this.ticket = res.ticket;
        this.ticket_attachments = res.ticket_attachments
        this.comments_count = res.comments_count
        this.activity_log = res.activity_log
        this.comments = res.comments
        
        })
        .catch((err) => {
          console.log(err.response);
        });
 

    },

    announcementsShow() {
      document.getElementById('annId').style.display = 'block'
      document.getElementById('notId').style.display = 'none'
      document.getElementById('annButId').style.borderBottom  = '2px solid rgb(137, 115, 89)'
      document.getElementById('notButId').style.borderBottom  = 0
    //   document.getElementById('notButId').style.background = '#a4aeb9'
    //   document.getElementById('notButId').style.border = '#a4aeb9'
    //   document.getElementById('annButId').style.background = 'transparent'
    //   document.getElementById('annButId').style.border = '0'
    //   document.getElementById('annButId').style.border-bottom = '2px solid #897359'
    //  border-bottom: 2px solid rgb(137, 115, 89);

    },
    notificationsShow() {
      document.getElementById('notId').style.display = 'block'
      document.getElementById('annId').style.display = 'none'
      document.getElementById('annButId').style.borderBottom  = 0
      document.getElementById('notButId').style.borderBottom  = '2px solid rgb(137, 115, 89)'
    //   border-bottom: 2px solid rgb(137, 115, 89);
    //   document.getElementById('annButId').style.background = '#a4aeb9'
    //   document.getElementById('annButId').style.border = '1px solid #a4aeb9'
    //   document.getElementById('notButId').style.background = '#897359'
    //   document.getElementById('notButId').style.border = '1px solid #897359'
    },

    submit(form) {

console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file1)

console.log("...z1..",this.source_of_wealth_file1)




console.log(form);

let data = JSON.parse(JSON.stringify(this.formData));
// data.attachments = this.qaz.toString()
console.log(".......33333.........",data)
postComments(data)
    .then((res) => {
      console.log(res);
      this.$toast({
        type: "success",
        message: "Send Successfully",
      });
     this.formData= {
            ticket_id: this.$route.query.id,
            description: "",
            attachments:""
      }
      this.fullData()
      this.source_of_wealth_file1x = []
      this.source_of_wealth_file1xId=''
      this.formData.attachments = ''
     
    })
    .catch((err) => {});

},
    afterRead31x(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      console.log("...ggggggg.2.2.",data)
      data.append('image', file.file)
      data.append('type', 'comments')
      console.log("...ggggggg.2..",data)
      console.log("...ggggggg.3..",file.file)
     
      uploadFileRequest(data).then(res => {
        console.log("**********xxxx*******xxxx*****",res)

        this.$toast.success('Success')
        this.source_of_wealth_file1x = res.full_path
        this.source_of_wealth_file1xId= res.id
        this.formData.attachments = res.id
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file1x = []
  this.source_of_wealth_file1xId=''
  this.formData.attachments = ''
      return true
      }
    },
    beforeRead31x(file){
      this.source_of_wealth_file1x = []
      this.source_of_wealth_file1xId=''
      this.formData.attachments = ''

// }
return true
// }
    },
    NewRequest(){
      this.$router.push('/NewRequest')
       this.$store.commit('changePage',{tabbar: '/NewRequest', title: 'Submit a New Request'});
    },
    onSearch() {
   //  alert("d")
      this.getMonth()
    },
    clearSearch() {
     
      this.getMonth()
    },
    changePage() {
  this.getMonth()
},
    getMonth() {
  getHelpDesk({
    page: this.currentPage,
    search: this.searchval,
    status:this.status
  })
    .then((res) => {
      console.log(".......555....bbb dddd.....",res)
    //   return this.res.data.map((d, index) => ({ ...d, sno: index + 1 }))
    //   console.log("----d--d--d--d-d--d--",d)
      this.list = res.data;
      this.per_page = res.meta.per_page
      this.rows = res.meta.total
      this.loadingShow = false
    //   console.log(".......555....bbb dddd.....",res.data)
    })
    .catch((err) => {
      console.log(err.response);
    });


    },

  },
  computed: {
    // rows() {
    //   return this.list.length
    // }
  }
}
</script>

<style lang="scss" scoped>
 /deep/ .txtarea textarea {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding-left: 8px;
    padding-top: 8px;
  }
.OrganizeChart_info {
  .first .van-cell--center:first-of-type {
    border-bottom: 5px solid black;
  }
}
.page {
  margin-left: 48vw;
}

.Coming {
  font-size: 3vw;
}

.slect-boxdiv {
  text-align: right !important;
 // margin: 10px 70px;
}

.slect-boxdiv select {
  width: 250px;
  padding: 5px;
  border: 1px solid #c4c4c4;
}

.OrderList {
.bodybox1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 12px;
  background-color: #fff;
}

.van-search.block {
  display: block;
  padding-left: 0%;
}

.van-search.block1 {
  display: block;
  padding-left: 13px;
  padding-right: 0px;
}

.slect-boxdiv select {
  width: 100%;
  // padding: 5px;
  border: 0px solid #c4c4c4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  background-color: #f7f8fa;
  border-radius: 2px;
  padding: 10px 12px;
  height: 50px;
}
}
.h3{
  text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: #897359;
}

.box {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,.5);
  margin-bottom: 100px;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  .content {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .row {
    margin-bottom: 5px;
    font-family: "Times New Roman";
    font-weight: bold;
    &:last-of-type {
     // margin-bottom: 100px !important;
      @media screen and (max-width: 768px) {
        margin-bottom: 20px !important
      }
    }
  }
}

.outBox1 {
  text-align: left;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 30px;
  margin-bottom: 15px;
  width: 98%;
  float: right;
}
.titleBg{
    padding: 20px 15px;
    font-size: 22px;
    font-weight: 400;
    background: #efefef;
}
.announcements{
    border: 0;
    background: transparent;
    color: rgb(137, 115, 89);
    border-bottom: 2px solid rgb(137, 115, 89);
    width: 100%;

}
.notifications{
border: 0;
    background: transparent;
    color: #897359;
}
/deep/ .van-uploader__upload{
    width: 100px;
    height: 108px;
    margin: 4px 8px 8px 0;
    border-radius: 6px;
}
.van-cell::after{
    border-bottom: 0
}
.button1{
    float: right;
    width: 180px;
    right: 20px;
    margin-bottom: 20px;
}
.cmtImge{
    display: inline-block;
    float: left;
}
.comtTime{
    font-size: 12px;
    line-height: 15px;
}
</style>
