<template>
  <div class="PDPAMemo bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
    <div class="minTitle mb-2">
        SEND NOTIFICATION
      </div>
      <div class="minTitle mb-2">
       {{notvalue.notice_type}}
      </div>
      <div class="minTitle mb-2">
        {{notvalue.name}}
      </div>
      
      <div id="passage"></div>
      <van-field
      class="txtarea"
          v-model="formData.message"
          :required="false"
          type="textarea"
          rows="4"
          label="Message"
          placeholder="Message"
          style="margin-top:100px;"
        />
         <van-field
        v-model="formData.medium"
        name="medium"
        center
        type="text"
        readonly
        label="Medium"
        placeholder="Please enter the Medium"
      />
      <div class="qaz mt-2">
        <div class="wsx">
        <lable>Send To</lable>
      </div>
      <div class="edc">
        <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Select Customers" label="name" track-by="id" :options="getCustomerListData" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
      </div>
      </div>
     

  <!-- <multiselect v-model="value" :options="getCustomerListData"  :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
  </multiselect> -->

  



      <van-field
        v-model="formData.notice_date"
        name="notice_date"
        center
        type="text"
        label="Date"
        placeholder="Please enter the Date"
      />
      
    
      <van-button round block type="info" native-type="submit" color="#7C655D">
        Send
      </van-button>
    </van-form>
   
  </div>
</template>

<script>
  import moment from 'moment'
import { uploadAutograph } from "@/api/util";
import { pdpa_memoGep, getOrdersForms, putOrdersForms, getNotificationData, getCustomerListData, create_notifications } from "@/api/order";
import Multiselect from 'vue-multiselect'
export default {
     components: {
    Multiselect
  },
  props:['orderDataInfo'],
  data() {
    return {
      value: [],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ],
      // value: [],
      // options: [
      //   { name: 'Vue.js', language: 'JavaScript' },
      //   { name: 'Adonis', language: 'JavaScript' },
      //   { name: 'Rails', language: 'Ruby' },
      //   { name: 'Sinatra', language: 'Ruby' },
      //   { name: 'Laravel', language: 'PHP' },
      //   { name: 'Phoenix', language: 'Elixir' }
      // ],
         notvalue: [],
         getCustomerListData:[],
      formData: {
        message: "",
        medium: "Email",
        notice_date: moment(new Date()).format('DD-MM-YYYY'),
        send_to:"",
        notice_id:this.$route.query.id
      },
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
    
    getCustomerListData()
          .then((res) => {
console.log(".....getCustomerListData.........",res)

            this.getCustomerListData = res;
            
          })
          .catch((err) => {
            console.log(err);
          });
    getNotificationData(this.$route.query.id)
          .then((res) => {
console.log(".....notvalue.........",res)

            this.notvalue = res;
            document.getElementById("passage").innerHTML = res.content;
          })
          .catch((err) => {
            console.log(err);
          });
  },
  methods: {
    // 如果已填 獲取數據
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    submit(form) {
      console.log(".............value...value...value.....",this.value)
      var a = []
      for (let i = 0; i < this.value.length; i++) {
var b = this.value[i].id
a.push(b)

      }
    
      this.formData.send_to=a.toString()
      console.log("......4...4...4....4...4....",a.toString())
      console.log(form);
     
      let data = JSON.parse(JSON.stringify(this.formData));
      console.log(".......33333.........",data)
      create_notifications(this.$route.query.id, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Send Successfully",
            });
           
          })
          .catch((err) => {});
      // if (this.isFilled > 0) {
      //   // 修改
      //   putOrdersForms(this.isFilled, {
      //     type: "GEP NDA",
      //     data: JSON.stringify(data),
      //   }).then((res) => {
      //     console.log(res, ".........7777777777...............");
      //     this.$toast({
      //       type: "success",
      //       message: "Modify the success",
      //     });
      //     if(!this.$route.query.isShare){
      //       this.$router.go(-1);
      //     }
      //   });
      // } 
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
