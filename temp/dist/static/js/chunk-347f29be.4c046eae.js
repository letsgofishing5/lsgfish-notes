(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347f29be"],{"3f6d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",[a("el-card",{staticClass:"box-card"},[[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",height:"350"}},[a("el-table-column",{attrs:{align:"center",prop:"userId",label:"员工号"}}),a("el-table-column",{attrs:{align:"center",prop:"userName",label:"姓名"}}),a("el-table-column",{attrs:{align:"center",prop:"time",label:"打卡时间"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(a){return e.buka(t.row)}}},[e._v("补卡")])]}}])})],1)],a("el-pagination",{attrs:{"page-size":e.listQuery.pageSize,"current-page":e.listQuery.pageNum,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handlePageChange}})],2)],1)],1),a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"25%","before-close":e.closeDialog,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"listQuery2",attrs:{model:e.listQuery2,"label-position":"right","label-width":"85px",rules:e.rules}},[a("el-form-item",{attrs:{prop:"swingTime",label:"打卡时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择打卡时间"},model:{value:e.listQuery2.swingTime,callback:function(t){e.$set(e.listQuery2,"swingTime",t)},expression:"listQuery2.swingTime"}})],1),a("el-form-item",{attrs:{prop:"orgName",label:"打卡类型"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择打卡类型",clearable:""},model:{value:e.listQuery2.orgName,callback:function(t){e.$set(e.listQuery2,"orgName",t)},expression:"listQuery2.orgName"}},e._l(e.cardType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.save("listQuery2")}}},[e._v("确 定")])],1)],1)],1)},r=[],n=a("1da1"),i=(a("159b"),a("96cf"),a("4972")),l=a("8087"),c=a("4105"),o=a("c1df"),u=a.n(o),d={name:"WellUnderCard",mixins:[c["a"]],data:function(){return{title:"添加",time:[new Date(Date.now()-2592e6),new Date],loading:!1,loading2:!1,dialogLoading:!1,total:0,form:{},tableData:[{name:1}],tableData2:[],listQuery:{pageSize:10,pageNum:1,userId:"",userName:"",deptId:"",startTime:u()(new Date(Date.now()-2592e6)).format("YYYY-MM-DD HH:mm:ss"),endTime:u()(new Date).format("YYYY-MM-DD HH:mm:ss")},listQuery2:{userId:null,orgName:null,deptId:"",swingTime:null,personName:null},rules:{deptId:[{required:!0,message:"请选择部门",trigger:"blur"}],orgName:[{required:!0,message:"请选择打卡类型",trigger:"blur"}],swingTime:[{required:!0,message:"请选择打卡时间",trigger:"blur"}]},dialogVisible:!1,dept:null,cardType:[{value:"上井",label:"上井"},{value:"下井",label:"下井"}],multipleSelection:{},deptName:""}},watch:{time:function(e){this.listQuery.startTime=e?u()(e[0]).format("YYYY-MM-DD hh:mm:ss"):null,this.listQuery.endTime=e?u()(e[1]).format("YYYY-MM-DD hh:mm:ss"):null}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("-----",e.$route.query),e.$route.query&&e.$route.query.deptId&&e.$route.query.deptName){t.next=3;break}return t.abrupt("return",e.$router.push("underCurrentNumberWells"));case 3:return e.listQuery.deptId=e.$route.query.deptId,e.deptName=e.$route.query.deptName,e.getLook(),t.next=8,Object(i["a"])();case 8:e.dept=t.sent.data;case 9:case"end":return t.stop()}}),t)})))()},methods:{getLook:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(l["b"])(e.listQuery.deptId);case 3:a=t.sent,console.log("下进补卡：",a),e.tableData=a.data,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},closeDialog:function(){this.cancel("dialogVisible","listQuery2")},query:function(){this.listQuery.pageNum=1,this.getList()},getList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(l["a"])(e.listQuery);case 3:a=t.sent,e.tableData=a.data.rows,e.total=a.data.total,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},buka:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e,"-------"),t.dialogVisible=!0,a.next=4,Object(i["a"])();case 4:t.dept=a.sent.data,t.listQuery2.userId=e.userId,t.listQuery2.personName=e.userName,console.log("获取的部门：",t.dept);case 8:case"end":return a.stop()}}),a)})))()},handleSelectionChange:function(e){var t=this;if(e.length>1)return this.$message.warning("只支持一次选择一条信息");e.forEach((function(e){var a={};a.personId=e.userId,a.personName=e.userName,a.deptId=e.deptId,t.multipleSelection=a})),console.log("选择的只：",this.multipleSelection)},getYuangong:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return t.loading2=!0,e.next=4,Object(i["c"])(t.listQuery2);case 4:t.tableData2=e.sent.data,t.loading2=!1,e.next=9;break;case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},save:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$refs[e].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=20;break}return t.dialogVisible=!0,t.loading2=!0,console.log(t.listQuery2.swingTime),t.multipleSelection.deptId=t.listQuery.deptId,t.multipleSelection.personId=t.listQuery2.userId,t.multipleSelection.personName=t.listQuery2.personName,t.multipleSelection.swingTime=u()(t.listQuery2.swingTime).format("YYYY-MM-DD hh:mm:ss"),t.multipleSelection.orgName=t.listQuery2.orgName,"下井"===t.listQuery2.orgName?(t.multipleSelection.deviceCode="1",t.multipleSelection.deviceName="下井补卡"):(t.multipleSelection.deviceCode="13",t.multipleSelection.deviceName="上井补卡"),t.multipleSelection.dgs=1,e.next=13,Object(l["c"])(t.multipleSelection);case 13:s=e.sent,t.loading2=!1,t.dialogVisible=!1,t.$message.success(s.message),t.getLook(),e.next=21;break;case 20:return e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})))()}}},b=d,f=a("2877"),m=Object(f["a"])(b,s,r,!1,null,"272a9c9b",null);t["default"]=m.exports},4105:function(e,t,a){"use strict";t["a"]={methods:{resetForm:function(e){this.$refs[e].resetFields()},cancel:function(e,t){this[e]=!1,this.resetForm(t)},handlePageChange:function(e){this.listQuery.pageNum=e,this.getList()}}}},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},4972:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return l}));var s=a("b775");function r(){return Object(s["a"])({url:"localDept/list",method:"get"})}function n(e){return Object(s["a"])({url:"localUser/list",method:"get",params:e})}function i(e){return Object(s["a"])({url:"atten/insertAtten",method:"get",params:e})}function l(e){return Object(s["a"])({url:"atten/attenList",method:"get",params:e})}},8087:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var s=a("b775");function r(e){return Object(s["a"])({url:"atten/insertWell",method:"get",params:e})}function n(e){return Object(s["a"])({url:"atten/wellList",method:"get",params:e})}function i(e){return Object(s["a"])({url:"well/look",method:"get",params:{deptId:e}})}}}]);