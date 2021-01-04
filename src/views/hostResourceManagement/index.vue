<template>
  <div class="container">
    <div class="container-title">
      <el-form ref="form" :model="form" label-width="110px">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="主机编号：">
              <el-input
                v-model="form.name"
                placeholder="请输入主机编号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="租户：">
              <el-select
                v-model="form.reg"
                style="width: 90%"
                placeholder="请选择租户"
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
      <el-table :data="tableData" border>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column
          label="主机编号"
          prop="identification"
        ></el-table-column>
        <el-table-column label="主机名称" prop="name"></el-table-column>
        <el-table-column label="主机型号" prop="types"></el-table-column>
        <el-table-column label="显卡" prop="time"></el-table-column>
        <el-table-column label="硬盘" prop="people"></el-table-column>
        <el-table-column label="内存" prop="content"></el-table-column>
        <el-table-column label="租户" prop="home"></el-table-column>
      </el-table>
    </div>
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
        { name: "li'rui_001", value: "1" },
      ],
      tableData: [
        {
          name: "渠道画像主机",
          time: "集成显卡",
          identification: "GX202010200005",
          content: "512M",
          types: "GV-yh0001",
          people: "Hard Disk Drive",
          home: "li'rui_001"
        },
        {
          name: "正态分布主机",
          time: "独立显卡",
          identification: "GX202010200006",
          content: "512M",
          types: "GV-yh0002",
          people: "Hard Disk Drive",
          home: "li'rui_001"
        },
        {
          name: "百位数主机",
          time: "集成显卡",
          identification: "GX202010200008",
          content: "512M",
          types: "GV-yh0003",
          people: "Hard Disk Drive",
          home: "li'rui_001"
        },
        {
          name: "中位数主机",
          time: "集成显卡",
          identification: "GX202010200007",
          content: "1G",
          types: "GV-yh0004",
          people: "Hard Disk Drive",
          home: "li'rui_001"
        },
        {
          name: "求和主机",
          time: "集成显卡",
          identification: "GX202010200009",
          content: "1G",
          types: "GV-yh0005",
          people: "Hard Disk Drive",
          home: "li'rui_001"
        },
      ],
    };
  },
  methods: {
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