<template>
  <div class="echarts-water">
    <ve-liquidfill :data="chartData" :extend="chartExtend" height="240px"></ve-liquidfill>
    <div class="echarts-font">
      <div v-for="list in Data" :key="list.id">
        <img :src="list.img" />
        <span class="echarts-name">{{list.name}}</span>
        <br/>
        <span class="echarts-num">{{list.num}}%</span>
      </div>
    </div>
  </div>
</template>
<script>
import { UrbanAreaManage } from "@/api/dictSpace/UrbanAreaManage";
export default {
  name: "echarts-water-wave-ball",
  props:['zoneId','zoneTypeId','monthId'],
  data() {
    return {
      Data: [
        {
          id: 1,
          img: require("@/assets/image/dictSpace/UrbanAreaManage/icon-capacity.png"),
          name: "光端口容量",
          num: null
        },
        {
          id: 2,
          img: require("@/assets/image/dictSpace/UrbanAreaManage/icon-occupation.png"),
          name: "光端口实占",
          num: null
        },
        {
          id: 3,
          img: require("@/assets/image/dictSpace/UrbanAreaManage/icon-efficiency.png"),
          name: "光端口实占率",
          num: null
        }
      ],
      chartData: {
        columns: ["type", "percent"],
        rows: [
          {
            type: "光端口",
            percent: null
          }
        ]
      },
      chartExtend: {
        series: {
          center: ["20%", "50%"], // 水球图位置
          amplitude: 10, // 波浪波动起伏大小
          waveLength: "100%", // 波浪长度
          color: ["#35C6FF", "#A7EAFF", "#20C0FF"], // 波浪颜色
          backgroundStyle: {
            color: "#fff", // 内部球背景颜色
            borderWidth: 2, // 内部球边框宽度
            borderColor: "#31C5FF" // 内部球边框颜色
          },
          outline: {
            borderDistance: 5, // 外边框与内边框间的距离
            itemStyle: {
              borderWidth: 5, // 外边框的宽度
              borderColor: "#0146BF"
            }
          },
          data: [null],
          label: {
            normal: {
              textStyle: {
                color: "#20C0FF", //默认背景下的文字颜色
                insideColor: "#fff", //水波背景下的文字颜色
                fontSize: 20 //字体大小
              }
            }
          }
        }
      },
      leftBar: {
        zoneId: null,
        zoneTypeId: null,
        monthId: null,
        data: {}
      },
    };
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
        me.getBottomRightLiquidFill();
    },
    monthId(val) {
      const me = this;
      me.leftBar.monthId = val;
      me.getBottomRightLiquidFill();
    }
  },
  created() {
    const me = this;
    // me.getBottomRightLiquidFill();
  },
  methods: {
    getBottomRightLiquidFill() {
      const me = this;
      me.leftBar.zoneId = me.zoneId;
      me.leftBar.zoneTypeId = me.zoneTypeId;
      me.leftBar.monthId = me.monthId;
      UrbanAreaManage.getBottomRightLiquidFill(me.leftBar)
        .then(res => {
          me.leftBar.data = res.data;
          me.Data[0].num = Number(me.leftBar.data.lightPortCnt).toFixed(0);
          me.Data[1].num = Number(me.leftBar.data.realLightPort).toFixed(0);
          me.Data[2].num = Number(me.leftBar.data.rate*100).toFixed(0);
          me.chartData.rows[0].percent = Number(me.leftBar.data.rate*100).toFixed(0)+'%';
          me.chartExtend.series.data[0] = Number(me.leftBar.data.rate).toFixed(0);
          if(isNaN(me.Data[0].num) == true){
            me.Data[0].num = '-'
          }
          if(isNaN(me.Data[1].num) == true){
            me.Data[1].num = '-'
          }
          if(isNaN(me.Data[0].num) == true && isNaN(me.Data[1].num) == true){
            me.Data[2].num = '-'
          }
        })
      }
    }
};
</script>
<style lang="stylus" scoped>
.echarts-water
  position relative
  .echarts-font
    position absolute
    top 22%
    left 46%
    img
      vertical-align: middle;
      margin-top 6px
    .echarts-name
      margin-left 7px
      color rgba(147,158,171,1)
    .echarts-num
      margin-left 30px
      font-weight 600
      color rgba(55,57,76,1)
</style>