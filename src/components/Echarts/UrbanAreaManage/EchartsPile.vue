<template>
  <ve-histogram :data="chartData" :settings="chartSettings" :extend="chartExtend" height="350px" class="echartspile"></ve-histogram>
</template>

<script>
import { UrbanAreaManage } from "@/api/dictSpace/UrbanAreaManage";
export default {
  props:['zoneId','zoneTypeId'],
  data() {
    this.chartSettings = {
      stack: { 类型: ["移动", "宽带", "固话", "天翼高清", "专线", "智家"] }
    };
    return {
      chartExtend: {
        //X轴线
        xAxis: {
          show: true,
          // 坐标轴每项的文字
          axisLabel: {
            showMaxLabel: true,
            showMinLabel: true,
            color: "#939EAB",
            rotate: 0, //刻度文字旋转，防止文字过多不显示
            margin: 8, //文字离x轴的距离
            boundaryGap: true,
            formatter: v => {
              // console.log('x--v',v)
              if (v.length > 4) {
                return v.substring(0, 4) + "...";
              }
              return v;
            }
          },
        },
        yAxis: {
          show: true,
          offset: 0,
          // 坐标轴轴线
          axisLine: {
            show: false
          },
          // y轴对应的竖线
          splitLine: {
            show: true
          },
        },

        // 柱形区域
        grid: {
          show: true,
          backgroundColor: "#fff"
        },

        // 每个柱子
        series(v) {
          // console.log("v", v);
          // 设置柱子的样式
          v.forEach(i => {
            i.barWidth = 20;
            i.itemStyle = {
              borderWidth: 0
            };
          });
          return v;
        }
      },
      chartData: {
        columns: ["日期", "移动", "宽带", "固话", "天翼高清", "专线", "智家"],
        rows: [
          { 日期: null, 移动: null, 宽带: null, 固话: null, 天翼高清: null, 专线: null, 智家: null },
          { 日期: null, 移动: null, 宽带: null, 固话: null, 天翼高清: null, 专线: null, 智家: null },
          { 日期: null, 移动: null, 宽带: null, 固话: null, 天翼高清: null, 专线: null, 智家: null },
          { 日期: null, 移动: null, 宽带: null, 固话: null, 天翼高清: null, 专线: null, 智家: null },
          { 日期: null, 移动: null, 宽带: null, 固话: null, 天翼高清: null, 专线: null, 智家: null },
          { 日期: null, 移动: null, 宽带: null, 固话: null, 天翼高清: null, 专线: null, 智家: null }
        ]
      },
      leftBar: {
        zoneId: null,
        zoneTypeId: null,
        data: {}
      }
    };
  },
  watch: {
    zoneId(val) {
        const me = this;
        me.leftBar.zoneId = val;
        me.getTopRightBar();
    },
    zoneTypeId(val) {
        const me = this;
        me.leftBar.zoneTypeId = val;
        me.getTopRightBar();
    }
  },
  created() {
    const me = this;
    me.getTopRightBar();
  },
  methods: {
    getTopRightBar() {
      const me = this;
      me.leftBar.zoneId = me.zoneId;
      me.leftBar.zoneTypeId = me.zoneTypeId;
      UrbanAreaManage.getTopRightBar(me.leftBar)
          .then(res => {
              me.leftBar.data = res.data;
              console.log(res.data)
              if(me.leftBar.data.length == 0){
                for(let j=0; j<6; j++){
                  me.chartData.rows[j].日期 = '-'
                  me.chartData.rows[j].移动 = 0;
                  me.chartData.rows[j].宽带 = 0;
                  me.chartData.rows[j].固话 = 0;
                  me.chartData.rows[j].天翼高清 = 0;
                  me.chartData.rows[j].专线 = 0;
                  me.chartData.rows[j].智家 = 0;
                }
              }
              else{
                for(let i=0; i<me.leftBar.data.length; i++){
                  me.chartData.rows[i].日期 = me.leftBar.data[i].monthId;
                  me.chartData.rows[i].移动 = me.leftBar.data[i].shCnt;
                  me.chartData.rows[i].宽带 = me.leftBar.data[i].mobileCnt;
                  me.chartData.rows[i].固话 = me.leftBar.data[i].ddnCnt;
                  me.chartData.rows[i].天翼高清 = me.leftBar.data[i].wbCnt;
                  me.chartData.rows[i].专线 = me.leftBar.data[i].iptvCnt;
                  me.chartData.rows[i].智家 = me.leftBar.data[i].fixedCnt;
                }
              }
          })
    }
  }
};
</script>

<style scoped>
  .echartspile{
    margin-top: 40px
  }
</style>