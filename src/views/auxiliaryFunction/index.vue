<template>
  <div class="container">
    <div class="container-title">
      <el-form ref="form" :model="form" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="GIT名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="首次发布时间：">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
              ></el-date-picker>
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
      <el-table :data="tableData" border>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="GIT名称" prop="name"></el-table-column>
        <el-table-column
          label="首次发布时间"
          width="200"
          prop="time"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button-group>
              <el-button
                @click="developmentVerification"
                style="margin: 0px 4px"
                type="text"
              >
                开发校验
              </el-button>
              <el-button type="text">/</el-button>
              <el-button
                @click="versionManagement(scope.row)"
                style="margin: 0px 4px"
                type="text"
              >
                版本管理
              </el-button>
              <el-button type="text">/</el-button>
              <el-button style="margin: 0px 4px" type="text">
                代码构建
              </el-button>
              <el-button type="text">/</el-button>
              <el-button style="margin: 0px 4px" type="text">
                自动部署
              </el-button>
              <el-button type="text">/</el-button>
              <el-button style="margin: 0px 4px" type="text">
                回退处理
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="开发校验"
      :visible.sync="developmentVerifications"
      width="50%"
      :before-close="developmentVerificationClose"
    >
      <el-form ref="form" :model="form1" label-width="100px">
        <el-row :gutter="24">
          <el-col :span="20">
            <el-form-item label="活动区域">
              <el-select
                v-model="form1.region"
                style="width: 90%"
                placeholder="请选择脚本"
              >
                <el-option label="Shell" value="shell"></el-option>
                <el-option label="bat" value="bat"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form>
              <el-button type="primary" @click="handleStart"
                >开始校验</el-button
              >
            </el-form>
          </el-col>
        </el-row>
        <el-form-item
          label="校验结果"
          v-if="activeOne && developmentVerifications"
        >
          <el-table :data="startData" border>
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column label="规则点" prop="name1"></el-table-column>
            <el-table-column
              label="问题代码位置"
              prop="name2"
            ></el-table-column>
            <el-table-column label="结果">
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.name3"
                  type="success"
                  icon="el-icon-check"
                  circle
                ></el-button>
                <el-button
                  v-if="!scope.row.name3"
                  type="danger"
                  icon="el-icon-close"
                  circle
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="开发校验"
      :visible.sync="versionManagements"
      width="65%"
      :before-close="versionManagementClose"
    >
      <el-form ref="form" :model="form2" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="GIT名称：">
              <el-input v-model="form2.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="首次发布时间：">
              <el-input v-model="form2.time"></el-input>
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
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template class="containers-main-collapse" slot="title">
            版本变化
          </template>
          <div>
            <el-row v-for="(item, index) in data" :key="index">
              <el-col :span="8">
                <div style="margin-bottom: 15px;line-height:20px">版本号： {{ item.name1 }}</div>
              </el-col>
              <el-col :span="8">
                <div style="margin-bottom: 15px;line-height:20px">上传时间： {{ item.name2 }}</div>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>
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
        date: new Date(2020, 10, 10),
      },
      tableData: [
        { name: "渠道画像", time: "2020/10/20" },
        { name: "审计画像", time: "2020/10/20" },
        { name: "审计扫描", time: "2020/10/20" },
        { name: "集团派单", time: "2020/10/20" },
        { name: "风险扫描管理", time: "2020/10/20" },
      ],
      developmentVerifications: false,
      versionManagements: false,
      form1: {
        region: "",
      },
      activeOne: false,
      startData: [
        { name1: "参数传递错误", name2: "第36行", name3: false },
        { name1: "参数传递错误", name2: "第16行", name3: false },
        { name1: "数据未发现", name2: "第10行", name3: true },
        { name1: "规则错误", name2: "第6行", name3: true },
        { name1: "规则错误", name2: "第30行", name3: false },
      ],
      form2: {
        name: "",
        time: "",
      },
      activeNames: 1,
      data: [
        { name1: "3.0.19-beta", name2: "2020/10/20" },
        { name1: "3.0.18-beta", name2: "2020/08/20" },
        { name1: "3.0.17-beta", name2: "2020/06/20" },
      ],
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
    handleStart() {
      this.activeOne = true;
    },
    versionManagement(data) {
      this.versionManagements = true;
      this.form2.name = data.name;
      this.form2.time = data.time;
    },
    versionManagementClose() {
      this.versionManagements = false;
    },
    handleChange(val) {
      console.log(val);
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