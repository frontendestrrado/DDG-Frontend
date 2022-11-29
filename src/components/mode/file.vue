<!-- 文件模块 -->
<template>
  <div class="file">
    <van-row >
      <van-col span="12" style="text-align:left">
        {{fileData.title}}
      </van-col>
      <van-col span="12" style="text-align:right">
        <van-button @click="see" class="btn" type="info" size="small" color="#6c5959">View</van-button>
        <van-button @click="download" class="btn" type="primary" size="small" color="#A79278" style="margin-left:10px">Download</van-button>
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
      console.log("9999999999999999999",this.fileData.link)
      let url = this.fileData.link.split('uploads')
      console.log("ccccccccccccccccccccc",url)
      console.log("aaaaaaaaaaaaaaaaaa",url[0])
      console.log("bbbbbbbbbbbbbbbb",url[1])
      window.open(url[0] + 'file/download?path=uploads' + url[1], '_self')
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
