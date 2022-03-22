<template>
<div>
  <Header></Header>
  <main>
    Coming Soon

  </main>
  <Footer class="footer"></Footer>
</div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/common/Footer.vue";
import {getTrainingCenterList} from "../../api/trainingCenter.js";

export default {
name: "TrainingCenter",
  mounted() {
    this.getTrainingCenterList()
  },
  methods: {
    getTrainingCenterList(){
      getTrainingCenterList().then(res => {
        console.log(res,333)
      })
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
}
</style>
