<template>
  <section>
    <b-table hover :items="list" >
      <template #cell(amount)="row">
        {{ row.item.amount | NumFormat}}
      </template>
    </b-table>
  </section>
</template>

<script>
import {PersonalSalesDetailApi} from "../api/organize-chart";
import fileDownload from 'js-file-download'
export default {
  name: "OrganizeChartDetail3",
  data() {
    return {
      list: []
    }
  },
  filters: {
    NumFormat(value) {
      if(!value) return '0'
      value = value*1
      value = value.toFixed(2)
      let intPart = Math.trunc(value)// 获取整数部分
      return intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    }
  },
  created() {
    PersonalSalesDetailApi(this.$route.query).then(res => {
      this.list = res.data
    })
  },
  methods: {
    /**
     * 導出pdf
     */
    exportPDF() {
      console.log(this.$route.query)
      organizeChartExportApi(this.$route.query).then(res => {
        fileDownload(res,this.$route.query.year + '-' + this.$route.query.month+'.xlsx')
      })
    }
  }
}
</script>

<style scoped>

</style>
