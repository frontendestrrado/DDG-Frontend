<template>
  <div
    class="index-title"
    v-if="titleData.title"
    :style="{ backgroundColor: titleData.bg_color }"
  >
    <div
      class="index-title-div"
      :style="{
        fontSize: titleData.title_size + 'px',
      }"
    >
      <van-image
        v-if="titleData.icon"
        class="index-title-icon"
        :src="titleData.icon"
        fit="contain"
      />
      {{ titleData.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "titleMode",
  props: {
    titleData: {
      type: Object,
    },
  },
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