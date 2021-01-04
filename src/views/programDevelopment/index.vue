<template>
  <div class="container">
    <div class="container-title">
      <el-form ref="form" :model="form" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="程序名称：">
              <el-input
                v-model="form.name"
                placeholder="请输入程序名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="运行服务器：">
              <el-select
                v-model="form.reg"
                style="width: 90%"
                placeholder="请选择运行服务器"
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
        >新增脚本</el-button
      >
      <el-table :data="tableData" border>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column
          label="脚本标识"
          prop="identification"
        ></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="创建人" width="120" prop="people"></el-table-column>
        <el-table-column label="创建时间" width="120" prop="time"></el-table-column>
        <el-table-column label="运行服务器" prop="content"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button-group>
              <el-button
                style="margin: 0px 4px"
                type="text"
                @click="handleWork"
              >
                脚本编辑
              </el-button>
              <el-button type="text">/</el-button>
              <el-button style="margin: 0px 4px" type="text">
                业务逻辑
              </el-button>
              <el-button type="text">/</el-button>
              <el-button
                @click="versionManagement(scope.row)"
                style="margin: 0px 4px"
                type="text"
              >
                执行程序
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="新增脚本"
      :visible.sync="developmentVerifications"
      width="50%"
      :before-close="developmentVerificationClose"
    >
      <el-form ref="form1" :model="form1" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="传参：">
              <el-input v-model="form1.name1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="错误判断：">
              <el-select
                v-model="form1.name2"
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
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="调用程序：">
              <el-select
                v-model="form1.name3"
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
          <el-col :span="12">
            <el-form-item label="程序类型：">
              <el-select
                v-model="form1.name4"
                style="width: 100%"
                placeholder=""
              >
                <el-option
                  v-for="(item, index) in form1.option4"
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
            <el-form-item label="脚本类型：">
              <el-select
                v-model="form1.name5"
                style="width: 100%"
                placeholder=""
              >
                <el-option
                  v-for="(item, index) in form1.option5"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="名称：">
              <el-input v-model="form1.name6"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="运行服务器：">
              <el-select
                v-model="form1.name7"
                style="width: 100%"
                placeholder=""
              >
                <el-option
                  v-for="(item, index) in form1.option7"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="developmentVerifications = false"
            >脚本编译</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="执行程序"
      :visible.sync="versionManagements"
      width="50%"
      :before-close="versionManagementClose"
    >
      <el-form ref="form2" :model="form2" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="调度队列：">
              <el-input v-model="form2.name1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="执行时间：">
              <el-select
                v-model="form2.name2"
                style="width: 100%"
                placeholder=""
              >
                <el-option
                  v-for="(item, index) in form2.option2"
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
            <el-form-item label="执行频次：">
              <el-select
                v-model="form2.name3"
                style="width: 100%"
                placeholder=""
              >
                <el-option
                  v-for="(item, index) in form2.option3"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="执行类型：">
              <el-select
                v-model="form2.name4"
                style="width: 100%"
                placeholder=""
              >
                <el-option
                  v-for="(item, index) in form2.option4"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="versionManagements = false"
            >确定</el-button
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
      },
      option: [{ name: "10.20.96.1", value: "1" }],
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
        name1: "",
        name2: "udaf",
        name3: "udaf",
        name4: "udaf",
        name5: "udaf",
        name6: "",
        name7: "udaf",
        option2: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
        ],
        option3: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
        ],
        option4: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
        ],
        option5: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
        ],
        option7: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
        ],
      },
      form2: {
        name1: '',
        name2: "udaf",
        name3: "udaf",
        name4: "udaf",
        option2: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
        ],
        option3: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
        ],
        option4: [
          { name: "udf", value: "1" },
          { name: "udaf", value: "2" },
          { name: "udtf", value: "3" },
          { name: "java class", value: "4" },
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