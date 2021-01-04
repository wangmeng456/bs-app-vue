<template>
  <div class="container">
    <div class="container-title">
      <el-form ref="form" :model="form" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="函数名称：">
              <el-input
                v-model="form.name"
                placeholder="请输入函数名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="算法类型：">
              <el-select
                v-model="form.reg"
                style="width: 90%"
                placeholder="请选择算法类型"
              >
                <el-option
                  v-for="(item, index) in option"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form>
              <el-button type="primary">开始</el-button>
              <el-button type="info">取消</el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="container-main">
      <el-button type="warning" style="margin-bottom:15px" @click="developmentVerification">新增函数</el-button>
      <el-table :data="tableData" border>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column
          label="函数标识"
          prop="identification"
        ></el-table-column>
        <el-table-column label="函数名称" prop="name"></el-table-column>
        <el-table-column label="算法类型" prop="type"></el-table-column>
        <el-table-column
          label="需求来源"
          prop="time"
        ></el-table-column>
        <el-table-column label="应用类型" prop="types"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button-group>
              <el-button style="margin: 0px 4px" type="text">
                基本信息
              </el-button>
              <el-button type="text">/</el-button>
              <el-button
                @click="versionManagement(scope.row)"
                style="margin: 0px 4px"
                type="text"
              >
                开发调试界面
              </el-button>
              <el-button type="text">/</el-button>
              <el-button style="margin: 0px 4px" type="text"> 发布 </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="新增定义函数"
      :visible.sync="developmentVerifications"
      width="50%"
      :before-close="developmentVerificationClose"
    >
      <el-form ref="form1" :model="form1" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="12">
        <el-form-item label="函数名称：">
          <el-input
            v-model="form1.name"
          ></el-input>
        </el-form-item>
          </el-col>
          <el-col :span="12">
        <el-form-item label="算法类型：">
          <el-select v-model="form2.type1" style="width: 100%" placeholder="">
            <el-option
              v-for="(item, index) in form1.option1"
              :key="index"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
        <el-form-item label="应用类型：">
          <el-select v-model="form2.type2" style="width: 100%" placeholder="">
            <el-option
              v-for="(item, index) in form1.option2"
              :key="index"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
          </el-col>
          <el-col :span="12">
        <el-form-item label="需求来源：">
          <el-select v-model="form2.type3" style="width: 100%" placeholder="">
            <el-option
              v-for="(item, index) in form1.option3"
              :key="index"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="函数描述：">
          <el-input
            type="textarea"
            v-model="form1.content"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align:center">
          <el-button type="primary" @click="developmentVerifications = false">保存</el-button>
          <el-button type="info" @click="developmentVerifications = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="开发调试界面"
      :visible.sync="versionManagements"
      width="50%"
      :before-close="versionManagementClose"
    >
      <el-form ref="form2" :model="form2" label-width="110px">
        <el-form-item label="代码类型：">
          <el-select v-model="form2.name" style="width: 100%" placeholder="">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="函数代码：">
          <el-input
            type="textarea"
            v-model="form2.content"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      form: {
        name: "",
        reg: "",
      },
      option: [
        { name: "聚类算法", value: "1" },
        { name: "相关性算法", value: "2" },
        { name: "回归算法", value: "3" },
      ],
      options: [
        { name: "udf", value: "1" },
        { name: "udaf", value: "2" },
        { name: "udtf", value: "3" },
        { name: "java class", value: "4" },
      ],
      tableData: [
        {
          name: "渠道画像函数",
          time: "产品部",
          identification: "GX202010200005",
          type: "聚类算法",
          types: "渠道画像",
        },
        {
          name: "正态分布函数",
          time: "市场部",
          identification: "GX202010200006",
          type: "相关性算法",
          types: "渠道画像",
        },
        {
          name: "百位数函数",
          time: "产品部",
          identification: "GX202010200008",
          type: "回归算法",
          types: "渠道画像",
        },
        {
          name: "中位数函数",
          time: "市场部",
          identification: "GX202010200007",
          type: "相关性算法",
          types: "渠道画像",
        },
        {
          name: "求和函数",
          time: "市场部",
          identification: "GX202010200009",
          type: "回归算法",
          types: "渠道画像",
        },
      ],
      developmentVerifications: false,
      versionManagements: false,
      form1: {
        name: "",
        type1: '',
        type2: '',
        type3: '',
        option1: [
          {name: '聚类算法', value: '1'},
          {name: '相关性算法', value: '2'},
          {name: '回归算法', value: '3'},
        ],
        option2: [
          {name:'渠道画像', value:'1'}
        ],
        option3: [
          {name:'产品部', value:'1'},
          {name:'市场部', value:'2'}
        ],
        content: ''
      },
      form2: {
        name: "",
        content: "",
      },
    };
  },
  methods: {
    developmentVerification() {
      this.developmentVerifications = true;
    },
    developmentVerificationClose() {
      this.developmentVerifications = false;
      this.activeOne = false;
    },
    versionManagement(data) {
      this.versionManagements = true;
      this.form2.name = data.name;
      this.form2.time = data.time;
    },
    versionManagementClose() {
      this.versionManagements = false;
    },
  },
};
</script>

<style lang="scss">
.container {
  padding: 15px;
  &-title {
    background: #ffffff;
    padding: 40px 15px 15px 15px;
  }
  &-main {
    margin-top: 15px;
    background: #ffffff;
    padding: 20px;
  }
  .el-collapse-item__header {
    font-weight: 600;
  }
  .el-collapse-item__arrow,
  .el-icon-arrow-right {
    margin: 0 10px;
    float: left;
  }

  .el-collapse-item {
    border-width: 0px;
    margin-left: 30px;
  }

  .el-collapse-item__header,
  .el-collapse-item__content,
  .el-collapse,
  .el-collapse-item__wrap {
    border-width: 0px;
  }
}
</style>