(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b7a5c76"],{"0332":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"习题收藏","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])}),n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),n("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pack-card"},[n("div",{staticClass:"empty"},[n("img",{attrs:{src:"https://wap.365msmk.com/img/empty.0d284c2e.png",alt:""}}),n("p",[t._v("暂无收藏记录")])])])}],c=(n("d3b7"),n("be3b"));function i(t,e){return new Promise((function(n,a){c["a"].post(t,e).then((function(t){n(t.data)})).catch((function(t){a(t.data)}))}))}var u=function(t){return i("api/app/message/classifyMessage",t)},s={name:"demo",props:[],components:{},data:function(){return{value1:0,option1:[{text:"题目类型",value:0},{text:"单选",value:1},{text:"多选",value:2},{text:"判断",value:3},{text:"连接",value:4}]}},created:function(){u().then((function(t){console.log(t)}))},computed:{},watch:{},methods:{onClickLeft:function(){this.$router.go(-1)}},mounted:function(){}},r=s,l=(n("557d"),n("2877")),p=Object(l["a"])(r,a,o,!1,null,"36b5e440",null);e["default"]=p.exports},"557d":function(t,e,n){"use strict";var a=n("95f5"),o=n.n(a);o.a},"95f5":function(t,e,n){}}]);
//# sourceMappingURL=chunk-2b7a5c76.024a7339.js.map