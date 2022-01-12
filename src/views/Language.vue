<template>
  <div class="language bodybox">
    <!-- <div class="language-main fcc">
      <div>选择语言：</div>
      <van-dropdown-menu active-color="#FFC80B">
        <van-dropdown-item
          v-model="lang"
          :options="language"
          @change="changeLang"
        />
      </van-dropdown-menu>
    </div> -->
    <div class="title">Select language</div>
    <van-radio-group v-model="lang" @change="changeLang">
      <van-radio 
        v-for="(item,inx) in language" 
        :key="inx"
        :name="item.value"
      >
        {{item.text}}
      </van-radio>
    </van-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: this.$i18n.locale,
      language: [
        {
          text: "English",
          value: "en",
        },
        {
          text: "中文简体",
          value: "zh-CN",
        },
        {
          text: "中文繁體",
          value: "zh-TW",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$store.state.currentPage);
  },
  methods: {
    changeLang(val) {
      console.log(val);
      this.$i18n.locale = val;
      this.$Local(val);
      this.$store.commit("changeLang", val);
      this.$store.commit("changePage", { tabbar: "/Home", title: "Home" });
      this.$router.push("/Home");
    },
    choonseLang(lang) {
      this.$axios({
        method: "get",
        url: "/api/setLocale?lang=" + lang,
        headers: {
          Authorization:
            this.$localStorage.token_type + this.$localStorage.token,
        },
      })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
  },
};
</script>
<style scoped>
/deep/ .van-dropdown-menu,
/deep/ .van-dropdown-menu__item,
/deep/ .van-dropdown-menu__bar {
  background-color: #fff;
  box-shadow: none;
}
/deep/ .van-dropdown-menu__title::after {
  display: none;
}
.language {
  background-color: #fff;
  min-height: calc(100vh - 80px);
  text-align: left;
}
.title {
  font-size: 20px;
  font-weight: bold;
  padding: 0 16px;
}
.van-radio-group {
  padding: 0 16px;
  margin-top: 20px;
}
.van-radio {
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .language {
    background-color: #fff;
    min-height: calc(100vh - 60px);
  }
}
</style>