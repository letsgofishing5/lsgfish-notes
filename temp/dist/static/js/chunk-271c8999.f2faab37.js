(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-271c8999"],{"0c2e":function(e,t,s){"use strict";s("159b"),s("d3b7");t["a"]={data:function(){return{listQuery:{pageSize:10,pageNum:1},total:0}},methods:{resetForm:function(e){this.$refs[e].resetFields()},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.onSubmit()}))},getDictValue:function(e){var t=this;this.uniApi.getDictValue(e).then((function(e){e.forEach((function(e){"38"===e.filed&&(t.punchType=e.parent)}))}))},cancel:function(e,t){this[e]=!1,this.resetForm(t)},handleEdit:function(e,t){var s=this;this.title="修改",this.$nextTick((function(){for(var t in e)s.form[t]=e[t]})),this[t]=!0},handleDel:function(e,t){var s=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s.loading=!0,s.uniApi.切换自己的名字[t](e).then((function(){s.loading=!1,s.$message.success("删除成功"),s.getList("intelligentGetList")})).catch((function(){s.loading=!1}))})).catch((function(){s.$message({type:"info",message:"已取消删除"})}))},handlePageChange:function(e,t){this.listQuery.pageNum=t,this.getList(e)},getList:function(e){var t=this;this.loading=!0,this.uniApi.clockingIn[e](this.listQuery).then((function(e){console.log("返回的数据：",e),t.tableData=e.data})).finally((function(){t.loading=!1}))}}}},"2d66":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("el-row",{staticClass:"uni-row-bottom-20px",attrs:{gutter:20}},[s("el-col",[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("查询条件")])]),s("el-form",{ref:"listQuery",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.listQuery,"label-position":"right","label-width":"85px"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{prop:"deptName",label:"部门名称"}},[s("el-input",{attrs:{placeholder:"请输入部门名称",clearable:""},on:{focus:function(t){return e.getDepts("dialogVisible")}},model:{value:e.listQuery.deptName,callback:function(t){e.$set(e.listQuery,"deptName","string"===typeof t?t.trim():t)},expression:"listQuery.deptName"}})],1)],1),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{prop:"test",label:"员工编号"}},[s("el-input",{attrs:{placeholder:"请输入员工编号",clearable:""},model:{value:e.listQuery.test,callback:function(t){e.$set(e.listQuery,"test","string"===typeof t?t.trim():t)},expression:"listQuery.test"}})],1)],1),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{prop:"test",label:"员工姓名"}},[s("el-input",{attrs:{placeholder:"请输入员工姓名",clearable:""},model:{value:e.listQuery.test,callback:function(t){e.$set(e.listQuery,"test","string"===typeof t?t.trim():t)},expression:"listQuery.test"}})],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{prop:"time",label:"截止时间"}},[s("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"请选择截止时间"},model:{value:e.listQuery.time,callback:function(t){e.$set(e.listQuery,"time",t)},expression:"listQuery.time"}})],1)],1),s("el-col",{attrs:{span:6}},[s("el-form-item",[s("el-button",{attrs:{round:"",type:"success",icon:"el-icon-search"},on:{click:function(t){return e.getList("onTheJobStaffQuery")}}},[e._v("查询")]),s("el-button",{attrs:{round:""},on:{click:function(t){return e.resetForm("listQuery")}}},[e._v("重置")])],1)],1)],1)],1)],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",[s("el-card",{staticClass:"box-card"},[[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{height:"450",border:"",data:e.tableData,stripe:""}},[s("el-table-column",{attrs:{align:"center",type:"index",prop:"deptId",width:"150",label:"序号"}}),s("el-table-column",{attrs:{align:"center",prop:"userid",label:"人员编号"}}),s("el-table-column",{attrs:{align:"center",prop:"userName",label:"姓名"}}),s("el-table-column",{attrs:{align:"center",prop:"deptName",label:"部门名称"}}),s("el-table-column",{attrs:{align:"center",prop:"workAddress",label:"上班地点"}}),s("el-table-column",{attrs:{align:"center",prop:"workTime",label:"上班时间"}})],1)],s("el-pagination",{attrs:{"page-size":e.listQuery.pageSize,"current-page":e.listQuery.pageNum,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handlePageChange}})],2)],1)],1),s("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"30%","before-close":e.cancel,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[[s("el-table",{staticStyle:{width:"100%"},attrs:{height:"300","highlight-current-row":"",data:e.tableData2},on:{"current-change":e.handleCurrentChange}},[s("el-table-column",{attrs:{prop:"deptId",label:"部门编号"}}),s("el-table-column",{attrs:{prop:"deptName",label:"部门名称"}}),s("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(s){return e.handleDel(t.row)}}},[e._v("选择")])]}}])})],1)],s("div",{staticClass:"dialog-btn"},[s("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitForm("form")}}},[e._v("确定")]),s("el-button",{on:{click:function(t){return e.cancel("dialogVisible")}}},[e._v("取消")])],1)],2)],1)},n=[],r=s("1da1"),l=(s("96cf"),s("0c2e")),i=s("c1df"),c=s.n(i),o=s("4972"),u={name:"OnTheJobStaffQuery",mixins:[l["a"]],data:function(){var e=function(e,t,s){""===t?s(new Error("请添加字典编码")):s()};return{title:"添加",loading:!1,dialogLoading:!1,total:0,form:{},tableData:[],tableData2:[],listQuery:{test:"",deptName:"部门1",deptId:"4444",time:c()(new Date).format("YYYY-MM-DD hh:mm:ss")},rules:{pointObjId:[{required:!0,validator:e,trigger:"blur"}],inspectionName:[{required:!0,message:"请输入巡检点名称",trigger:"blur"}]},dialogVisible:!1,tempDeptId:null}},methods:{getDepts:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t[e]=!0,s.next=3,Object(o["a"])();case 3:t.tableData2=s.sent.data;case 4:case"end":return s.stop()}}),s)})))()},handleCurrentChange:function(e){console.log("选中的表单：",e),this.tempDeptId=e.id}}},d=u,f=(s("9322"),s("2877")),b=Object(f["a"])(d,a,n,!1,null,"31b3dc5f",null);t["default"]=b.exports},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},4972:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"c",(function(){return r})),s.d(t,"d",(function(){return l})),s.d(t,"b",(function(){return i}));var a=s("b775");function n(){return Object(a["a"])({url:"localDept/list",method:"get"})}function r(e){return Object(a["a"])({url:"localUser/list",method:"get",params:e})}function l(e){return Object(a["a"])({url:"atten/insertAtten",method:"get",params:e})}function i(e){return Object(a["a"])({url:"atten/attenList",method:"get",params:e})}},9322:function(e,t,s){"use strict";s("ea57")},ea57:function(e,t,s){}}]);