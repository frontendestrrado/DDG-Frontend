<template>
<section>
  <div class="button">
    <b-button @click="exportPDF" >Export</b-button>
  </div>
  <b-table hover :items="list" :fields="fields">
    <template #cell(amount)="row" >
      {{ row.item.amount | NumFormat}}
    </template>
  </b-table>
</section>
</template>

<script>
import {organizeChartDetailApi,organizeChartExportApi} from "../api/organize-chart";
import fileDownload from 'js-file-download'

export default {
  name: "OrganizeChartDetail1",
  data() {
    return {
      fields: [
        
        {key: 'settlor_name',label: 'Advisor Name'},
        {key: 'code',label: 'Advisor Code'},
        {key: 'phone',label: 'Phone Number'},
        {key: 'amount',label: 'Amount'}
      ],
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
    organizeChartDetailApi(this.$route.query).then(res => {
      console.log("---iii---",res)
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

<style lang="scss" scoped>
.button {
  float: right;
  margin-right: 8vw;
  margin-bottom: 2vw;
}
</style>
