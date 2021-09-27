(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b30e700"],{"2bc6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-row",{staticClass:"uni-row-bottom-20px",attrs:{gutter:20}},[a("el-col",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("查询条件")])]),a("el-form",{ref:"listQuery",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.listQuery}},[a("el-form-item",{attrs:{prop:"name",label:"用户名称"}},[a("el-input",{attrs:{placeholder:"请输入用户名称",clearable:"",readonly:""},on:{focus:e.readOnly},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name","string"===typeof t?t.trim():t)},expression:"listQuery.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"success",icon:"el-icon-search"},on:{click:e.functionYet}},[e._v("查询")]),a("el-button",{on:{click:function(t){return e.resetForm("listQuery")}}},[e._v("重置")])],1)],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"d-flex",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"success",icon:"el-icon-plus",round:""},on:{click:e.functionYet}},[e._v("添加")])],1)]),[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{align:"center",prop:"mobile",label:"账号"}}),a("el-table-column",{attrs:{align:"center",prop:"name",label:"名称"}}),a("el-table-column",{attrs:{align:"center",prop:"createTime",formatter:e.formatTime,label:"注册时间"}}),a("el-table-column",{attrs:{align:"center",prop:"isDelete",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":0,"inactive-value":1,"active-color":"#6dc542","inactive-color":"#B9B9B9"},on:{change:function(a){return e.changeState(t.row)}},model:{value:t.row.isDelete,callback:function(a){e.$set(t.row,"isDelete",a)},expression:"scope.row.isDelete"}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleRole(t.row)}}},[e._v("分配角色")]),a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("修改")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel("useQueryDel",t.row,"useQueryGetList")}}},[e._v("删除")])]}}])})],1)],a("el-pagination",{attrs:{"page-size":e.listQuery.pageSize,"current-page":e.listQuery.pageNum,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":function(t){return e.handlePageChange("useQueryGetList",t)}}})],2)],1)],1),a("el-dialog",{attrs:{title:"用户信息修改",visible:e.dialogVisible3,width:"25%","before-close":e.close3,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible3=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}],ref:"form",attrs:{"label-position":"left",rules:e.rules,model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名","label-width":"15%",prop:"name"}},[a("el-input",{attrs:{placeholder:"必填，请填写姓名",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"账号","label-width":"15%",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"必填，请填写账号",clearable:""},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),a("el-form-item",{attrs:{"label-width":"15%"}},[a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitForm("form")}}},[e._v("确定")]),a("el-button",{on:{click:function(t){return e.cancel("dialogVisible3","form")}}},[e._v("取消")])],1)],1)],1),a("el-dialog",{attrs:{title:"用户角色",visible:e.dialogVisible,width:"25%","before-close":e.close,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"success"},on:{click:function(t){return e.handleAddRole("dialogVisible2")}}},[e._v("添加")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData2,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"角色"}}),a("el-table-column",{attrs:{align:"center",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[a("el-button",{on:{click:function(t){return e.cancel("dialogVisible")}}},[e._v("取消")])],1)],1),a("el-dialog",{attrs:{title:"添加角色",visible:e.dialogVisible2,width:"30%","before-close":e.close2,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible2=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading2,expression:"dialogLoading2"}],staticStyle:{width:"100%"},attrs:{data:e.tableData3,stripe:""}},[a("el-table-column",{attrs:{prop:"uuid",label:"角色ID"}}),a("el-table-column",{attrs:{align:"center",prop:"name",label:"角色名称"}}),a("el-table-column",{attrs:{prop:"type",formatter:e.formatType,label:"是否是管理员"}}),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.handleAssignRole(t.row)}}},[e._v("添加")])]}}])})],1),a("el-pagination",{attrs:{"page-size":e.listQuery2.pageSize,"current-page":e.listQuery2.pageNum,layout:"total, prev, pager, next, jumper",total:e.total2},on:{"current-change":function(t){return e.handlePageChange2(t)}}}),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[a("el-button",{on:{click:function(t){return e.cancel("dialogVisible2")}}},[e._v("取消")])],1)],1)],1)},n=[],i=a("1da1"),l=a("5530"),r=(a("159b"),a("b64b"),a("96cf"),a("2f62")),o=a("f2fd"),c=a("c1df"),u=a.n(c),d={name:"UserQuery",components:{},mixins:[o["a"]],data:function(){var e=function(e,t,a){""===t?a(new Error("请输入账号")):/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(t)?a():a(new Error("请输入格式正确的账号"))};return{title:"添加",loading:!1,dialogLoading:!1,dialogLoading2:!1,total:0,total2:0,form:{name:null,mobile:null},tableData:[],tableData2:[],tableData3:[],listQuery:{pageSize:10,pageNum:1,name:null},listQuery2:{pageSize:5,pageNum:1,name:null},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,validator:e,trigger:"blur"}]},userId:null,dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1}},computed:Object(l["a"])({},Object(r["b"])(["communityId"])),created:function(){},methods:{handleAssignRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(JSON.stringify({roleIds:[e.uuid],id:t.userId})),t.dialogLoading2=!0,a.prev=2,a.next=5,t.uniApi.settings.useQueryAssignRoles(e.uuid,t.userId);case 5:t.dialogVisible2=!1,t.$message.success("操作成功"),t.uniApi.settings.useQueryList(t.userId);case 8:return a.prev=8,t.dialogLoading2=!1,a.finish(8);case 11:case"end":return a.stop()}}),a,null,[[2,,8,11]])})))()},formatType:function(e,t){var a=e[t.property];return 1===a?"超级管理员":"普通用户"},handlePageChange2:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.dialogLoading2=!0,t.listQuery2.pageNum=e,a.prev=2,a.next=5,t.uniApi.permission.permissionRoleGetList(t.listQuery2);case 5:s=a.sent,t.tableData3=s.list,t.total2=s.total;case 8:return a.prev=8,t.dialogLoading2=!1,a.finish(8);case 11:case"end":return a.stop()}}),a,null,[[2,,8,11]])})))()},handleAddRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.dialogLoading2=!0,t[e]=!0,a.prev=2,a.next=5,t.uniApi.permission.permissionRoleGetList(t.listQuery2);case 5:s=a.sent,t.tableData3=s.list,t.total2=s.total;case 8:return a.prev=8,t.dialogLoading2=!1,a.finish(8);case 11:case"end":return a.stop()}}),a,null,[[2,,8,11]])})))()},close:function(){this.cancel("dialogVisible")},close2:function(){this.cancel("dialogVisible2")},close3:function(){this.cancel("dialogVisible3")},handleEdit:function(e){var t=this;console.log(e),this.dialogVisible3=!0,this.$nextTick((function(){Object.keys(e).forEach((function(a){t.form[a]=e[a]}))})),console.log(this.form,"---------")},handleRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.userId=e.uuid,t.dialogVisible=!0,t.dialogLoading=!0,a.prev=3,a.next=6,t.uniApi.settings.useQueryList({userId:t.userId});case 6:s=a.sent,t.tableData2=s.roles;case 8:return a.prev=8,t.dialogLoading=!1,a.finish(8);case 11:case"end":return a.stop()}}),a,null,[[3,,8,11]])})))()},changeState:function(e){var t=this;this.$nextTick((function(){Object.keys(e).forEach((function(a){t.form[a]=e[a]})),t.onSubmit()}))},formatTime:function(e,t){var a=e[t.property];return u()(a).format("YYYY-MM-DD hh:mm:ss")},handleAdd:function(){},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dialogLoading=!0,t.next=3,e.uniApi.settings.useQueryEdit(JSON.stringify(e.form));case 3:e.$message.success("操作成功"),e.dialogLoading=!1,e.dialogVisible3=!1,e.getList("useQueryGetList");case 7:case"end":return t.stop()}}),t)})))()}}},b=d,f=a("2877"),m=Object(f["a"])(b,s,n,!1,null,"82d938bc",null);t["default"]=m.exports},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="4678"},f2fd:function(e,t,a){"use strict";t["a"]={data:function(){return{total:0,listQuery:{pageSize:10,pageNum:1}}},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.handleClose(e)},submitForm:function(e,t){var a=this;this.$refs[e].validate((function(e){if(!e)return!1;a.onSubmit(t)}))},handlePageChange:function(e){this.listQuery.pageNum=e,this.getList()},functionYet:function(){this.$message.warning("当前为演示状态，功能暂未开通")},readOnly:function(){this.$message.warning("当前为演示状态，禁止输入内容")}}}}}]);