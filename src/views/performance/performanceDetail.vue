<template>
<div>
  <h1 class="address">DDG International Berhad.
    <br>No. 11-1, 2 & 3, Jalan Kampung Jawa, Off Bagan Luar, 12000 Butterworth, Pulau Pinang.</h1>
  <h1 class="title">DDG Commission Statement ({{new Date(date).toDateString().split(" ")[1] + ' ' + new Date(date).toDateString().split(" ")[3]}})</h1>
  <div class="export">
    <h1>Advisor Name: {{username}}</h1>
      <b-button @click="exportPDF">Export</b-button>
<!--    <b-button @click="exportPDF">Export</b-button>-->
  </div>
  <b-table hover :items="list" style="cursor: pointer" :fields="fields" :sortDesc.sync="sortDesc" sortBy='date'>
    <template #cell(total)="row">
      {{ row.item.total | NumFormat}}
    </template>
    <template #cell(commission_rate)="row">
      {{ Math.round((row.item.commission/row.item.total)*10000)/100+'%'}}
    </template>
    <template #custom-foot="">
      <b-tr>
        <b-td></b-td>
        <b-td></b-td>
        <b-td></b-td>
        <b-td>Total Commission :</b-td>
        <b-td>{{Total | NumFormat}}</b-td>
      </b-tr>
    </template>
    <template #cell(commission)="row">
      {{ row.item.commission | NumFormat}}
    </template>
  </b-table>
  <div class="footer">
    <h1>* All commission calculation based on MYR</h1>
    <h1>* Attached with your commission report, please update us if any error before 10th of the Month.</h1>
    <h3>* Commission will be credited  to your personal account (Bank Account Details) Before 15th of the Month.</h3>
  </div>

</div>
</template>

<script>
import {exportApi, performanceApi} from "../../api/performance";
import {userApi} from "../../api/my-profile";
import fileDownload from 'js-file-download'

export default {
  name: "performanceDetail",
  created() {
    this.getPerformance()
    userApi().then(res => {
      this.username = res.bankAccountName
    })
  },
  data() {
    return {
      list: [],
      fields: [
        {key: 'date'},
        {key: 'settlor_name',label: 'Client Name'},
        {key: 'total', label: 'Subscription Amount'},
        'commission_rate',
        {key: 'commission',label: 'Amount'},
      ],
      username: '',
      Total: 0,
      date: '',//顶部时间
      sortDesc: true,
      json_data: []
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
          this.list = Object.values(res.data)
          this.date = this.list[0].date
          this.list.map(item => {
            this.Total += item.commission*1
          })
        })
      },
    /**
     * 導出pdf
     */
    exportPDF() {
      exportApi(this.$route.query).then(res => {
        fileDownload(res,this.$route.query.year + '-' + this.$route.query.month+'.xls')
      })
    }
  },

}
</script>

<style lang="scss" scoped>
.export {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vw;
  align-items: center;
  h1 {
    margin-left: 5.33vw;
    font-weight: bold;
    font-size: 1vw;
  }
  button {
    margin-right: 5vw;
  }
}
.title {
  font-size: 2.5vw;
  font-weight: bold;
  margin-bottom: 2.67vw;
}
.footer {
  text-align: start;
  margin-left: 2.67vw;
 h1,h3 {
   line-height: 2vw;
   font-size: 1vw;
   @media screen and (max-width: 500px) {
     line-height: 5vw;
   }
 }
}
.address {
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 4vw;
  margin-top: 1vw;
}
</style>
