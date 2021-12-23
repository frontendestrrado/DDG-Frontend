<!-- 文件模块 -->
<template>
  <div class="file">
    <van-row >
      <van-col span="12" style="text-align:left">
        {{fileData.title}}
      </van-col>
      <van-col span="12" style="text-align:right">
        <van-button @click="see" class="btn" type="info" size="small" color="#CFC3B5">See</van-button>
        <!-- <a :href="fileData.link" :download="fileData.title"> -->
          <!-- <van-button @click="download" class="btn" type="primary" size="small" color="#A79278" style="margin-left:10px">Download</van-button> -->
        <!-- </a> -->
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "multiImage",
  props: {
    fileData: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.fileData, 9999);
  },
  methods: {
    // 查看文件
    see() {
      window.open(this.fileData.link)
    },
    // 下載文件
    download() {
      
    }
  },
};
</script>

<style scoped>
.file {
  padding: 10px 16px;
}
.file .btn {
  border-radius: 10px;
}
</style>