webpackJsonp([8],{"7hH0":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("MKFb"),a={data:function(){return{type:this.$route.params.id,Groups:[]}},watch:{$route:function(t,s){t.params.id!=s.params.id&&(this.type=t.params.id)}},mounted:function(){this.getMyGroups()},methods:{getMyGroups:function(){var t=this;Object(n.a)({ranking:"group"}).then(function(s){console.log(s,"獲取我的Groups"),t.Groups=s}).catch(function(t){console.log(t.response)})}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"OrganizeGroup from_content"},[e("div",{staticClass:"OrganizeGroup_info"},[t._l(t.Groups,function(s,n){return e("van-cell",{key:n,attrs:{center:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"custom-title"},[t._v("Group Leader: "+t._s(s.name))])]},proxy:!0},{key:"default",fn:function(){return[e("div",{staticClass:"fcb"},[e("span",[t._v("Status:")]),e("span",{staticClass:"item_status"},[t._v(t._s("1"===s.status?"Active":"Inactive"))])]),t._v(" "),e("div",{staticClass:"fcb"},[e("span",[t._v("Month Sales:")]),e("span",[t._v("$"+t._s(s.total_month_achievement))])]),t._v(" "),e("div",{staticClass:"fcb"},[e("span",[t._v("Year Sales:")]),e("span",[t._v("$"+t._s(s.total_year_achievement))])])]},proxy:!0}],null,!0)})})],2)])},staticRenderFns:[]};var r=e("VU/8")(a,o,!1,function(t){e("adF1")},"data-v-e33cd29e",null);s.default=r.exports},adF1:function(t,s){}});
//# sourceMappingURL=8.b2cf22570dbe44740787.js.map