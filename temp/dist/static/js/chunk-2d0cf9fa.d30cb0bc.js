(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf9fa"],{6505:function(n,t,e){"use strict";e.r(t);var c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("el-button",{attrs:{type:"success"},on:{click:n.tongbu}},[n._v("人员同步")]),e("el-button",{attrs:{type:"warning"},on:{click:n.duankai}},[n._v("设备断开")])],1)},s=[],a={name:"PersonManagement",methods:{tongbu:function(){this.api({url:"synch/closeAllUser"}).then((function(n){console.log(n)}))},duankai:function(){this.api({url:"synch/syncEmployees"})}}},o=a,i=e("2877"),u=Object(i["a"])(o,c,s,!1,null,"77aaca88",null);t["default"]=u.exports}}]);