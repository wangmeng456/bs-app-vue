<template>
  <div>
    <span class="tab-card-all">{{~~leftBar.monthId.substr(4,2)}}月总到达量</span>
    <span class="tab-card-num">{{allData}}</span>
    <ve-histogram
      :data="chartData"
      :settings="vchartsConfig.setting"
      :extend="vchartsConfig.extend"
      height="350px"
    ></ve-histogram>
  </div>
</template>

<script>
import { UrbanAreaManage } from "@/api/dictSpace/UrbanAreaManage";
export default {
  name: "EchartsBar",
  props:['zoneId','zoneTypeId','monthId'],
  data() {
    return {
      // 总量
      allData: undefined,
      // v-charts配置参数
      vchartsConfig: {
        setting: {
          // 别称
          labelMap: {
            type: "",
            count: "到达量"
          }
        },
        extend: {
          title: {
            show: false,
          },
          // 图标顶部的标题及按钮
          legend: {
            show: false
          },
          //X轴线
          xAxis: {
            type: "category",
            show: true,
            // 坐标轴轴线
            axisLine: {
              show: false
            },
            // 坐标轴刻度
            axisTick: {
              show: false
            },
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
                if (v.length > 2) {
                  return v.substring(0, 2) + "...";
                }
                return v;
              }
            },
            // X轴下面的刻度小竖线
            axisTick: {
              show: false,
              alignWithLabel: true, //axisLabel.boundaryGap=true时有效
              interval: 0,
              length: 4 //长度
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
            // 坐标轴刻度
            axisTick: {
              show: false
            },
            boundaryGap: false,
            axisLabel: {
              color: "#7B7B7B"
            }
          },

          // 柱形区域
          grid: {
            show: true,
            backgroundColor:"#fff",
          },

          // 每个柱子
          series(v) {
            // console.log("v", v);
            // 设置柱子的样式
            v.forEach(i => {
              i.barWidth = 16;
              i.itemStyle = {
                color: {
                    type: 'linear',
                    x: 0,//X轴起始坐标
                    y: 0,//Y轴起始坐标
                    x2: 1,//X轴终点坐标
                    y2: 1,//Y轴终点坐标
                    colorStops: [{
                        offset: 0, color: '#2B7BFF' // 0% 处的颜色
                        }, {
                        offset: 1, color: '#1ED0FF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                barBorderRadius:[10,10,0,0],
                borderWidth: 0
              };
            });
            return v;
          }
        }
      },
      // v-chats列表数据
      chartData: {
        columns: ["type", "count"],
        rows: [
          { type: "移动", count: undefined },
          { type: "宽带", count: undefined },
          { type: "固话", count: undefined },
          { type: "天翼高清", count: undefined },
          { type: "专线", count: undefined },
          { type: "智家", count: undefined },
        ]
      },
      leftBar: {
        zoneId: null,
        zoneTypeId: null,
        monthId: null,
        data: {}
      }
    }
  },
  watch: {
    zoneId(val) {
        const me = this;
        me.leftBar.zoneId = val;
        me.getTopLeftBar();
    },
    zoneTypeId(val) {
        const me = this;
        me.leftBar.zoneTypeId = val;
        me.getTopLeftBar();
    },
    monthId(val) {
      const me = this;
      me.leftBar.monthId = val;
      me.getTopLeftBar();
    }
  },
  created() {
    const me = this;
    me.getTopLeftBar();
  },
  methods: {
    getTopLeftBar() {
      const me = this;
      me.leftBar.zoneId = me.zoneId;
      me.leftBar.zoneTypeId = me.zoneTypeId;
      me.leftBar.monthId = me.monthId;
      UrbanAreaManage.getTopLeftBar(me.leftBar)
          .then(res => {
              me.leftBar.data = res.data;
              me.chartData.rows[0].count = me.leftBar.data.shCnt;
              me.chartData.rows[1].count = me.leftBar.data.mobileCnt;
              me.chartData.rows[2].count = me.leftBar.data.ddnCnt;
              me.chartData.rows[3].count = me.leftBar.data.wbCnt;
              me.chartData.rows[4].count = me.leftBar.data.iptvCnt;
              me.chartData.rows[5].count = me.leftBar.data.fixedCnt;
              me.allData = me.leftBar.data.shCnt+me.leftBar.data.mobileCnt+me.leftBar.data.ddnCnt+me.leftBar.data.wbCnt+me.leftBar.data.iptvCnt+me.leftBar.data.fixedCnt
              if(Number.isNaN(me.allData) == true){
                me.allData = '-'
              }
          })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>