<template>
<div>
  <van-form @submit="submit">
  <van-field
    v-model="form.password"
    name="password"
    center
    :required="true"
    type="password"
    label="Password"
    placeholder="Password* (Must be 6 Digit Numberic)"
    :rules="[{ required: true, message: 'Password* (Must be 6 Digit Numberic)' }]"
  />
  <van-field
    v-model="form.password_confirmation"
    name="Confirm password"
    center
    :required="true"
    type="password"
    label="Confirm Password"
    placeholder="Confirm Password"
    :rules="[{ required: true,validator, message: 'Confirm password' }]"
  />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" class="loginBtn">Submit</van-button>
    </div>
  </van-form>
</div>
</template>

<script>
import {changePassword} from '@/api/login'
import {Toast} from "vant";
export default {
  name: "NewPassword",
  data() {
    return {
      secret: '',
      phone: '',
      form: {
        password: '',
        password_confirmation: '',
        secret: '',
        phone: ''
      }
    }
  },
  created() {
    this.form.secret = this.$route.params.secret
    this.form.phone = this.$route.params.phone
  },
  methods: {
    submit() {
      changePassword(this.form).then(res => {
        console.log(res,333)
        if(res.state_code === 200)
        Toast.success('Password changed successfully')
        const vm = this
        setTimeout(()=> {
          vm.$router.push('/Login')
        },2000)
      })
    },
    validator(val) {
      return val===this.form.password
    }
  }
}
</script>

<style lang="scss" scoped>
.loginBtn {
  width: 100%;
  height: 46px;
  line-height: 46px;
  margin-top: 30px;
  background: #7b655d;
  color: #fff;
  border-color: #7b655d;
  border-radius: 10px;
}
</style>
