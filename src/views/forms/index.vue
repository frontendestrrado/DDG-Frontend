<template>
  <div>
    <Header></Header>
    <h1>Coming Soon</h1>
  </div>

</template>

<script>
import Header from "../../components/Header.vue";
export default {
name: "FormList",
  components: {
    Header
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
}
</style>
