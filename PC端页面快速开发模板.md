### Index_vue模板

```vue
<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col>
        <el-card class="box-card">
          <div class="title">
            {{ header[attr] }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <inspection-point :communityId="communityUuid" v-if="attr==='inspection-point'"/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InspectionPoint from './components/InspectionPoint';
export default {
  name: 'Index',
  components:{
  },
  data(){
    return {
      header: {
        'inspection-point': '巡检点',
      },
      attr: 'inspection-point',
      communityUuid:null,
    }
  },
  computed:{
    ...mapGetters(['communityId']),
  },
  created() {
    this.communityUuid=this.communityId['data']
    console.log("社区id:",this.communityId['data'])
    this.attr = this.$route.path.split('/')[2];
    console.log('路由信息：', this.attr);
  },
};
</script>

<style scoped lang="scss">
.inspection {
  margin: 26px;

  .title {
    font-size: 35px;
  }

  .el-row {
    margin-bottom: 20px;
  }
}
</style>

```



### Vue页面模板

```vue
<template>
<div class="clocking-in-container">
    <el-row class="park-el-row" :gutter="20">
        <el-col>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>查询条件</span>
                    <!--            <el-button style="float: right; padding: 3px 0" type="text" @click="getMore">{{ hint.title }}</el-button>-->
    </div>
                <el-form :inline="true" :model="listQuery" ref="listQuery" class="demo-form-inline">
                    <el-form-item prop="test">
                        <el-input v-model.trim="listQuery.test" placeholder="请输入巡检点ID" clearable></el-input>
    </el-form-item>
                    <el-form-item prop="test">
                        <el-select v-model="listQuery.test" placeholder="请选择巡检点类型">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    </el-form-item>
                    <el-form-item prop="test">
                        <el-date-picker
                                        v-model="listQuery.test"
                                        type="datetime"
                                        placeholder="请选择打卡时间">
    </el-date-picker>
    </el-form-item>
                    <el-form-item>
                        <el-button type="success" icon="el-icon-search" @click="getList">查询</el-button>
                        <el-button @click="resetForm('listQuery')">重置</el-button>
    </el-form-item>
    </el-form>
    </el-card>
    </el-col>
    </el-row>

    <el-row :gutter="20">
        <el-col>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span class="btn-title">巡检点信息</span>
                    <el-button type="success" style="float: right;" icon="el-icon-plus" @click="handleAdd" round>添加</el-button>
    </div>
                <template>
                    <el-table
                              :data="tableData"
                              stripe
                              v-loading="loading"
                              style="width: 100%">
                        <el-table-column
                                         align="center"
                                         prop="feeName"
                                         label="巡检点ID">
    </el-table-column>
                        <el-table-column
                                         fixed="right"
                                         label="操作"
                                         width="250">
                            <template slot-scope="scope">
                                <el-button size="mini" type="danger" @click="handleDel(scope.row)">删除</el-button>
</template>
</el-table-column>
</el-table>
</template>
<!--          分页-->
<el-pagination
               @current-change="handlePageChange"
               :page-size="listQuery.pageSize"
               :current-page="listQuery.pageNum"
               layout="total, prev, pager, next, jumper"
               :total="total">
</el-pagination>
</el-card>
</el-col>
</el-row>
<!--    dialog 费用项添加-->
<el-dialog
           :title="title"
           :visible.sync="dialogVisible"
           width="30%"
           :before-close="cancel"
           :close-on-click-modal="false">
    <el-form ref="form" label-position="left" :rules="rules" :model="form" label-width="80px" v-loading="dialogLoading">

        <el-form-item label="巡检点名称" label-width="25%" prop="feeName">
            <el-input v-model="form.feeName" placeholder="必填，请填写巡检点名称"></el-input>
        </el-form-item>
        <el-form-item label="费用标识" label-width="25%" prop="feeFlag">
            <el-select v-model="form.feeFlag" placeholder="必填，请选择巡检类型" class="input-width">
                <el-option v-for="(item) in 2"
                           :key="item.id"
                           :label="item.dictValue"
                           :value="item.dictCode"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="备注" label-width="25%" prop="additionalAmount">
            <el-input type="textarea" v-model="form.remark" placeholder="选填，请填写备注"></el-input>
        </el-form-item>
        <el-form-item label-width="25%">
            <el-button type="success" @click="submitForm('form')">{{ status }}</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</div>
</template>

<script>
    import crud from '../js/crud';

    export default {
        name: 'ClockingInIntelligent',
        mixins: [crud],
        props: {
            communityId: {
                type: Number,
                default: 0
            }
        },
        data() {
            var validateFiled = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请添加字典编码'));
                } else {
                    callback();
                }
            };
            return {
                title: '添加巡检计划',
                status: '确定',
                loading: false,
                dialogLoading:false,
                total: 0,
                form: {},
                tableData: [],
                listQuery: {
                    pageSize: 10,
                    pageNum: 1,
                    test: '',
                    communityUuid: this.communityId
                },
                rules: {
                    pointObjId: [
                        { required: true, validator: validatePointObjId, trigger: 'blur' },
                    ],
                    inspectionName: [
                        { required: true, message: '请输入巡检点名称', trigger: 'blur' },
                    ],
                },
                dialogVisible: false
            };
        },
        created() {

        },
        methods: {
            cancel() {
                this.dialogVisible = false;
                this.resetForm('form');
            },
            getList() {
                this.loading=true
                this.api({
                    url:'',
                    params:this.listQuery
                }).then(data=>{
                    console.log("表格返回值：",data)
                    this.total=data.total
                    this.tableData=data.list
                }).finally(()=>{
                    this.loading=false
                })
            },
            handleAdd() {
                this.dialogVisible = true;
            }
        }
    };
</script>
```

### crud.js

```js
export default {
    data(){
        return {

        }
    },
    methods:{
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.handleClose(formName)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.onSubmit()
                } else {
                    return false;
                }
            });
        },
        handlePageChange(pageNum){
            this.listQuery.pageNum=pageNum
            this.getList()
        },
    }
}

```

### 常用方法

```js
cancel(){
    this.dialogVisible=false
    this.resetForm('form')
},
handleClose(form) {
    if (this.$refs[form]!==undefined) {
        console.log("清空表单：",this.$refs[form])
        this.$refs[form].resetFields();
        let keys = Object.keys(this.$refs[form].model)
        keys.forEach(item=>{
            if (item!='communityUuid' && item!="pageSize" && item !='pageNum')
            {
                this.$refs[form].model[item]=""
            }
        })
    }
},
    //dialog提交或修改信息
onSubmit(){
    this.dialogLoading=true
    this.api({
        url:this.title===''?'':''
    }).finally(()=>{
        this.dialogLoading=false
    })
}
//获取字典表
getDictValue(fileds){
    this.api({
        url:'community/dict/getDictDataValue',
        params:{
            filed:fileds
        },
        type:'json'
    }).then(data=>{
        console.log("返回的数据集：",data)
        data.forEach(item=>{
            if (item.filed==23)
            {
                this.pointObjType=item.parent
            }
        })
    })
},
    //表格格式化信息
    formatTest(row,column){
        let data = row[column.property]
        for (let i = 0; i < this.inspectionPlanPeriod.length; i++) {
            if (data===this.inspectionPlanPeriod[i]['dictCode']){
                return this.inspectionPlanPeriod[i]['dictValue']
            }
        }
        return
    },
```

