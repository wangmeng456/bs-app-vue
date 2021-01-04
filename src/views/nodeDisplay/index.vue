<template>
  <div class="container">
    <el-row>
      <div class="container-box">
        <h2>节点内存</h2>
        <div class="container-box-title">异常内存节点<span>（4）</span></div>
        <el-row>
          <el-col style="position: relative;" :span="6">
            <ChartWaterBall :chartJson="chartJsonWater"></ChartWaterBall>
            <div class="container-box-font">节点一</div>
          </el-col>
          <el-col style="position: relative;" :span="6">
            <ChartWaterBall :chartJson="chartJsonWater"></ChartWaterBall>
            <div class="container-box-font">节点二</div>
          </el-col>
          <el-col style="position: relative;" :span="6">
            <ChartWaterBall :chartJson="chartJsonWater"></ChartWaterBall>
            <div class="container-box-font">节点三</div>
          </el-col>
          <el-col style="position: relative;" :span="6">
            <ChartWaterBall :chartJson="chartJsonWater"></ChartWaterBall>
            <div class="container-box-font">节点四</div>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <el-row>
      <div class="container-box">
        <h2>节点负载</h2>
        <div class="container-box-title">异常负载节点<span>（4）</span></div>
        <el-row>
          <el-col style="position: relative;" :span="6">
            <ChartGauge :chartJson="chartJsonGauge"></ChartGauge>
            <div class="container-box-font">节点一</div>
          </el-col>
          <el-col style="position: relative;" :span="6">
            <ChartGauge :chartJson="chartJsonGauge"></ChartGauge>
            <div class="container-box-font">节点二</div>
          </el-col>
          <el-col style="position: relative;" :span="6">
            <ChartGauge :chartJson="chartJsonGauge"></ChartGauge>
            <div class="container-box-font">节点三</div>
          </el-col>
          <el-col style="position: relative;" :span="6">
            <ChartGauge :chartJson="chartJsonGauge"></ChartGauge>
            <div class="container-box-font">节点四</div>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="container-box">
          <h2>节点网络</h2>
          <div class="container-box-title">异常网络节点<span>（5）</span></div>
          <el-table :data="data1" border>
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column label="节点名称" prop="name1"></el-table-column>
            <el-table-column label="异常原因" prop="name2"></el-table-column>
            <el-table-column label="异常时间" prop="name3"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="container-box">
          <h2>节点下线</h2>
          <div class="container-box-title">异常下线节点<span>（5）</span></div>
          <el-table :data="data2" border>
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column label="节点名称" prop="name1"></el-table-column>
            <el-table-column label="异常原因" prop="name2"></el-table-column>
            <el-table-column label="下线时间" prop="name3"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="container-box">
        <h2>节点异常次数TOP50</h2>
        <el-table :data="data3" border>
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column label="节点名称" prop="name1"></el-table-column>
          <el-table-column label="异常原因" prop="name2"></el-table-column>
          <el-table-column label="异常次数" prop="name3"></el-table-column>
        </el-table>
      </div>
    </el-row>
  </div>
</template>

<script>
import ChartWaterBall from "@/components/v-chart/ChartWaterBall";
import ChartGauge from "@/components/v-chart/ChartGauge";
export default {
  name: "",
  components: {
    ChartWaterBall,
    ChartGauge,
  },
  data() {
    return {
      chartJsonWater: {
        chartData: {
          columns: ["type", "percent"],
          rows: [
            {
              type: "内存使用率",
              percent: 0.48,
            },
          ],
        },
        extend: {
          series: {
            amplitude: 10, // 波浪波动起伏大小
            waveLength: "100%", // 波浪长度
            color: ["#35C6FF", "#A7EAFF", "#20C0FF"], // 波浪颜色
            backgroundStyle: {
              color: "#fff", // 内部球背景颜色
              borderWidth: 2, // 内部球边框宽度
              borderColor: "#31C5FF", // 内部球边框颜色
            },
            outline: {
              borderDistance: 5, // 外边框与内边框间的距离
              itemStyle: {
                borderWidth: 5, // 外边框的宽度
                borderColor: "#0146BF",
              },
            },
            label: {
              normal: {
                formatter: '{a}\n{b}\n\n\n{c}',
                textStyle: {
                  color: "#000000", //默认背景下的文字颜色
                  insideColor: "#fff", //水波背景下的文字颜色
                  fontSize: 14, //字体大小
                },
              },
            },
          },
        },
        width: "100%",
        height: "300px",
      },
      chartJsonGauge: {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            { type: '占比', value: 0.8 }
          ]
        },
        chartSetting: {
          dataType: {
            '占比': 'percent'
          },
          seriesMap: {
            '占比': {
              min: 0,
              max: 1
            }
          }
        },
        width: '100%',
        height: '300px',

      },
      data1: [
        { name1: "GX202010200005", name2: "网络超时", name3: "2020/20/20" },
        { name1: "GX202010200006", name2: "网络超时", name3: "2020/20/20" },
        { name1: "GX202010200007", name2: "网络中断", name3: "2020/20/20" },
        { name1: "GX202010200008", name2: "网络超时", name3: "2020/20/20" },
        { name1: "GX202010200009", name2: "网络超时", name3: "2020/20/20" },
      ],
      data2: [
        { name1: "GX202010200005", name2: "网络超时", name3: "2020/20/20" },
        { name1: "GX202010200006", name2: "网络超时", name3: "2020/20/20" },
        { name1: "GX202010200007", name2: "网络中断", name3: "2020/20/20" },
        { name1: "GX202010200008", name2: "网络超时", name3: "2020/20/20" },
        { name1: "GX202010200009", name2: "网络超时", name3: "2020/20/20" },
      ],
      data3: [
        { name1: "GX202010200005", name2: "网络超时", name3: "20" },
        { name1: "GX202010200006", name2: "网络超时", name3: "20" },
        { name1: "GX202010200007", name2: "网络中断", name3: "20" },
        { name1: "GX202010200008", name2: "网络超时", name3: "20" },
        { name1: "GX202010200009", name2: "网络超时", name3: "20" },
        { name1: "GX202010200007", name2: "网络中断", name3: "20" },
        { name1: "GX202010200008", name2: "网络超时", name3: "20" },
        { name1: "GX202010200009", name2: "网络超时", name3: "20" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  &-box {
    margin: 5px;
    padding: 15px;
    background: #ffffff;
    &-title {
      text-align: center;
      font-size: 20px;
      span {
        color: red;
      }
    }
    &-font {
      position: absolute;
      top: 80%;
      left: 44%;
    }
    .el-table {
      margin-top: 15px;
    }
  }
}
</style>