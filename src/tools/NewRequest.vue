<template>
  <div class="PDPAMemo bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
  
    
      
      <div id="passage"></div>
      <van-field
        v-model="notice_date"
        name="notice_date"
        center
        type="text"
        label="Date"
        placeholder="Please enter the Date"
      />
      <van-field
        v-model="formData.title"
        name="title"
        center
        type="text"
        :required="true" 
      
        label="Title"
        placeholder="Please enter the Title"
      />

      <van-field
      
      class="txtarea"
          v-model="formData.description"
          :required="true"
          type="textarea"
          rows="4"
          label="Description"
          placeholder="Please enter the Description"
          style="margin-top:100px;"
        />
     
      <van-field type="tel" label="Attachment"> 
       
       
    <template #input>
   
 
      <van-uploader v-model="source_of_wealth_file1x" :max-size="maxSize" :after-read="afterRead31x" :before-delete="beforeRead31x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file2x" :after-read="afterRead32x" :before-delete="beforeRead32x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file3x" :after-read="afterRead33x" :before-delete="beforeRead33x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file4x" :after-read="afterRead34x" :before-delete="beforeRead34x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file5x" :after-read="afterRead35x" :before-delete="beforeRead35x" accept="*" :max-count="1" :disabled="isDone"/>
          <span>Maximum Upload Limit is 100 MB</span>
          
</template>
 <span>Maximum Upload Limit is 100 MB</span>
    </van-field>

 
    <van-field type="tel" label=""> 
      
    </van-field>
 
  
      
    
      <van-button round block type="info" native-type="submit" color="#7C655D">
        SUBMIT
      </van-button>
    </van-form>
   
  </div>
</template>

<script>
  import moment from 'moment'
import { uploadFileRequest } from "@/api/util";

