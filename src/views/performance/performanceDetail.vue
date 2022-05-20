<template>
<div>
  <b-button class="export" @click="exportPDF">Download</b-button>
  <b-table hover :items="list" style="cursor: pointer"  >
    <template #cell(total)="row">
      {{ row.item.total | NumFormat}}
    </template>
  </b-table>
</div>
</template>

<script>
import {performanceApi} from "../../api/performance";

export default {
  name: "performanceDetail",
  created() {
    this.getPerformance()
  },
  data() {
    return {
      list: [],
    }
  },
  filters: {
    /**
     * 金錢加分隔符
     * @param value
     * @returns {string}
     * @constructor
     */
    NumFormat(value) {
      value = value*1
      if(!value) return '0'
      value = value.toFixed(2)
      let intPart = Math.trunc(value)// 获取整数部分
      return intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    }
  },
  methods: {
    /**
     * 獲取數據
     */
      getPerformance() {
        performanceApi(this.$route.query).then(res => {
          this.list = res.data
        })
      },
    /**
     * 導出pdf
     */
    exportPDF() {
          window.print()
    }
  },

}
</script>

<style lang="scss" scoped>
.export {
  float: right;
  margin-bottom: 10px;
  margin-right: 7vw;
}
</style>
