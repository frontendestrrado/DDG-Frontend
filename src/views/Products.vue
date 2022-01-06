<template>
  <div class="Products">
    <div class="title titleFont titleColor">Products</div>
    <div class="ProductsOne"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.Products {
  .title {
    font-size: 3rem;
  }
  .ProductsOne {
    background: url(../assets/img/Products/Products1.jpg) no-repeat scroll;
    height: 50rem;
    background-size: 100%;
    text-align: left;
  }
}
</style>