import {createNewRequest } from "@/api/order";
import Multiselect from 'vue-multiselect'
export default {
     components: {
    Multiselect
  },
  props:['orderDataInfo'],
  data() {
    return {
      maxSize:{
        type: Number,
        default : 1 *1024
      },
      file1: null,  
      notice_date: moment(new Date()).format('DD-MM-YYYY'),
        formData: {
          title: "",
          description: "",
          attachments:""
      },
      ticket:'ticket',
      source_of_wealth_file1x: [],
      source_of_wealth_file1xId:'',
      source_of_wealth_file2x: [],
      source_of_wealth_file2xId:'',
      source_of_wealth_file3x: [],
      source_of_wealth_file3xId:'',
      source_of_wealth_file4x: [],
      source_of_wealth_file4xId :'',
      source_of_wealth_file5x: [],
      source_of_wealth_file5xId:'',
      qaz: [],
      qaz1: [],

      value: [],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ],
   
         notvalue: [],
         getCustomerListData:[],
  
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
    };
  },
  mounted() {
    
  },
  methods: {
    beforeRead33x(file){
      this.source_of_wealth_file3x = []
      this.source_of_wealth_file3xId = ''

// }
return true
// }
    },
    afterRead33x(file) {
      console.log(file.file.size)
      const fileSizeBytes = file.file.size; // bytes
let fileSizeMB = fileSizeBytes / (1024 ** 2)

console.log(fileSizeMB);
if(fileSizeMB > 100){
  alert("Uploaded file exceeds 100 MB.")
  this.source_of_wealth_file3x = []
  this.source_of_wealth_file3xId = ''
return true
}
else{
      if(file.file.type.split('/')[0] === "application" || file.file.type.split('/')[0] === "image" ||file.file.type.split('/')[0] === "video"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('image', file.file)
      data.append('type', this.ticket)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFileRequest(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file3x = res.full_path
        this.source_of_wealth_file3xId = res.id
      })
    }else{
      alert("Only image, video and document files are accepted.")
  this.source_of_wealth_file3x = []
  this.source_of_wealth_file3xId = ''
      return true
      }
}
    },
    beforeRead34x(file){
      this.source_of_wealth_file4x = []
      this.source_of_wealth_file4xId = ''

// }
return true
// }
    },
    afterRead34x(file) {
      console.log(file.file.size)
      const fileSizeBytes = file.file.size; // bytes
let fileSizeMB = fileSizeBytes / (1024 ** 2)

console.log(fileSizeMB);
if(fileSizeMB > 100){
  alert("Uploaded file exceeds 100 MB.")
  this.source_of_wealth_file4x = []
  this.source_of_wealth_file4xId = ''
return true
}
else{
      if(file.file.type.split('/')[0] === "application" || file.file.type.split('/')[0] === "image" ||file.file.type.split('/')[0] === "video"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('image', file.file)
      data.append('type', this.ticket)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFileRequest(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file4x = res.full_path
        this.source_of_wealth_file4xId = res.id
      })
    }else{
      alert("Only image, video and document files are accepted.")
  this.source_of_wealth_file4x = []
  this.source_of_wealth_file4xId = ''
      return true
      }
}
    },
    beforeRead35x(file){
      this.source_of_wealth_file5x = []
      this.source_of_wealth_file5xId=''
return true
    },
    afterRead35x(file) {
      console.log(file.file.size)
      const fileSizeBytes = file.file.size; // bytes
let fileSizeMB = fileSizeBytes / (1024 ** 2)

console.log(fileSizeMB);
if(fileSizeMB > 100){
  alert("Uploaded file exceeds 100 MB.")
  this.source_of_wealth_file5x = []
      this.source_of_wealth_file5xId=''
return true
}
else{
      if(file.file.type.split('/')[0] === "application" || file.file.type.split('/')[0] === "image" ||file.file.type.split('/')[0] === "video"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('image', file.file)
      data.append('type', this.ticket)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFileRequest(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file5x = res.full_path
        this.source_of_wealth_file5xId = res.id
      })
    }else{
      alert("Only image, video and document files are accepted.")
  this.source_of_wealth_file5x = []
  this.source_of_wealth_file5xId = ''
      return true
      }
}
    },
    beforeRead32x(file){
      this.source_of_wealth_file2x = []
      this.source_of_wealth_file2xId =''

// }
return true
// }
    },
    afterRead32x(file) {

      console.log(file.file.size)
      const fileSizeBytes = file.file.size; // bytes
let fileSizeMB = fileSizeBytes / (1024 ** 2)

console.log(fileSizeMB);
if(fileSizeMB > 100){
  alert("Uploaded file exceeds 100 MB.")
  this.source_of_wealth_file2x = []
  this.source_of_wealth_file2xId= ''
return true
}
else{

      if(file.file.type.split('/')[0] === "application" || file.file.type.split('/')[0] === "image" ||file.file.type.split('/')[0] === "video"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      
      data.append('image', file.file)
      data.append('type', this.ticket)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFileRequest(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file2x = res.full_path
        this.source_of_wealth_file2xId = res.id
      })
    }else{
      alert("Only image, video and document files are accepted.")
  this.source_of_wealth_file2x = []
  this.source_of_wealth_file2xId= ''
      return true
      }
}
    },
    afterRead31x(file) {
console.log(file.file.size)
      const fileSizeBytes = file.file.size; // bytes
let fileSizeMB = fileSizeBytes / (1024 ** 2)

console.log(fileSizeMB);
if(fileSizeMB > 100){
  alert("Uploaded file exceeds 100 MB.")
  this.source_of_wealth_file1x = []
      this.source_of_wealth_file1xId=''
return true
}
else{

console.log("__d_D_D_D_D__D_D_D_____",file.file.type.split('/')[0])


      if(file.file.type.split('/')[0] === "application" || file.file.type.split('/')[0] === "image" ||file.file.type.split('/')[0] === "video"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      console.log("...ggggggg.2.2.",data)
      data.append('image', file.file)
      data.append('type', this.ticket)
      console.log("...ggggggg.2..",data)
      console.log("...ggggggg.3..",file.file)
     
      uploadFileRequest(data).then(res => {
        console.log("**********xxxx*******xxxx*****",res)

        this.$toast.success('Success')
        this.source_of_wealth_file1x = res.full_path
        this.source_of_wealth_file1xId= res.id
      })

      }
      else{
        alert("Only image, video and document files are accepted.")
  this.source_of_wealth_file1x = []
      this.source_of_wealth_file1xId=''
return true
      }
}
    },
    beforeRead31x(file){
      this.source_of_wealth_file1x = []
      this.source_of_wealth_file1xId=''

// }
return true
// }
    },
    onSearch () {
console.log("********file********1******",this.file1)
    }, 
    // 如果已填 獲取數據
  
    submit(form) {

      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file1)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file2)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file3)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file4)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file5)
      
      console.log("...z1..",this.source_of_wealth_file1)
      console.log("...z2..",this.source_of_fund_addon21)
         console.log("...z3..",this.source_of_fund_addon31)
    
      if(this.isFilled==0 ||this.isFilled ==undefined){
//this.qaz1.push()
if(typeof this.source_of_wealth_file1 === "string"){
 // alert("1")
 this.qaz1.push(this.source_of_wealth_file1)
}
if(typeof this.source_of_wealth_file2 === "string"){
 // alert("2")
 this.qaz1.push(this.source_of_wealth_file2)
}
if(typeof this.source_of_wealth_file3 === "string"){
 // alert("1")
 this.qaz1.push(this.source_of_wealth_file3)
}
if(typeof this.source_of_wealth_file4 === "string"){
 // alert("1")
 this.qaz1.push(this.source_of_wealth_file4)
}
if(typeof this.source_of_wealth_file5 === "string"){
  this.qaz1.push(this.source_of_wealth_file5)
 // alert("1")
}

      }
      if(this.isFilled==0 ||this.isFilled ==undefined){
//this.qaz1.push()
if(typeof this.source_of_wealth_file1x === "string"){
 // alert("1")
 this.qaz.push(this.source_of_wealth_file1xId)

}
if(typeof this.source_of_wealth_file2x === "string"){
 // alert("2")
 this.qaz.push(this.source_of_wealth_file2xId)
}
if(typeof this.source_of_wealth_file3x === "string"){
 // alert("1")
 this.qaz.push(this.source_of_wealth_file3xId)
}
if(typeof this.source_of_wealth_file4x === "string"){
 // alert("1")
 this.qaz.push(this.source_of_wealth_file4xId)
}
if(typeof this.source_of_wealth_file5x === "string"){
  this.qaz.push(this.source_of_wealth_file5xId)
 // alert("1")
}

      }
      console.log(form,11111);
      console.log("...aaaaaaa..",(this.qaz.toString()))
      console.log("...aaaaaaa..1",(this.qaz1))


      console.log(form);
     
      let data = JSON.parse(JSON.stringify(this.formData));
      data.attachments = this.qaz.toString()
      console.log(".......33333.........",data)
      createNewRequest(data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Send Successfully",
            });

            this.$router.push('/helpdesk')
       this.$store.commit('changePage',{tabbar: '/helpdesk', title: 'Help Desk'});

           
          })
          .catch((err) => {});
   
    },
    // 清空画布
    handleReset(val) {
      this.$refs[val].reset(); //清空画布
      this.formData.signature = ''
    },
    handleGenerate(val) {
      var that = this;
      this.$refs[val]
        .generate()
        .then((res) => {
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
              console.log(res);
              this.formData[val] = res.path;
              this.$toast.success("Signature success");
            })
            .catch((err) => {
              that.$toast({
                type: "fail",
                message: "Uploading picture failed",
              });
            });
        })
        .catch((err) => {
          //  没有签名，点击生成图片时调用
          that.$toast({
            type: "fail",
            message: err + " No signature！",
          });
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });
    },
    // 展示日期弹框
