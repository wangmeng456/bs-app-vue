<template>
  <div class="container">
    <div class="container-title">
      <el-form ref="form" :model="form" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="工程名称：">
              <el-input
                v-model="form.name"
                placeholder="请输入工程名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="状态：">
              <el-select
                v-model="form.reg"
                style="width: 90%"
                placeholder="请选择状态"
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
      <el-button
        type="warning"
        style="margin-bottom: 15px"
        @click="developmentVerification"
        >新增工程</el-button
      >
      <el-table :data="tableData" border>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column
          label="资源标识"
          prop="identification"
        ></el-table-column>
        <el-table-column label="工程名称" prop="name"></el-table-column>
        <el-table-column label="状态" prop="types"></el-table-column>
        <el-table-column label="创建时间" prop="time"></el-table-column>
        <el-table-column label="负责人" prop="people"></el-table-column>
        <el-table-column label="描述" prop="content"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button-group>
              <el-button
                style="margin: 0px 4px"
                type="text"
                @click="handleWork"
              >
                资源配置
              </el-button>
              <el-button type="text">/</el-button>
              <el-button
                @click="versionManagement(scope.row)"
                style="margin: 0px 4px"
                type="text"
              >
                安全配置
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="新增项目"
      :visible.sync="developmentVerifications"
      width="50%"
      :before-close="developmentVerificationClose"
    >
      <el-form ref="form1" :model="form1" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="工程名称：">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态：">
              <el-select
                v-model="form1.status"
                style="width: 100%"
                placeholder=""
              >
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
            <el-form-item label="创建时间：">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form1.date"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负责人">
              <el-select
                v-model="form1.people"
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
        </el-row>
        <el-form-item label="描述：">
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
      title="资源配置"
      :visible.sync="workActive"
      width="50%"
      :before-close="handleWorkClose"
    >
      <el-table :data="workData" border>
        <el-table-column label="资源类型" prop="name1"></el-table-column>
        <el-table-column label="资源详情" prop="name2"></el-table-column>
        <el-table-column label="配置">
          <template>
            <el-button type="text">点击</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog
      title="安全配置"
      :visible.sync="versionManagements"
      width="50%"
      :before-close="versionManagementClose"
    >
      <el-form ref="form3" :model="form3" label-width="130px">
        <el-form-item label="IP配置">
          <el-input v-model="form3.ip" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="账号配置">
          <el-input v-model="form3.name" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="结果查看下载权限">
          <el-select v-model="form3.status" style="width: 90%">
            <el-option label="开通" value="success"></el-option>
            <el-option label="关闭" value="fail"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="versionManagements = false"
            >保存</el-button
          >
          <el-button type="info" @click="versionManagements = false"
            >取消</el-button
          >
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
        regw: "",
      },
      option: [
        { name: "关闭", value: "1" },
        { name: "完结", value: "2" },
        { name: "进行中", value: "3" },
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
          time: "2020/10/20",
          identification: "GX202010200005",
          content: "渠道画像",
          types: "关闭",
          people: "李锐",
        },
        {
          name: "正态分布工作流",
          time: "2020/10/20",
          identification: "GX202010200006",
          content: "渠道画像",
          types: "完结",
          people: "李锐",
        },
        {
          name: "百位数工作流",
          time: "2020/10/20",
          identification: "GX202010200008",
          content: "渠道画像",
          types: "进行中",
          people: "李锐",
        },
        {
          name: "中位数工作流",
          time: "2020/10/20",
          identification: "GX202010200007",
          content: "渠道画像",
          types: "完结",
          people: "李锐",
        },
        {
          name: "求和工作流",
          time: "2020/10/20",
          identification: "GX202010200009",
          content: "渠道画像",
          types: "完结",
          people: "李锐",
        },
      ],
      developmentVerifications: false,
      versionManagements: false,
      form1: {
        name: "",
        status: "",
        date: new Date(2020, 10, 10),
        people: "",
        option1: [
          { name: "关闭", value: "1" },
          { name: "完结", value: "2" },
          { name: "进行中", value: "3" },
        ],
        option2: [{ name: "李锐", value: "1" }],
        content: "",
      },
      workActive: false,
      workData: [
        { name1: "API计算资源", name2: "渠道画像接口、审计画像接口" },
        { name1: "模型计算资源", name2: "扫描分析模型、风险分析模型" },
        { name1: "生产开发计算资源", name2: "" },
      ],
      form3: {
        ip: "",
        name: "",
        status: "开通",
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
    handleWork() {
      this.workActive = true;
    },
    handleWorkClose() {
      this.workActive = false;
    },
    versionManagement(data) {
      this.versionManagements = true;
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