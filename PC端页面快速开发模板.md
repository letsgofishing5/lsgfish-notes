### Index_vue模板

```vue
<template>
  <div class="inspection">
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
    <inspection-path :communityId="communityUuid" v-if="attr==='inspection-path'"/>
    <inspection-plan :communityId="communityUuid" v-if="attr==='inspection-plan'"/>
    <inspection-task :communityId="communityUuid" v-if="attr==='inspection-task'"/>
    <inspection-detail :communityId="communityUuid" v-if="attr==='inspection-detail'"/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InspectionPoint from './components/InspectionPoint';
import InspectionPath from './components/InspectionPath';
import InspectionPlan from './components/InspectionPlan';
import InspectionTask from './components/InspectionTask';
import InspectionDetail from './components/InspectionDetail';
export default {
  name: 'Index',
  components:{
    InspectionDetail,
    InspectionTask,
    InspectionPoint,InspectionPath,InspectionPlan
  },
  data(){
    return {
      header: {
        'inspection-point': '巡检点',
        'inspection-path': '巡检路线',
        'inspection-plan': '巡检计划',
        'inspection-task': '巡检任务',
        'inspection-detail': '巡检明细',
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
      <el-form ref="form" :rules="rules" :model="form" label-width="80px" v-loading="loading">

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
      default: ''
    }
  },
  data() {
    return {
      title: '添加巡检计划',
      status: '确定',
      loading: false,
      total: 0,
      form: {},
      tableData: [],
      listQuery: {
        pageSize: 10,
        pageNum: 1,
        test: '',
        communityUuid: this.communityId
      },
      rules: {},
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
      /*this.loading=true
      this.api({
        url:'/community/property/page',
        params:this.listQuery
      }).then(data=>{
        console.log("表格返回值：",data)
        this.total=data.total
        this.tableData=data.list
      }).finally(()=>{
        this.loading=false
      })*/
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

