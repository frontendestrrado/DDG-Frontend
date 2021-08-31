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
/*#76ABF9蓝色 #D4B270金色  #87898A深 #CBCDCE浅 渐变的*/
.bgGreygold{
   background-image: linear-gradient(to right, #87898A, #CBCDCE, #87898A);
}
.bgBlue{background-color: #76ABF9;}
.bgGolden{background-color: #D4B270;}
.bgAsh{background-color: #CBCDCE;}
.bgGrey{background-color: #87898A;}

html,body,ul,li,p{margin:0;padding:0;border:0;outline:0}
ul,li{list-style:none}
#app{font-family:'Avenir',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;text-align:center;/*background-color:#f2f2f7*/}
.hv:hover{cursor:pointer}
input:-internal-autofill-selected {background-color: transparent!important;}
input{outline:none;-webkit-apprarence:none!important;}

input:-webkit-autofill {
  -webkit-apprarence:none!important;
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}
/*去掉默认的箭头*/ 
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
}
select::-ms-expand { display: none; }/*清除IE的默认选择框样式，隐藏下拉箭头*/
.fcb{display:flex;align-items:center;justify-content:space-between}
.fca{display:flex;align-items:center;justify-content:space-around}
.fcc{display:flex;align-items:center;justify-content:center;}
.fcs{display:flex;align-items:center;justify-content:flex-start;}
.fl{float:left}
.fr{float:right}
.dpn{display: none!important;}
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
/deep/ .van-cell .van-cell__title{text-align: left;}
.submitBtn{
  width: 100%;
  height: 46px;
  line-height: 46px;
  background: #FFC80B;
  color: #fff;
  border-color: #FFC80B;
  border-radius: 8px;
}
.main_content {
  /*width: 100%;*/
  /*padding: 0 15px;*/
  margin: 0 auto;
}
.from_content{
  width: 55%;margin: 0 auto;
}
@media screen and (max-width: 576px){
  .main_content {max-width: 540px;}
  .from_content{width: 100%;}
}
@media screen and (max-width: 768px){
  .main_content {
    max-width: 720px;
  }
  .from_content{width: 100%;}
}
@media screen and (min-width: 768px) and (max-width: 992px){
  .main_content {max-width: 960px;}
  .from_content{width: 70%;}
}
@media screen and (min-width: 992px) and (max-width: 1200px){
  .main_content {max-width: 1170px;}
  .from_content{width: 60%;}
}
</style>