/*    onShowPicker(val) {
      this.isShowPicker = true;
      this.whichDate = val;
    },*/
  /*  onHiddenPicker() {
      this.currentContent = new Data();
      this.isShowPicker = false;
    },
    onConfirmPicker() {
      this.formData[this.whichDate] = this.formatDateYMD(this.currentContent);
      this.isShowPicker = false;
    },*/
    // 出來日期格式ymd
/*    formatDateYMD(value) {
      if (!value) {
        return "";
      } else {
        var date = new Date(value);
        var Y = date.getFullYear() + "-";
        var M = date.getMonth() + 1 + "-";
        var D = date.getDate();
        return Y + M + D;
      }
    },*/
  },
};
</script>

<style scoped>
 /deep/ .txtarea textarea {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding-left: 8px;
    padding-top: 8px;
  }
.PDPAMemo {
  text-align: left;
}
.minTitle {
  font-weight: bold;e
  line-height: 24px;
}
/deep/ .van-field__label {
  width: 13.2rem;
}
/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }
}
.esignImgbox {
  border: 1px solid #666666;
}
.minTitle {
  font-weight: bold;
  line-height: 24px;
}
.qaz {
  display: flex;
  box-sizing: border-box;
  padding: 10px 16px
}
.wsx {
  width: 13.2rem;
  flex: none;
  margin-right: 12px;
  font-size: 14px;
  line-height: 24px;
}
.edc {
  width: 100%;
  float: left;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
