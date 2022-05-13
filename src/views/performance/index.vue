<template>
<section>
  <h1>Coming Soon</h1>
<!--  <b-table hover :items="list" style="cursor: pointer"></b-table>-->
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
      list: []
    }
  },
  methods: {
    getMonth() {
      dateApi().then(res => {
        this.list = res.data
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
