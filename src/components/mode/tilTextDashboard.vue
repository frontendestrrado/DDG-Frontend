<template>
  <div
    class="index-title"
    
    :style="{ backgroundColor: '#7C655D' }"
  >
    <div
      class="index-title-div"
      :style="{
        fontSize: '16px',
      }"
    >
      <!-- <van-image
       
        class="index-title-icon"
     
        fit="contain"
      /> -->
      Dashboard
    </div>
  </div>
</template>
<script>
export default {
  // name: "titleMode",
  // props: {
  //   titleData: {
  //     type: Object,
  //   },
  // },
};
</script>
<style scoped>
/* 标题模块 */
.index-title {
  width: 100%;
  display: block;
}
.index-title-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0px auto; */
  /* padding: 10px 0; */
  background-color: #7C655D;
  color: #fff;
}
.index-title-icon {
  width: 15px;
  max-width: 15px;
  margin-right: 5px;
  height: auto;
  display: inline-flex;
}
</style>