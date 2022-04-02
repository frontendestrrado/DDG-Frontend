<template>
  <div class="person from_content">
    <van-cell-group>
      <!-- <van-field center label="Name" :readonly="true" v-model="userInfo.name"></van-field> -->
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="1"
        :after-read="afterRead"
      />
      <!-- <van-field
                ref="name"
                center
                label="Name"
                :readonly="actUserBtn=='name'?false:true"
                v-model="userInfo.name">
                <van-icon slot="right-icon" v-if="actUserBtn=='name'" name="success" size="30px" @click="patchEdit('name')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('name')"/>
            </van-field> -->
      <van-field
        center
        label="First Name"
        :readonly="true"
        v-model="userInfo.first_name"
      ></van-field>
      <van-field
        center
        label="Surname"
        :readonly="true"
        v-model="userInfo.third_name"
      ></van-field>
      <van-field
        center
        label="Rank"
        :readonly="true"
        v-model="userInfo.grade"
      ></van-field>
      <van-field
        center
        label="BTT Code"
        :readonly="true"
        v-model="userInfo.btt_code"
      ></van-field>
      <van-field
        center
        label="NRIC Name or Passport # / Company Re.Number"
        :readonly="true"
        v-model="userInfo.passport"
      ></van-field>
      <van-field
        ref="address"
        center
        label="Residential Address"
        :readonly="actUserBtn == 'address' ? false : true"
        v-model="userInfo.address"
      >
        <van-icon
          slot="right-icon"
          v-if="actUserBtn == 'address'"
          name="success"
          size="30px"
          @click="patchEdit('address')"
        />
        <van-icon
          slot="right-icon"
          v-else
          name="edit"
          size="30px"
          @click="showEditBtn('address')"
        />
      </van-field>
<!--      等待接口-->
      <van-field
        is-link
        arrow-direction="down"
        readonly
        clickable
        label="Area"
        center
        :rules="[{ required: true, message: 'Area' }]"
        :value="userInfo.area"
        placeholder="Area"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="areaList"
          confirm-button-text="Confirm"
          cancel-button-text="Cancel"
          @cancel="showPicker = false"
          @confirm="onConfirmArea"
          default-index="0"
        />
      </van-popup>
      <van-field
        center
        label="Date of Birth"
        :readonly="true"
        v-model="userInfo.birthday"
      ></van-field>
      <van-field
        center
        label="Code"
        :readonly="true"
        v-model="userInfo.code"
      ></van-field>
      <van-field
        center
        label="Introducer ID"
        :readonly="true"
        v-model="userInfo.sponsor"
      ></van-field>
      <van-field
        ref="bank"
        center
        label="Bank Name"
        :readonly="actUserBtn == 'bank' ? false : true"
        v-model="userInfo.bank"
      >
        <van-icon
          slot="right-icon"
          v-if="actUserBtn == 'bank'"
          name="success"
          size="30px"
          @click="patchEdit('bank')"
        />
        <van-icon
          slot="right-icon"
          v-else
          name="edit"
          size="30px"
          @click="showEditBtn('bank')"
        />
      </van-field>
      <van-field
        ref="bankAccountNo"
        center
        label="Bank Account No."
        :readonly="actUserBtn == 'bankAccountNo' ? false : true"
        v-model="userInfo.bankAccountNo"
      >
        <van-icon
          slot="right-icon"
          v-if="actUserBtn == 'bankAccountNo'"
          name="success"
          size="30px"
          @click="patchEdit('bankAccountNo')"
        />
        <van-icon
          slot="right-icon"
          v-else
          name="edit"
          size="30px"
          @click="showEditBtn('bankAccountNo')"
        />
      </van-field>
      <van-field
        ref="bankAccountName"
        center
        label="Bank Account Name"
        :readonly="actUserBtn == 'bankAccountName' ? false : true"
        v-model="userInfo.bankAccountName"
      >
        <van-icon
          slot="right-icon"
          v-if="actUserBtn == 'bankAccountName'"
          name="success"
          size="30px"
          @click="patchEdit('bankAccountName')"
        />
        <van-icon
          slot="right-icon"
          v-else
          name="edit"
          size="30px"
          @click="showEditBtn('bankAccountName')"
        />
      </van-field>
      <van-field
        ref="phone"
        center
        label="Mobile Number"
        :readonly="actUserBtn == 'phone' ? false : true"
        v-model="userInfo.phone"
      >
        <van-icon
          slot="right-icon"
          v-if="actUserBtn == 'phone'"
          name="success"
          size="30px"
          @click="patchEdit('phone')"
        />
        <van-icon
          slot="right-icon"
          v-else
          name="edit"
          size="30px"
          @click="showEditBtn('phone')"
        />
      </van-field>
      <van-field
        ref="email"
        center
        label="Email"
        :readonly="actUserBtn == 'email' ? false : true"
        v-model="userInfo.email"
      >
        <van-icon
          slot="right-icon"
          v-if="actUserBtn == 'email'"
          name="success"
          size="30px"
          @click="patchEdit('email')"
        />
        <van-icon
          slot="right-icon"
          v-else
          name="edit"
          size="30px"
          @click="showEditBtn('email')"
        />
      </van-field>



      <van-field
        center
        label="Created Date"
        :readonly="true"
        v-model="userInfo.created_at"
      ></van-field>
    </van-cell-group>
  </div>
