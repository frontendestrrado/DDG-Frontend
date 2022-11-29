<template>
<section>
  <b-table hover :items="list" :fields="fields" style="cursor: pointer" :per-page="perPage" id="my-table" :current-page="currentPage">
    <template #cell(actions)="row">
      <b-button size="sm" @click="goDetail(row)">
        Details
      </b-button>
    </template>
    <template #cell(total)="row">
      {{ row.item.total | NumFormat}}
    </template>
  </b-table>
  <div class="page">
    <b-pagination
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      v-model="currentPage"
    ></b-pagination>
  </div>
</section>
</template>

<script>
import {organizeChartDateApi} from "../api/organize-chart";

export default {
  name: "OrganizeChartDetail",
  data() {
    return {
      list: [],
      fields: [
        {key: 'date',label: 'Date'},
        {key: 'total',label: 'Total'},
        {key: 'actions',label: 'Actions'}
      ],
      perPage: 5,
      currentPage: 1,
    }
  },
  filters: {
    NumFormat(value) {
      if(!value) return '0'
      value = value.toFixed(2)
      let intPart = Math.trunc(value)// 获取整数部分
      return intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    }
  },
  created() {
    this.$store.commit("changePage", {
      tabbar: "",
      title: 'Organizational Sales',
    });
    organizeChartDateApi(this.$route.query).then(res => {
      this.list = Object.values(res.data)
    })
  },
  methods: {
    goDetail(row) {
      this.$router.push({
        path: '/OrganizeChartDetail1',
        query: {
          year: row.item.date.split('-')[0],
          month: row.item.date.split('-')[1],
          code: this.$route.query.code
        }
      })
    }
  },
  computed: {
    rows() {
      return this.list.length
    }
  }
}
</script>

<style scoped>
.page {
  margin-left: 42vw;
}
</style>
