<template>
  <div class="container">
    <div class="container-title">
      <el-form ref="form" :model="form" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="7">
            <el-form-item label="工作流名称：">
              <el-input
                v-model="form.name"
                placeholder="请输入工作流名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="应用类型：">
              <el-select
                v-model="form.reg"
                style="width: 90%"
                placeholder="请选择应用类型"
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
          <el-col :span="7">
            <el-form-item label="需求来源：">
              <el-select
                v-model="form.regw"
                style="width: 90%"
                placeholder="请选择需求来源"
              >
                <el-option
                  v-for="(item, index) in optionw"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form>
              <el-button type="primary">开始</el-button>
              <el-button type="info">取消</el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="container-main">
      <el-button
        type="warning"
        style="margin-bottom: 15px"
        @click="developmentVerification"
        >新增工作流</el-button
      >
      <el-table :data="tableData" border>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column
          label="工作流标识"
          prop="identification"
        ></el-table-column>
        <el-table-column label="工作流名称" prop="name"></el-table-column>
        <el-table-column label="需求来源" prop="time"></el-table-column>
        <el-table-column label="应用类型" prop="types"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button-group>
              <el-button
                style="margin: 0px 4px"
                type="text"
                @click="handleWork"
              >
                工作流配置
              </el-button>
              <el-button type="text">/</el-button>
              <el-button
                @click="versionManagement(scope.row)"
                style="margin: 0px 4px"
                type="text"
              >
                运营日志
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="新增工作流"
      :visible.sync="developmentVerifications"
      width="50%"
      :before-close="developmentVerificationClose"
    >
      <el-form ref="form1" :model="form1" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="工作流名称：">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="应用类型：">
              <el-select
                v-model="form1.type2"
                style="width: 100%"
                placeholder=""
              >
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
              <el-select
                v-model="form1.type3"
                style="width: 100%"
                placeholder=""
              >
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
        <el-form-item label="工作流描述：">
          <el-input
            type="textarea"
            v-model="form1.content"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="developmentVerifications = false"
            >保存</el-button
          >
          <el-button type="info" @click="developmentVerifications = false"
            >取消</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="工作流配置"
      :visible.sync="workActive"
      width="50%"
      :before-close="handleWorkClose"
    >
      <el-table :data="workData" border>
        <el-table-column label="节点" prop="name1"></el-table-column>
        <el-table-column label="节点资源">
          <template slot-scope="scope">
            <el-dropdown @command="handleCommands">
              <span class="el-dropdown-link">
                {{ scope.row.name2
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  :command="beforeHandleCommands(scope.$index, 'API')"
                  >API</el-dropdown-item
                >
                <el-dropdown-item
                  :command="beforeHandleCommands(scope.$index, '模型')"
                  >模型</el-dropdown-item
                >
                <el-dropdown-item
                  :command="beforeHandleCommands(scope.$index, '函数')"
                  >函数</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="与上一节点关系">
          <template slot-scope="scope">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{ scope.row.name3
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  :command="beforeHandleCommand(scope.$index, '并行执行')"
                  >并行执行</el-dropdown-item
                >
                <el-dropdown-item
                  :command="beforeHandleCommand(scope.$index, '顺序执行')"
                  >顺序执行</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog
      title="运营日志"
      :visible.sync="versionManagements"
      width="90%"
      :before-close="versionManagementClose"
    >
      <div class="container-title">
      <el-form ref="form3" :model="form3" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="7">
            <el-form-item label="工作流名称：">
              <el-input
                v-model="form3.name"
                placeholder="请输入工作流名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="运行时间：">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form3.date"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="运行结果：">
              <el-select
                v-model="form3.regw"
                style="width: 90%"
                placeholder="请选择运行结果"
              >
                <el-option
                  label="成功"
                  value="success"
                ></el-option>
                <el-option
                  label="失败"
                  value="fail"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form>
              <el-button type="primary">开始</el-button>
              <el-button type="info">取消</el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="container-main">
      <el-table :data="form3.tableData" border>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column
          label="工作流标识"
          prop="identification"
        ></el-table-column>
        <el-table-column label="工作流名称" prop="name"></el-table-column>
        <el-table-column label="运行时间" prop="time"></el-table-column>
        <el-table-column label="运行结果" prop="types"></el-table-column>
      </el-table>
    </div>
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
        regw: "",
      },
      option: [{ name: "渠道画像", value: "1" }],
      optionw: [
        { name: "产品部", value: "1" },
        { name: "市场部", value: "2" },
      ],
      options: [
        { name: "udf", value: "1" },
        { name: "udaf", value: "2" },
        { name: "udtf", value: "3" },
        { name: "java class", value: "4" },
      ],
      tableData: [
        {
          name: "渠道画像工作流",
          time: "产品部",
          identification: "GX202010200005",
          types: "渠道画像",
        },
        {
          name: "正态分布工作流",
          time: "市场部",
          identification: "GX202010200006",
          types: "渠道画像",
        },
        {
          name: "百位数工作流",
          time: "产品部",
          identification: "GX202010200008",
          types: "渠道画像",
        },
        {
          name: "中位数工作流",
          time: "市场部",
          identification: "GX202010200007",
          types: "渠道画像",
        },
        {
          name: "求和工作流",
          time: "市场部",
          identification: "GX202010200009",
          types: "渠道画像",
        },
      ],
      developmentVerifications: false,
      versionManagements: false,
      form1: {
        name: "",
        type2: "",
        type3: "",
        option2: [{ name: "渠道画像", value: "1" }],
        option3: [
          { name: "产品部", value: "1" },
          { name: "市场部", value: "2" },
        ],
        content: "",
      },
      workActive: false,
      workData: [
        { name1: "节点一", name2: "API", name3: "并行执行" },
        { name1: "节点二", name2: "API", name3: "顺序执行" },
      ],
      form2: {
        name: "",
        content: "",
      },
      form3: {
        name: '',
        date: new Date(2020, 10, 10),
        regw: '',
        tableData: [
        {
          name: "渠道画像工作流",
          time: "2020/10/18",
          identification: "GX202010200005",
          types: "成功",
        },
        {
          name: "正态分布工作流",
          time: "2020/10/18",
          identification: "GX202010200006",
          types: "成功",
        },
        {
          name: "百位数工作流",
          time: "2020/10/18",
          identification: "GX202010200008",
          types: "失败",
        },
        {
          name: "中位数工作流",
          time: "2020/10/18",
          identification: "GX202010200007",
          types: "成功",
        },
        {
          name: "求和工作流",
          time: "2020/10/18",
          identification: "GX202010200009",
          types: "成功",
        },
      ],
      }
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
    handleWork() {
      this.workActive = true;
    },
    handleWorkClose() {
      this.workActive = false;
    },
    beforeHandleCommand(index, command) {
      return {
        key1: index,
        key2: command,
      };
    },
    handleCommands(command) {
      this.workData[command.key1].name2 = command.key2;
    },
    beforeHandleCommands(index, command) {
      return {
        key1: index,
        key2: command,
      };
    },
    handleCommand(command) {
      this.workData[command.key1].name3 = command.key2;
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