</template>

<script>
import {updateMyProfile} from "../api/my-profile";

export default {
  data() {
    return {
      userInfo: "",
      saveContent: false,
      actUserBtn: -1,
      timer: null,
      fileList: [],
      Area: '',
      areaList: [
        {
          text: 'Northern Region',
          children: [
            {text: 'Kedah'},
            {text: 'Pulau Pinang (Penang)'},
            {text: 'Perak and Perlis'},
          ]
        },
        {
          text: 'Central Region',
          children: [
            {text: 'Wilayah Persekutuan (Kuala Lumpur)'},
            {text: 'Wilayah Persekutuan (Putrajaya)'},
            {text: 'Selangor'},
            {text: 'Negeri Sembilan'},
          ]
        },
        {
          text: 'Southern Region',
          children: [
            {text: 'Melaka (Malacca)'},
            {text: 'Johor'},
          ]
        },
        {
          text: 'East Coast Region',
          children: [
            {text: 'Pahang'},
            {text: 'Terengganu'},
            {text: 'Kelantan'},
          ]
        },
        {
          text: 'Eastern Malaysia',
          children: [
            {text: 'Sabah'},
            {text: 'Sarawak'},
            {text: 'Wilayah Persekutuan (Labuan)'},
          ]
        },
      ], //地區列表
      showPicker: false,//地區選擇框
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$axios({
        method: "get",
        url: "/api/v1/user",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
          console.log("111",res);
          this.userInfo = res;
          this.fileList = [{ url: res.avatar }];
        })
        .catch((err) => {
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
    },
    onConfirmArea(e) {
      this.showPicker = false;
      if(this.userInfo.area === e) return false
      updateMyProfile({area: e.join(',')}).then(res => {
        this.userInfo = res
      })

    },
    showEditBtn(index) {
      this.actUserBtn = index;
      this.$refs[index].focus();
    },
    hideEditBtn(index) {
      const vm = this;
      setTimeout(function () {
        if (index == vm.actUserBtn || index == -1) {
          vm.actUserBtn = -1;
        }
      }, 60);
    },
    // 保存用户信息
    patchEdit(index, id) {
      this.hideEditBtn(-1);
      var data = {};
      if (id) {
        data[index] = id;
      } else {
        data[index] = this.userInfo[index];
      }
      console.log(data, "保存用户信息");
      this.$axios({
        method: "PATCH",
        url: "/api/v1/user",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
        data,
      })
        .then((res) => {
          console.log(res);
          this.userInfo = res;
        })
        .catch((err) => {
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
    },
    // 頭像上傳
    afterRead(file) {
      console.log(file, "頭像");
      let formData = new FormData();
      formData.append("image", file.file); // 要提交给后台的文件
      formData.append("type", "avatar");
      console.log(formData);
      this.$axios({
        method: "POST",
        url: "/api/v1/images",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
        data: formData,
      })
        .then((res) => {
          console.log(res, "頭像上傳");
          if (res.id) {
            this.$toast.success("頭像上傳成功");
          }
          this.patchEdit("avatar_image_id", res.id);
        })
        .catch((err) => {
          console.log(err, "頭像上傳異常");
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
    },
  },
};
</script>
<style scoped>
.van-field .van-icon {
  font-size: 20px;
}
/deep/ .van-cell .van-cell__title {
  text-align: left;
}
/* /deep/ .van-cell.van-field{border-bottom: 1px solid #CBCDCE;} */
.person {
  background: #f3f5f7;
}
.person_info {
  padding: 20px 30px;
  background-color: #ffc80b;
}
.person_title {
  font-weight: 500;
  text-align: left;
}
.editBtn {
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>
