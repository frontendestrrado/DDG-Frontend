<template>
  <div class="infoDetail bodybox">
    <van-cell-group inset>
      <van-cell
        title-style="text-align:left;"
        v-for="(item, inx) in infoData.content"
        :key="inx"
        :title="item.title"
        :value="item.value"
      >
        <!-- <div class="">
          <span>
            {{ item.title }}:{{ item.value }}
          </span>
        </div> -->
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoData: {},
    };
  },
  mounted() {
    console.log(this.$route.query);
    this.infoData = this.$route.query;
  },
};
</script>

<style scoped>
/deep/ .van-cell-group--inset{
  margin: auto;
}
</style>