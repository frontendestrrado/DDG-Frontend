<template>
<section>
  <b-table hover :items="list" :fields="fields" style="cursor: pointer" :per-page="perPage" id="my-table" :current-page="currentPage">
    <template #cell(actions)="row">
      <b-button size="sm" @click="goDetail(row)">
        Details
      </b-button>
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
import {dateApi} from "@/api/performance"
export default {
  name: "index",
  mounted() {
    this.getMonth()
  },
  data() {
    return {
      list: [],
      fields: [
        {key: 'date',label: 'Date'},
        {key: 'date',label: 'Date'},
        {key: 'actions',label: 'Actions'}
      ],
      perPage: 5,
      currentPage: 1,
    }
  },
  methods: {
    getMonth() {
      dateApi().then(res => {
        this.list = res.data
        console.log(res)
      })
    },
    goDetail(row) {
      sessionStorage.setItem('currentPage',JSON.stringify({tabbar: '/PerformanceDetail',title: 'PerformanceDetail'}))
      this.$router.push({
        path: '/PerformanceDetail',
        query: {
          year: row.item.date.split('-')[0],
          month: row.item.date.split('-')[1]
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

<style lang="scss" scoped>
.page {
  margin-left: 48vw;
}
</style>
