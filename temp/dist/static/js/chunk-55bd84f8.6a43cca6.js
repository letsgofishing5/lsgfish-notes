(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55bd84f8"],{"321e":function(e,t,l){},bc91:function(e,t,l){"use strict";l("321e")},dd3e:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"container"},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:4}},[l("el-tree",{attrs:{data:e.data,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1),l("el-col",{attrs:{span:18}},[l("el-form",{ref:"listQuery",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.listQuery}},[l("el-form-item",{attrs:{prop:"test",label:"员工姓名"}},[l("el-input",{attrs:{placeholder:"请输入员工姓名",clearable:"",readonly:""},on:{focus:e.readOnly},model:{value:e.listQuery.test,callback:function(t){e.$set(e.listQuery,"test","string"===typeof t?t.trim():t)},expression:"listQuery.test"}})],1),l("el-form-item",{attrs:{prop:"test",label:"员工编号"}},[l("el-input",{attrs:{placeholder:"请输入员工编号",clearable:"",readonly:""},on:{focus:e.readOnly},model:{value:e.listQuery.test,callback:function(t){e.$set(e.listQuery,"test","string"===typeof t?t.trim():t)},expression:"listQuery.test"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"success",round:"",icon:"el-icon-search"},on:{click:e.functionYet}},[e._v("查询")]),l("el-button",{attrs:{round:""},on:{click:function(t){return e.resetForm("listQuery")}}},[e._v("重置")])],1)],1),[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{align:"center",prop:"name",label:"员工姓名"}}),l("el-table-column",{attrs:{align:"center",prop:"bianhao",label:"员工编号"}}),l("el-table-column",{attrs:{align:"center",prop:"zhiwei",label:"职位"}}),l("el-table-column",{attrs:{align:"center",prop:"zhiye",label:"考勤号"}}),l("el-table-column",{attrs:{align:"center",prop:"zhiwu",label:"微信号/手机号"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"warning"},on:{click:e.functionYet}},[e._v("修改")]),l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:e.functionYet}},[e._v("删除")])]}}])})],1)],l("el-pagination",{attrs:{"page-size":e.listQuery.pageSize,"current-page":e.listQuery.pageNum,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handlePageChange}})],2)],1)],1)},n=[],i=l("f2fd"),r={name:"Organization",mixins:[i["a"]],data:function(){return{listQuery:{},total:0,data:[{label:"冬瓜山本部",children:[{label:"经营管理层",children:[]}]},{label:"矿外人员",children:[{label:"铜冠矿建",children:[{label:"铜冠矿建项目部"}]}]},{label:"调出人员",children:[{label:"本部调出人员",children:[]},{label:"外协调出人员",children:[]}]},{label:"临时组织",children:[]}],defaultProps:{children:"children",label:"label"},tableData:[{name:"熊荣贵",bianhao:"100257",zhiwei:"",zhiye:"行政管理",zhiwu:"中初层正职-正科"},{name:"周贵斌",bianhao:"100011",zhiwei:"办公室地质技术",zhiye:"工程技术类",zhiwu:"高级技术主管"},{name:"任家斌",bianhao:"100015",zhiwei:"办公室党群干事",zhiye:"专业管理类",zhiwu:"业务助理"},{name:"刘英",bianhao:"100016",zhiwei:"办公室文书",zhiye:"专业管理类",zhiwu:"业务主办"}]}},methods:{handleNodeClick:function(e){console.log(e)},handlePageChange:function(){}}},o=r,s=(l("bc91"),l("2877")),c=Object(s["a"])(o,a,n,!1,null,"13cda482",null);t["default"]=c.exports},f2fd:function(e,t,l){"use strict";t["a"]={data:function(){return{total:0,listQuery:{pageSize:10,pageNum:1}}},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.handleClose(e)},submitForm:function(e,t){var l=this;this.$refs[e].validate((function(e){if(!e)return!1;l.onSubmit(t)}))},handlePageChange:function(e){this.listQuery.pageNum=e,this.getList()},functionYet:function(){this.$message.warning("当前为演示状态，功能暂未开通")},readOnly:function(){this.$message.warning("当前为演示状态，禁止输入内容")}}}}}]);