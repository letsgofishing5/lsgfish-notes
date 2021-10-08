(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7f58a70"],{"2afb":function(e,t,n){},"2beb":function(e,t,n){"use strict";n("f038")},"369a":function(e,t,n){"use strict";n("2afb")},"43d2":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"account-add-container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名称",prop:"name"}},[n("el-input",{staticClass:"input-width30",attrs:{placeholder:"输入用户名称",readonly:""},on:{focus:e.functionYet},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"手机名称",prop:"mobile"}},[n("el-input",{staticClass:"input-width30",attrs:{placeholder:"输入手机号码,手机号即账号",readonly:""},on:{focus:e.functionYet},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),n("el-form-item",{attrs:{label:"岗位",prop:"test"}},[n("el-select",{staticClass:"input-width",attrs:{multiple:"",placeholder:"请选择",readonly:""},on:{focus:e.functionYet},model:{value:e.form.postIds,callback:function(t){e.$set(e.form,"postIds",t)},expression:"form.postIds"}},e._l(e.post,(function(e){return n("el-option",{key:e.value,attrs:{label:e.postName,value:e.postId}})})),1)],1),n("el-form-item",{attrs:{label:"归属部门"}},[n("el-input",{staticClass:"input-width30",attrs:{placeholder:"请选择归属部门",readonly:""},on:{focus:e.functionYet},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName",t)},expression:"form.deptName"}})],1),n("el-form-item",{attrs:{label:"登录密码",prop:"code"}},[n("el-input",{staticClass:"input-width30",attrs:{type:"password",placeholder:"输入登录密码","show-password":"",readonly:""},on:{focus:e.functionYet},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),n("el-form-item",{attrs:{label:"用户状态",prop:"isDelete"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:e.form.isDelete,callback:function(t){e.$set(e.form,"isDelete",t)},expression:"form.isDelete"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:e.functionYet}},[e._v("立即创建")]),n("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)],1),n("el-dialog",{attrs:{title:"选择部门",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-input",{attrs:{placeholder:"输入关键字进行快速查找"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),n("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:e.treeData,props:e.defaultProps,"highlight-current":"","default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.chooseNode}}),n("el-button",{attrs:{type:"success",round:""},on:{click:e.chooseDepartment}},[e._v("选择部门")]),n("el-button",{attrs:{round:""},on:{click:function(t){return e.cancel("dialogVisible")}}},[e._v("取消")])],1)],1)},i=[],r=n("1da1"),a=(n("96cf"),n("4de4"),n("b0c0"),n("f2fd")),s={name:"AccountAdd",mixins:[a["a"]],data:function(){var e=function(e,t,n){/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(t)?n():n(new Error("请输入正确的手机号码"))},t=function(e,t,n){t&&t.length?t.length<6?n(new Error("请输入密码长度大于6位数")):t.length>20?n(new Error("请输入密码长度小于20位数")):n():n(new Error("请输入密码"))};return{loading:!1,form:{name:null,mobile:null,code:null,test:null,deptName:"",departmentId:null,isDelete:0,postIds:[]},searchForm:{},rules:{name:[{required:!0,message:"请填写姓名"}],mobile:[{required:!0,validator:e,trigger:["blur","change"]}],code:[{required:!0,validator:t,trigger:["blur","change"]}]},dialogVisible:!1,state1:"",sex:[],department:[],post:[],deptName:"",deptId:"",filterText:"",treeData:[],defaultProps:{children:"depts",label:"name"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)},"form.postIds":function(e){console.log("this.form.post:",e)}},created:function(){},methods:{chooseDepartment:function(){if(!this.deptName||!this.deptId)return this.$message.warning("请选择部门");this.form.deptName=this.deptName,this.form.departmentId=this.deptId,this.dialogVisible=!1},getPostInfo:function(){var e=this;this.uniApi.settings.accountGetPostInfo().then((function(t){e.post=t}))},getDepartment:function(){var e=this;this.uniApi.settings.accountGetDepartment().then((function(t){console.log("获取系统用户的信息：",t),t.name=t.companyName,e.treeData=[t]}))},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},chooseNode:function(e){this.deptName=e.name,this.deptId=e.id},postChoose:function(){this.dialogVisible=!0},onSubmit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,n=JSON.stringify(e.form),t.next=5,e.uniApi.settings.accountAdd(n);case 5:e.$message.success("添加成功"),e.resetForm("form");case 7:return t.prev=7,e.loading=!1,t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[1,,7,10]])})))()}}},l=s,c=(n("2beb"),n("369a"),n("2877")),u=Object(c["a"])(l,o,i,!1,null,"79a85c2c",null);t["default"]=u.exports},f038:function(e,t,n){},f2fd:function(e,t,n){"use strict";t["a"]={data:function(){return{total:0,listQuery:{pageSize:10,pageNum:1}}},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.handleClose(e)},submitForm:function(e,t){var n=this;this.$refs[e].validate((function(e){if(!e)return!1;n.onSubmit(t)}))},handlePageChange:function(e){this.listQuery.pageNum=e,this.getList()},functionYet:function(){this.$message.warning("当前为演示状态，功能暂未开通")},readOnly:function(){this.$message.warning("当前为演示状态，禁止输入内容")}}}}}]);