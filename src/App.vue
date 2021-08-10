<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html,
  body,
  ul,
  li,
  p {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  ul,
  li {
    list-style: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    background-color: #F2F2F7;
  }
  .hv:hover {
    cursor: pointer;
  }

  .fcb {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .fca {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .tr {
    text-align: right;
  }

  .tc {
    text-align: center;
  }

  .ti10 {
    text-indent: 10px;
  }

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ".";
    clear: both;
    height: 0;
  }

  * html .clearfix {
    zoom: 1;
  }

  *:first-child+html .clearfix {
    zoom: 1;
  }

  .el-input>.el-input__inner,
  input {
    height: 40px;
    font-size: 16px;
    line-height: 16px;
    padding: 12px 15px;
    vertical-align: middle;
  }

  .dpn {
    display: none !important;
  }

  /*滚动条宽度*/
  .scroll::-webkit-scrollbar,
  body::-webkit-scrollbar {
    width: 4px;
  }

  .scroll::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }

  .scroll::-webkit-scrollbar-track,
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  .van-row{display: flex;align-items: center;}
</style>