webpackJsonp([22],{aufi:function(t,e){},"n7/A":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("INCx"),o=n.n(r),a=n("GMIX"),u=n("3UNf"),i=n.n(u),s={name:"OrganizeChartDetail1",data:function(){return{fields:[{key:"date",label:"Date"},{key:"settlor_name",label:"Advisor Name"},{key:"amount",label:"Amount"}],list:[]}},filters:{NumFormat:function(t){return t?(t=(t*=1).toFixed(2),o()(t).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")):"0"}},created:function(){var t=this;Object(a.d)(this.$route.query).then(function(e){t.list=e.data})},methods:{exportPDF:function(){var t=this;console.log(this.$route.query),Object(a.e)(this.$route.query).then(function(e){i()(e,t.$route.query.year+"-"+t.$route.query.month+".xlsx")})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"button"},[n("b-button",{on:{click:t.exportPDF}},[t._v("Export")])],1),t._v(" "),n("b-table",{attrs:{hover:"",items:t.list,fields:t.fields},scopedSlots:t._u([{key:"cell(amount)",fn:function(e){return[t._v("\n      "+t._s(t._f("NumFormat")(e.item.amount))+"\n    ")]}}])})],1)},staticRenderFns:[]};var c=n("VU/8")(s,l,!1,function(t){n("aufi")},"data-v-22c9b65a",null);e.default=c.exports}});
//# sourceMappingURL=22.b3ec4e848845251280aa.js.map