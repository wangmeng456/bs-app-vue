<template>
  <div class="app-container">
    <el-form ref="form1" :model="form1" label-width="110px">
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item label="租户名称：">
            <el-input v-model="form1.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="资源选择：">
            <el-select v-model="form1.type1" style="width: 100%" placeholder="">
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
            <el-select v-model="form1.type2" style="width: 100%" placeholder="">
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
          <el-form-item label="需求目的：">
            <el-select v-model="form1.type3" style="width: 100%" placeholder="">
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
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      form1: {
        name: "",
        type1: "",
        type2: "",
        type3: "",
        option1: [
          { name: "API计算资源", value: "1" },
          { name: "模型计算资源", value: "2" },
          { name: "生产开发计算资源", value: "3" },
        ],
        option2: [{ name: "渠道画像", value: "1" }],
        option3: [
          { name: "产品部", value: "1" },
          { name: "市场部", value: "2" },
        ],
        content: "",
      },
    };
  },
};
</script>

<style>
</style>