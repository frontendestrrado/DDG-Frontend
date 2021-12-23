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
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
  box-sizing:border-box;
}
body {line-height:1;}
:focus {outline: 1;}
article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { display:block;}
ul {list-style:none;}
blockquote, q {quotes:none;}
blockquote:before, blockquote:after,
q:before, q:after {content:'';content:none;}
a {margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;background:transparent;}
ins {background-color:#ff9;color:#000;text-decoration:none;}
mark {background-color:#ff9;color:#000;font-style:italic;font-weight:bold;}
del {text-decoration: line-through;}
abbr[title], dfn[title] {border-bottom:1px dotted #000;cursor:help;}
table {border-collapse:collapse;border-spacing:0;}
hr {display:block;height:1px;border:0;border-top:1px solid #cccccc;margin:1em 0;
padding:0;}
input, select {vertical-align:middle;}

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
.tl{text-align: left;}
.tc{text-align:center}
.ti10{text-indent:10px}
.clearfix:after{visibility:hidden;display:block;font-size:0;content:".";clear:both;height:0}
* html .clearfix{zoom:1}
*:first-child+html .clearfix{zoom:1}
.el-input>.el-input__inner,input{height:40px;font-size:16px;line-height:16px;padding:12px 15px;vertical-align:middle}
.dpn{display:none!important}
.scroll::-webkit-scrollbar,body::-webkit-scrollbar{width:20px}
.scroll::-webkit-scrollbar-thumb,body::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);background:rgba(0,0,0,0.2)}
.scroll::-webkit-scrollbar-track,body::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);border-radius:0;background:rgba(0,0,0,0.1)}
/deep/ .van-row{display: flex;align-items: center;}
/deep/ .van-cell .van-cell__title{text-align: left;}
.submitBtn{
  width: 100% !important;
  height: 46px !important;
  line-height: 46px !important;
  background-color: #1989FA !important;
  color: #fff !important;
  border-color: #1989FA !important;
  border-radius: 8px !important;
}
.main_content {
  /*width: 100%;*/
  /*padding: 0 15px;*/
  margin: 0 auto;
}
.from_content{
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
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
  .from_content{width: 100%;}
}
@media screen and (min-width: 992px) and (max-width: 1200px){
  .main_content {max-width: 1170px;}
  .from_content{width: 100%;}
}
.van-field .van-icon{
  font-size: 20px;
}
.van-toast .van-toast__text {
  word-wrap: break-word;
  word-break: normal;
  
}
.bodybox {
  max-width: 1200px;
  margin: auto;
}
.bodyboxPg {
  max-width: 1200px;
  margin: auto;
  padding: 0 2%;
}
.van-cell::after {
  /* border-bottom: 1px solid #ccc; */
}
/* 签名画板按钮 */
.esignBtn {
  color: #fff;
  border: none;
  outline: none;
  background-color: #2f75f4;
  font-size: 16px;
  border-radius: 13px;
  height: 35px;
  line-height: 35px;
  margin: 10px 0 10px 10px;
  display: inline-block;
  width: auto;
  padding: 0 10px;
}
</style>