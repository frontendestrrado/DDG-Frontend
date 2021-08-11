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
  html,body,ul,li,p{margin:0;padding:0;border:0;outline:0}
  ul,li{list-style:none}
  #app{font-family:'Avenir',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;text-align:center;background-color:#f2f2f7}
  .hv:hover{cursor:pointer}
  .fcb{display:flex;align-items:center;justify-content:space-between}
  .fca{display:flex;align-items:center;justify-content:space-around}
  .fcc{display:flex;align-items:center;justify-content:center;}
  .fcs{display:flex;align-items:center;justify-content:flex-start;}
  .fl{float:left}
  .fr{float:right}
  .tr{text-align:right}
  .tc{text-align:center}
  .ti10{text-indent:10px}
  .clearfix:after{visibility:hidden;display:block;font-size:0;content:".";clear:both;height:0}
  * html .clearfix{zoom:1}
  *:first-child+html .clearfix{zoom:1}
  .el-input>.el-input__inner,input{height:40px;font-size:16px;line-height:16px;padding:12px 15px;vertical-align:middle}
  .dpn{display:none!important}
  .scroll::-webkit-scrollbar,body::-webkit-scrollbar{width:4px}
  .scroll::-webkit-scrollbar-thumb,body::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);background:rgba(0,0,0,0.2)}
  .scroll::-webkit-scrollbar-track,body::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);border-radius:0;background:rgba(0,0,0,0.1)}
  /deep/ .van-row{display: flex;align-items: center;}
  .submitBtn{
    width: 100%;
    height: 46px;
    line-height: 46px;
    background: #FFC80B;
    color: #fff;
    border-color: #FFC80B;
    border-radius: 8px;
  }
</style>