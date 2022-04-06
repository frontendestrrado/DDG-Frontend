<template>
  <b-container fluid>
    <b-row>
      <b-col>For more enquiries</b-col>
      <b-col><b-button variant="light" >Contact Us</b-button></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss" scoped>
  .btn {
    color: #7b655d;
    font-size: 1.9725rem;
    font-weight: bold;
    font-family: "Times New Roman";
    border-radius: 0.9375rem;
    @media screen and (max-width: 768px) {
      border-radius: 5%;
      font-size: 0.8rem;
    }
  }

  .row {
    padding: 1.875rem 0;
    background-color: #7b655d;
    color: white;
    align-items: center;
    .col:first-of-type {
      text-align: end;
      font-size: 2.1975rem;
      font-weight: bold;
      font-family: "Times New Roman";
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
    .col:last-of-type {
      text-align: start;
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
</style>