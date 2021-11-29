<template>
  <div class="index-input">
    <div class="index-input-div">
      <van-row
        class="columnboxAbout"
        v-if="formDataInfo.data_collects.length > 0"
        :gutter="$store.state.isPC ? 20 : 0"
      >
        <van-form validate-first @failed="onFailed" @submit="verifyCode">
          <van-col
            :span="showClass"
            v-for="(item, index) in formDataInfo.data_collects"
            :key="index"
          >
            <!-- type  1文本 2密码 3手机号 4邮箱 5日期 6时间 7文本框 8图片 9描述 10单选 11多选 12电子签名 13输入框 14按钮 -->
            <template v-if="item.type == 1 || item.type == 2 || item.type == 4">
              <van-field
                v-model="item.content"
                :name="item.title"
                center
                :required="item.is_require == 1 ? true : false"
                :type="
                  item.type == 2
                    ? 'password'
                    : item.type == 3
                    ? 'digit'
                    : 'text'
                "
                :label="item.title"
                :placeholder="item.title"
                :rules="[
                  {
                    validator: item.type == 4 ? validatorEmail : '',
                    required: item.is_require == 1 ? true : false,
                    message:
                      item.type == 4 ? '郵箱格式錯誤' : '请输入' + item.title,
                  },
                ]"
              />
            </template>
            <template v-if="item.type == 3 && phoneList[index]">
              <van-field
                readonly
                clickable
                label="區號"
                center
                :required="true"
                :rules="[{ required: true, message: '请選擇區號' }]"
                :value="areaCode[index]"
                placeholder="選擇區號"
                @click="showPicker = true"
              />
              <van-field
                v-model="phoneList[index].phone"
                :name="item.title"
                center
                :required="item.is_require == 1 ? true : false"
                type="digit"
                :label="item.title"
                :placeholder="item.title"
                :rules="[
                  {
                    required: item.is_require == 1 ? true : false,
                    message: '请输入' + item.title,
                  },
                ]"
              >
              </van-field>
              <van-popup v-model="showPicker" round position="bottom">
                <van-picker
                  show-toolbar
                  :columns="columns"
                  @cancel="showPicker = false"
                  @confirm="(value) => onConfirm(value, index)"
                />
              </van-popup>
              <van-field
                v-model="phoneList[index].verify_code"
                center
                :required="true"
                label="验证码"
                placeholder="请输入短信验证码"
                :rules="[{ required: true, message: '请输入验证码' }]"
              >
                <!-- class="SMSconfirm" class="SMSconfirm" -->
                <van-button
                  :class="'SMSconfirm codeBtn_' + phoneList[index].isSms"
                  slot="button"
                  native-type="button"
                  :disabled="phoneList[index].isSms"
                  @click="sendCode(index)"
                  >发送验证码</van-button
                >
              </van-field>
            </template>
            <!-- <template solt="label" :style="{color: item.title_color,fontSize:item.title_size+'px',fontWeight:item.title_bold==1?'bold':'normal'}">{{item.title}}</template> -->
            <!-- solt="input" -->
            <!-- content_size -->
            <template v-if="item.type == 5 || item.type == 6">
              <van-field
                readonly
                v-model="item.content"
                :name="item.title"
                center
                :required="item.is_require == 1 ? true : false"
                right-icon="arrow"
                :label="item.title"
                :placeholder="item.type == 5 ? 'YYYY-MM-DD' : 'hh:ss'"
                @click="onShowPicker(index, item.type)"
              />
            </template>
            <!-- 7文本框 -->
            <template v-if="item.type == 7">
              <van-field
                v-model="item.content"
                :name="item.title"
                :required="item.is_require == 1 ? true : false"
                type="textarea"
                rows="4"
                :label="item.title"
                :placeholder="item.title"
                :rules="[
                  {
                    required: item.is_require == 1 ? true : false,
                    message: '请输入' + item.title,
                  },
                ]"
              />
            </template>
            <!-- 8图片 -->
            <template v-if="item.type == 8">
              <van-field
                readonly
                :name="item.title"
                :label="item.title"
                :required="item.is_require == 1 ? true : false"
                :rules="[
                  {
                    required: item.is_require == 1 ? true : false,
                    message: '请上传' + item.title + '图片',
                  },
                ]"
                v-model="item.content"
                @click="uploadClickImg(index)"
              >
                <template #input>
                  <van-image
                    v-if="item.content"
                    width="50"
                    height="50"
                    :src="item.content"
                  />
                  <van-image
                    v-else
                    width="50"
                    height="50"
                    fit="contain"
                    :src="require('@/assets/img/image.png')"
                  />
                </template>
              </van-field>
            </template>
            <!-- 9文字描述 -->
            <template v-if="item.type == 9">
              <div style="text-align: left; font-weight: bold; margin: 10px 0">
                {{ item.title }}
              </div>
            </template>
            <!-- 10單選框 -->
            <template v-if="item.type == 10">
              <van-field
                label-width="auto"
                :name="item.title"
                :label="item.title"
                :required="item.is_require == 1 ? true : false"
              >
                <template #input>
                  <van-radio-group
                    v-model="item.content"
                    direction="horizontal"
                  >
                    <van-radio
                      v-for="(radio, index) in item.value"
                      :key="'radio_' + index"
                      :name="radio.title"
                      style="
                        margin-bottom: 10px;
                        margin-left: 10px;
                        text-align: left;
                      "
                      >{{ radio.title }}</van-radio
                    >
                  </van-radio-group>
                </template>
              </van-field>
            </template>
            <!-- 11多選框 -->
            <template v-if="item.type == 11">
              <van-field
                label-width="auto"
                :name="item.title"
                :label="item.title"
                :required="item.is_require == 1 ? true : false"
              >
                <template #input>
                  <van-checkbox-group
                    v-model="item.content"
                    direction="horizontal"
                  >
                    <van-checkbox
                      v-for="(checkbox, index) in item.value"
                      :key="'checkbox_' + index"
                      :name="checkbox.title"
                      style="
                        margin-bottom: 10px;
                        margin-left: 10px;
                        text-align: left;
                      "
                      >{{ checkbox.title }}</van-checkbox
                    >
                  </van-checkbox-group>
                </template>
              </van-field>
            </template>

            <template v-if="item.type == 12">
              <!-- <van-field v-model="vueEsignImg" center :name="item.title" :label="item.title" :required="item.is_require == 1 ? true:false">
                                <template #input>
                                    <van-image
                                        class="e-signature"
                                        v-if="vueEsignImg"
                                        :src="vueEsignImg"
                                    />
                                    <div v-else class="e-signature" @click="signatureShow=true">
                                        點擊簽名
                                    </div>
                                    <van-button @click="vueEsignImg = ''" type="info" size="small" style="margin-left:10px;">清除</van-button>
                                </template>
                            </van-field> -->
              <div class="tl">{{ item.title }}</div>
              <vue-esign
                :ref="'esign_' + index"
                :width="1200"
                :height="300"
                :isCrop="isCrop"
                :lineWidth="lineWidth"
                :lineColor="lineColor"
                :bgColor.sync="bgColor"
                style="border: 1px solid #666"
              />
              <div class="tr">
                <div class="esignBtn" @click="handleReset(index)">清空画板</div>
                <div class="esignBtn" @click="handleGenerate(index)">
                  生成图片
                </div>
              </div>
            </template>

            <template v-if="item.type == 13">
              <div class="tl">
                <span style="font-weight: bold">{{ item.title }}</span>
                <van-button
                  class="esignBtn"
                  native-type="button"
                  @click="addInput(index)"
                  >添加</van-button
                >
              </div>
              <van-cell
                class="cell-input"
                v-for="(input, n) in item.content"
                :key="'input_' + n"
              >
                <van-field
                  v-for="(inputItem, i) in input"
                  :key="'inputItem_' + i"
                  v-model="inputItem.value"
                  :name="inputItem.title"
                  :required="item.is_require == 1 ? true : false"
                  center
                  :label="inputItem.title"
                  :placeholder="inputItem.title"
                  :rules="[
                    {
                      required: item.is_require == 1 ? true : false,
                      message: '请输入' + inputItem.title,
                    },
                  ]"
                >
                  <van-button
                    v-if="n != 0 && i == 0"
                    class="esignDelBtn"
                    slot="button"
                    native-type="button"
                    @click="delInput(index, n)"
                    >删除</van-button
                  >
                </van-field>
              </van-cell>
            </template>

            <template v-if="item.type == 14">
              <div style="margin: 16px">
                <van-button round block type="info" native-type="submit">{{
                  item.title
                }}</van-button>
              </div>
            </template>
          </van-col>
        </van-form>
      </van-row>

      <!-- 簽名彈框 -->
      <van-dialog
        v-model="signatureShow"
        title="簽名"
        show-cancel-button
        width="80%"
        @confirm="signatureConfirm"
        @cancel="signatureCancel"
        @close="signatureClose"
      >
        <div style="width: 100%; height: 400px">
          <vue-esign ref="esign" />
        </div>
      </van-dialog>

      <van-popup v-model="isShowPicker" position="bottom">
        <van-datetime-picker
          v-model="currentContent"
          :type="pickerTpye"
          :min-hour="0"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="onHiddenPicker"
          @confirm="onConfirmPicker"
        />
      </van-popup>

      <input
        type="file"
        name="avatar"
        id="uppic"
        accept="image/gif,image/jpeg,image/jpg,image/png"
        @change="changeImage"
        ref="imgInput"
        style="opacity: 0; width: 0; height: 0; padding: 0; display: inherit"
      />

      <!-- <van-uploader v-model="fileList" :after-read="afterRead" :name="checkUploadIndex" :max-count="1" :max-size="1000 * 1024" @oversize="onOversize" :multiple="false" :deletable="false" :preview-full-image="false" :show-upload="false"></van-uploader> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "inputMode",
  props: {
    formData: {
      type: Object,
    },
  },
  data() {
    return {
      formDataInfo: this.formData,
      isShowPicker: false,
      currentContent: "",
      pickerTpye: "",
      checkIndex: "",
      fileList: [],
      checkUploadIndex: "",
      uploadImg:
        "https://www.bunchparty.com/trust/uploads/collects/202108/31//1630379513_1630379513_fs6mjWgy8o.png", //测试图
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(),
      phoneList: [],

      signatureShow: false, // 簽名彈框
      vueEsignImg: "", // 簽名圖片base64

      lineWidth: 6, //签名框
      lineColor: "#000000",
      bgColor: "#fff",
      isCrop: false,

      areaCode: [],
      showPicker: false,
      columns: ["86", "852", "886", "60"],
    };
  },
  computed: {
    showClass() {
      if (this.formDataInfo.layout == 1) {
        return 24;
      } else if (this.formDataInfo.layout == 2) {
        return this.$store.state.isPC ? 12 : 24;
      } else if (this.formDataInfo.layout == 3) {
        return this.$store.state.isPC ? 8 : 24;
      } else if (this.formDataInfo.layout == 4) {
        return this.$store.state.isPC ? 6 : 12;
      } else if (this.formDataInfo.layout == 5) {
        return this.$store.state.isPC ? 5 : 12;
      }
    },
  },
  mounted() {
    let phoneData = [];
    if (this.formDataInfo.data_collects.length > 0) {
      this.formDataInfo.data_collects.forEach((item, i) => {
        let data = {};
        if (item.type == 3) {
          data = {
            phone: "",
            verify_code: "",
            isSms: false,
          };
        } else if (item.type == 11) {
          item.content = [];
        } else if (item.type == 13) {
          let inputList = [];
          for (let key in item.value) {
            let inputitem = { title: item.value[key].title, value: "" };
            inputList.push(inputitem);
          }
          item.content = [inputList];
        }
        phoneData.push(data);
      });
    }
    this.phoneList = phoneData;
  },
  methods: {
    onConfirm(value, index) {
      console.log(value, index, 4444444);
      this.areaCode[index] = value;
      this.showPicker = false;
    },
    onSubmit(values) {
      console.log(values, 222);
      let content = [];
      // for(var key in values){
      //     if(key==''||key=="undefined"||key==null||key==undefined){
      //     }else{
      //         var contentVal = {
      //             title: key,
      //             value: values[key],
      //         }
      //         content.push(contentVal);
      //     }
      // }
      this.formDataInfo.data_collects.forEach((item, i) => {
        if (item.type == 14) {
        } else if (item.type == 3) {
          let data = {};
          data = {
            title: item.title,
            value: this.phoneList[i].phone,
          };
          content.push(data);
        } else {
          let data = {};
          data = {
            title: item.title,
            value: item.content,
          };
          content.push(data);
        }
      });
      // console.log(content);
      this.$axios({
        method: "POST",
        url: "/api/v1/collect",
        data: {
          page_id: this.$route.params.page_id,
          module_id: this.formDataInfo.page_module_relation_id,
          content: JSON.stringify(content),
          user_id: sessionStorage.user_id,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.id) {
            console.log(this.pageContent);
            this.$toast({
              type: "success",
              message: '提交成功',
            });
            this.$router.go(-1)
          } else {
            this.$toast({
              type: "fail",
              message: res.data.message,
            });
          }
        })
        .catch((error) => {});
    },
    onFailed(values, errorInfo) {
      console.log("failed", errorInfo);
      console.log("values", values);
      values.errors.forEach((item, index) => {
        this.$toast({
          type: "fail",
          message: item.message,
        });
      });
      // for(var key in values){
      //     console.log(key,values[key]);
      //     this.$toast({
      //         type:'fail',
      //         message:values[key],
      //     });
      // }
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validatorEmail(val) {
      return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
        val
      );
    },
    // 展示时间或日期弹框
    onShowPicker(index, type) {
      this.checkIndex = index;
      if (type == 5) {
        this.pickerTpye = "date";
      } else if (type == 6) {
        this.pickerTpye = "time";
      }
      this.isShowPicker = true;
    },
    onHiddenPicker() {
      this.currentContent = "";
      this.pickerTpye = "";
      this.isShowPicker = false;
    },
    onConfirmPicker() {
      if (this.pickerTpye == "date") {
        this.formDataInfo.data_collects[this.checkIndex].content =
          this.formatDateYMD(this.currentContent);
      } else if (this.pickerTpye == "time") {
        this.formDataInfo.data_collects[this.checkIndex].content =
          this.currentContent;
      }
      this.isShowPicker = false;
    },
    formatDateYMD(value) {
      if (!value) {
        return "";
      } else {
        var date = new Date(value);
        var Y = date.getFullYear() + "-";
        var M = date.getMonth() + 1 + "-";
        var D = date.getDate();
        return Y + M + D;
      }
    },
    uploadClickImg(index) {
      this.checkUploadIndex = index;
      this.$refs["imgInput"].click();
    },
    changeImage() {
      var file = this.$refs["imgInput"].files[0];
      console.log(this.$refs.imgInput);
      console.log(file);
      var reader = new FileReader();
      let self = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        // self.formData.data_collects[self.checkUploadIndex].content = this.result;

        let formData = new FormData();
        formData.append("image", file); // 要提交给后台的文件
        formData.append("type", "collect");
        console.log(formData);
        self
          .$axios({
            method: "POST",
            url: "/api/v1/upload/images",
            data: formData,
          })
          .then((res) => {
            console.log(res);
            self.formData.data_collects[self.checkUploadIndex].content =
              res.path;
          })
          .catch((err) => {
            self.$toast({
              type: "fail",
              message: "上传图片失败",
            });
          });
      };
    },
    afterRead(file, detail) {
      // 此时可以自行将文件上传至服务器
      // console.log(file,detail);
      this.formDataInfo.data_collects[detail.name].content = this.uploadImg;
    },
    onOversize(file) {
      Toast("文件大小不能超过 1M");
    },
    handleReset(index) {
      this.$refs["esign_" + index][0].reset(); //清空画布
    },
    handleGenerate(index) {
      var self = this;
      this.$refs["esign_" + index][0]
        .generate()
        .then((res) => {
          // let resultImg = res // 得到了签字生成的base64图片
          // console.log(res);
          self
            .$axios({
              method: "POST",
              url: "/api/v1/upload/autograph",
              data: {
                image: res,
                path: "",
              },
            })
            .then((res) => {
              console.log(res);
              self.formDataInfo.data_collects[index].content = res.path;
            })
            .catch((err) => {
              self.$toast({
                type: "fail",
                message: "上传图片失败",
              });
            });
        })
        .catch((err) => {
          //  没有签名，点击生成图片时调用
          self.$toast({
            type: "fail",
            message: err + " 未签名！",
          });
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });
    },
    // 添加输入框
    addInput(index) {
      const content = this.formDataInfo.data_collects[index].content;
      let newContent = [];
      content[0].forEach((item) => {
        var it = {
          title: item.title,
          value: "",
        };
        newContent.push(it);
      });
      let len = this.formDataInfo.data_collects[index].content.length;
      this.$set(
        this.formDataInfo.data_collects[index].content,
        len,
        newContent
      );
    },
    // 删除输入框
    delInput(index, n) {
      let content = this.formDataInfo.data_collects[index].content;
      content.splice(n, 1);
    },
    //获取验证码
    sendCode(index) {
      // let nowIndex;
      // if(this.phoneList.length>0){
      //     this.phoneList.forEach((item,i) => {
      //         if(item.index == index){
      //             nowIndex = i;
      //         }
      //     })
      // }
      if (!this.phoneList[index].isSms) {
        if (this.phoneList[index].phone) {
          var data = [
            { phone: this.areaCode[index] + this.phoneList[index].phone },
          ];
          this.$axios({
            method: "POST",
            url: "/api/v1/sin_up/sms/verify_code",
            data: {
              phone: JSON.stringify(data),
            },
          })
            .then((res) => {
              console.log(res);
              if (res.state_code == 200) {
                this.$toast({
                  type: "success",
                  message: res.message,
                });
                this.phoneList[index].isSms = true;
                const vm = this;
                setTimeout(function () {
                  vm.phoneList[index].isSms = false;
                }, 60000);
              } else {
                this.$toast({
                  type: "fail",
                  message: res.message,
                });
              }
            })
            .catch((err) => {
              this.$toast({
                type: "fail",
                message: "获取验证码失败",
              });
            });
        } else {
          this.$toast("请先输入手机号");
        }
      }
    },
    // 验证验证码
    verifyCode(values) {
      let data = [];
      let num = 0;
      this.phoneList.forEach((item, i) => {
        if (item.phone) {
          num++;
          var phoneInfo = {
            phone: this.areaCode[i] + item.phone,
            verify_code: item.verify_code,
          };
          data.push(phoneInfo);
        }
      });
      if (num == 0) {
        const vm = this;
        setTimeout(function () {
          vm.onSubmit(values);
        }, 600);
      } else {
        if (num == data.length) {
          this.$axios({
            method: "GET",
            url: "/api/v1/sin_up/sms/verify_code?data=" + JSON.stringify(data),
          })
            .then((res) => {
              console.log(res);
              if (res.state_code == 200) {
                // this.$toast({
                //     type:'success',
                //     message:res.message,
                // });
                const vm = this;
                setTimeout(function () {
                  vm.onSubmit(values);
                }, 600);
              } else {
                this.$toast({
                  type: "fail",
                  message: res.message,
                });
              }
            })
            .catch((err) => {
              this.$toast({
                type: "fail",
                message: "验证码错误",
              });
            });
        }
      }
    },
    signatureConfirm() {
      this.$refs.esign
        .generate()
        .then((res) => {
          console.log(res);
          this.vueEsignImg = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    signatureCancel() {
      this.$refs.esign.reset();
    },
    signatureClose() {
      this.$refs.esign.reset();
    },
  },
};
</script>
<style scoped>
/* 输入框模块 */
/deep/ .el-col-5 {
  width: 20%;
}
.columnboxAbout {
  width: 100%;
}
.textContent > div {
  overflow: hidden;
}
.SMSconfirm {
  color: #fff;
  border: none;
  outline: none;
  background-color: #2f75f4;
  font-size: 16px;
  border-radius: 13px;
}
.esignBtn {
  color: #fff;
  border: none;
  outline: none;
  background-color: #2f75f4;
  font-size: 16px;
  border-radius: 13px;
  height: 35px;
  line-height: 35px;
  margin: 10px 0 10px 10px;
  display: inline-block;
  width: auto;
  padding: 0 10px;
}
.esignDelBtn {
  color: #fff;
  border: none;
  outline: none;
  background-color: #dd4b39;
  font-size: 16px;
  border-radius: 13px;
  height: 35px;
  line-height: 35px;
  margin: 10px 0 10px 10px;
}
.index-input-div {
  width: 100%;
  padding: 0 16px;
  margin: auto;
}
/deep/ .van-cell.cell-input {
  margin-bottom: 20px;
}
/deep/ .van-radio__icon,
/deep/ .van-radio__icon .van-icon,
/deep/ .van-checkbox__icon,
/deep/ .van-checkbox__icon .van-icon {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
}
</style>