(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-067282ee"],{ee3d:function(e,t,s){},fe26:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"xx"},[s("header",[s("p",[e._v("给我们留言")]),s("p",{staticClass:"hide",on:{click:function(t){return e.jbrHide()}}},[e._v("﹀")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.jbShow,expression:"jbShow==true"}],staticClass:"jbShow"},[s("p",{staticClass:"ts"},[e._v("您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题")]),s("van-cell-group",[s("van-field",{attrs:{label:"手机",placeholder:"请输入手机号"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),s("van-field",{staticClass:"ly",attrs:{rows:"3",autosize:"",label:"留言内容",type:"textarea",placeholder:"请输入"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),s("van-button",{attrs:{type:"info"},on:{click:function(t){return e.tj()}}},[e._v("提交")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.jbShow,expression:"jbShow==false"}],staticClass:"jbHide"},[s("h3",[e._v("留言成功")]),s("p",[e._v("我们会尽快联系你")]),s("van-button",{attrs:{type:"info"},on:{click:function(t){return e.jbrHide()}}},[e._v("关闭")]),s("br"),s("u",{on:{click:function(t){return e.jbHide()}}},[e._v("再次留言")])],1)])])},i=[],n={data:function(){return{value:"",message:"",show:!1,jbShow:!0}},created:function(){},mounted:function(){},methods:{tj:function(){var e=this;if(""==this.value?this.$toast("请至少填写一项联系方式"):""==this.message&&this.$toast("请保持留言内容在1~1000字符内"),""!=this.value){var t=/^1[345678]\d{9}$/;t.test(this.value)?setTimeout((function(){e.jbShow=!1}),1300):this.$toast("请正确填写手机号")}},jbrHide:function(){this.$router.go(-1)},jbHide:function(){this.jbShow=!0,this.value=this.message=""}}},o=n,u=(s("ffb0"),s("2877")),c=Object(u["a"])(o,a,i,!1,null,"10689572",null);t["default"]=c.exports},ffb0:function(e,t,s){"use strict";var a=s("ee3d"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-067282ee.4a83d177.js.map