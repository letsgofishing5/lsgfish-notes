(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fbfc656"],{2017:function(e,t,n){"use strict";n("cafe")},"54e4":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("冬瓜山数据管理平台")])]),n("el-form-item",{attrs:{prop:"name"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"账号",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.name,callback:function(t){e.$set(e.loginForm,"name","string"===typeof t?t.trim():t)},expression:"loginForm.name"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"===typeof t?t.trim():t)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),n("el-button",{staticClass:"login-btn",staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登 录")])],1)],1)},s=[],r=(n("d3b7"),{name:"Login",data:function(){var e=function(e,t,n){0===t.length?n(new Error("请输入账号")):n()},t=function(e,t,n){0===t.length?n(new Error("请输入密码")):n()};return{loginForm:{name:"",password:""},loginRules:{name:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password"}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push("/")})).finally((function(){e.loading=!1}))}))}}}),a=r,i=(n("2017"),n("cfb3"),n("2877")),l=Object(i["a"])(a,o,s,!1,null,"4ae58a28",null);t["default"]=l.exports},cafe:function(e,t,n){},cfb3:function(e,t,n){"use strict";n("54e4")}}]);