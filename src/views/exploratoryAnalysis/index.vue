<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-row :gutter="24" style="margin-bottom: 30px">
        <el-col :span="12">
          <el-form-item label="数据选择">
            <el-select
              v-model="form.region1"
              style="width: 90%"
              placeholder="数据选择"
            >
              <el-option label="数据" value="data"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="统计字段">
            <el-select
              v-model="form.region2"
              style="width: 90%"
              placeholder="统计字段"
            >
              <el-option label="字段" value="font"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24" style="margin-bottom: 20px">
        <el-col :span="12">
          <h3 style="margin: 0 0 10px 25px">基础统计</h3>
          <el-form-item label="统计类型">
            <el-select
              v-model="form.reg1"
              style="width: 90%"
              placeholder="统计类型"
            >
              <el-option v-for="(item, index) in form.opt1" :key="index" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="统计结果">
            <el-input style="width: 90%" type="textarea" v-model="form.desc1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <h3 style="margin: 0 0 10px 25px">统计推断及分布校验</h3>
          <el-form-item label="统计类型">
            <el-select
              v-model="form.reg2"
              style="width: 90%"
              placeholder="统计类型"
            >
              <el-option v-for="(item, index) in form.opt2" :key="index" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="统计结果">
            <el-input style="width: 90%" type="textarea" v-model="form.desc2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="12">
          <h3 style="margin: 0 0 10px 25px">相关性分析</h3>
          <el-form-item label="统计类型">
            <el-select
              v-model="form.reg3"
              style="width: 90%"
              placeholder="统计类型"
            >
              <el-option v-for="(item, index) in form.opt3" :key="index" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="统计结果">
            <el-input style="width: 90%" type="textarea" v-model="form.desc3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <h3 style="margin: 0 0 10px 25px">相关性分析</h3>
          <el-form-item label="统计类型">
            <el-select
              v-model="form.reg4"
              style="width: 90%"
              placeholder="统计类型"
            >
              <el-option v-for="(item, index) in form.opt4" :key="index" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="统计结果">
            <el-input style="width: 90%" type="textarea" v-model="form.desc4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      form: {
        region1: '',
        region2: '',
        reg1: '百位数',
        opt1: [
          {name:'均值', value: '1'},
          {name:'方差', value: '2'},
          {name:'中位数', value: '3'},
          {name:'百位数', value: '4'},
        ],
        desc1: '',
        reg2: '二项分布',
        opt2: [
          {name:'正态分布', value: '1'},
          {name:'二项分布', value: '2'},
          {name:'t校验', value: '3'},
        ],
        desc2: '',
        reg3: '正相关',
        opt3: [
          {name:'线性相关', value: '1'},
          {name:'正相关', value: '2'},
          {name:'偏相关', value: '3'},
        ],
        desc3: '',
        reg4: '多元回归',
        opt4: [
          {name:'一元回归', value: '1'},
          {name:'多元回归', value: '2'},
        ],
        desc4: '',
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>