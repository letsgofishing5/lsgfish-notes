### Index_vue模板

```vue
<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col>
        <el-card class="box-card">
          <div class="title">
            {{ $route.meta.title }}
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
      attr: 'inspection-point',
      communityUuid:null,
    }
  },
  computed:{
    ...mapGetters(['communityId']),
  },
  created() {
    this.communityUuid=this.communityId['data']
    this.attr = this.$route.path.split('/')[2];
  },
};
</script>

<style scoped lang="scss">
.container {
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
            <el-button type="success" @click="submitForm('form')">确定</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</div>
</template>

<script>
    export default {
        data() {
            var validateFiled = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请添加字典编码'));
                } else {
                    callback();
                }
            };
            return {
                title: '添加',
                loading: false,
                dialogLoading:false,
                total: 0,
                form: {},
                tableData: [],
                listQuery: {
                    pageSize: 10,
                    pageNum: 1,
                    test: ''
                },
                rules: {
                    pointObjId: [
                        { required: true, validator: validateFiled, trigger: 'blur' },
                    ],
                    inspectionName: [
                        { required: true, message: '请输入巡检点名称', trigger: 'blur' },
                    ],
                },
                dialogVisible: false
            };
        },
    };
</script>
```

### crud.js

```js

/**
* 重置表单
* @param formName
*/
resetForm(formName) {
    this.$refs[formName].resetFields();
}
/**
 *  提交表单，进行校验
 * @param formName
 */
submitForm(formName) {
    this.$refs[formName].validate(valid => {
        if (valid) {
            this.onSubmit();
        } else {
            return false;
        }
    });
}
/**
 * 获取字典表数据
 * @param fileds 是一个字符串类型，以逗号分隔
 */
getDictValue(fileds) {
    this.uniApi.getDictValue(fileds).then(data => {
        data.forEach(item => {
            if (item.filed === '38') {
                this.punchType = item.parent;
            }
        });
    });
}
/**
 * 删除
 * @param row
 * @param funcName
 */
handleDel(row, funcName) {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        this.loading = true;
        this.loading = false;
    })
}
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

### 常用方法

```js
cancel(){
    this.dialogVisible=false
    this.resetForm('form')
},

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

```

