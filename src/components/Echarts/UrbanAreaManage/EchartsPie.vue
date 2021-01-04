<template>
  <div class="echarts-pie">
    <ve-ring
      :data="chartData"
      :settings="chartSettings"
      :extend="chartExtend"
      :graphic="graphic"
      height="240px"
    ></ve-ring>
    <div class="echarts-allcharge">{{allCharge}}</div>
    <div class="echarts-box">
      <div v-for="(list,index) in Data" :key="index" class="echarts-font">
        <span class="echarts-num">{{list.num}}万元</span>
        <span class="echarts-percentage">{{list.percentage}}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { UrbanAreaManage } from "@/api/dictSpace/UrbanAreaManage";
export default {
    props:['zoneId','zoneTypeId','monthId'],
    data() {
        return {
          // 提示信息
	        chartSettings:{
            radius: [56,70],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            },
            chartExtend: {
              // 图例
                legend: {
                    left: '40%',
                    width: 10,
                    y: 'center',
                    color:'rgba(147,158,171,1)'
                },
                series: {
                  center: ['20%', '50%']
                },
            },
            //  环内文字设置：
            graphic: [
                {　　　　
                    type: 'text',　
                    left: '10%',　　　　　　　　　　
                    top: '44%',
                    style: {　　　　　　　　　　　　　　　　
                        text: null,
                        textAlign: 'center',
                        fill: 'rgba(55,57,76,1)',　
                        fontSize: 20,
                        color: "rgba(55,57,76,1)",
                    }
                },
                {
                    type: 'text',
                    left: '10%',
                    top: '54%',
                    style: {
                        text: "总收入 (万元）",
                        textAlign: 'center',
                        fill: 'rgba(55,57,76,1)',
                        fontSize: 12,
                    }
                }
            ],
            chartData: {
                columns: ['类型', '数量'],
                rows: [
                    { 类型: '移动', 数量: null },
                    { 类型: '宽带', 数量: null },
                    { 类型: '固话', 数量: null },
                    { 类型: '天翼高清', 数量: null },
                    { 类型: '专线', 数量: null },
                    { 类型: '智家', 数量: null }
                ]
            },
            leftBar: {
              zoneId: null,
              zoneTypeId: null,
              monthId: null,
              data: {}
            },
            Data: [
              {num:null, percentage:null},
              {num:null, percentage:null},
              {num:null, percentage:null},
              {num:null, percentage:null},
              {num:null, percentage:null},
              {num:null, percentage:null},
            ],
            allCharge:null
        }
    },
    watch: {
      zoneId(val) {
          const me = this;
          me.leftBar.zoneId = val;
          me.getBottomLeftPie();
      },
      zoneTypeId(val) {
          const me = this;
          me.leftBar.zoneTypeId = val;
          me.getBottomLeftPie();
      },
      monthId(val) {
        const me = this;
        me.leftBar.monthId = val;
        me.getBottomLeftPie();
      }
    },
    created() {
      const me = this;
      me.getBottomLeftPie();
    },
    methods: {
      getBottomLeftPie() {
        const me = this;
        me.leftBar.zoneId = me.zoneId;
        me.leftBar.zoneTypeId = me.zoneTypeId;
        me.leftBar.monthId = me.monthId;
        UrbanAreaManage.getBottomLeftPie(me.leftBar)
            .then(res => {
                me.leftBar.data = res.data;
                const allCharge = me.leftBar.data.shCharge + me.leftBar.data.wbCharge + me.leftBar.data.ddnCharge + me.leftBar.data.mobileCharge + me.leftBar.data.fixedCharge + me.leftBar.data.iptvCharge;
                me.chartData.rows[0].数量 = Number(me.Data[0].num = me.leftBar.data.shCharge).toFixed(2);
                me.chartData.rows[1].数量 = Number(me.Data[1].num = me.leftBar.data.wbCharge).toFixed(2);
                me.chartData.rows[2].数量 = Number(me.Data[2].num = me.leftBar.data.ddnCharge).toFixed(2);
                me.chartData.rows[3].数量 = Number(me.Data[3].num = me.leftBar.data.mobileCharge).toFixed(2);
                me.chartData.rows[4].数量 = Number(me.Data[4].num = me.leftBar.data.fixedCharge).toFixed(2);
                me.chartData.rows[5].数量 = Number(me.Data[5].num = me.leftBar.data.iptvCharge).toFixed(2);
                me.Data[0].percentage = Number((me.leftBar.data.shCharge/allCharge)*100).toFixed(2);
                me.Data[1].percentage = Number((me.leftBar.data.wbCharge/allCharge)*100).toFixed(2);
                me.Data[2].percentage = Number((me.leftBar.data.ddnCharge/allCharge)*100).toFixed(2);
                me.Data[3].percentage = Number((me.leftBar.data.mobileCharge/allCharge)*100).toFixed(2);
                me.Data[4].percentage = Number((me.leftBar.data.fixedCharge/allCharge)*100).toFixed(2);
                me.Data[5].percentage = Number((me.leftBar.data.iptvCharge/allCharge)*100).toFixed(2);
                me.allCharge = allCharge;
                if(Number.isNaN(me.allCharge) == true){
                  me.allCharge = '-'
                }
                for(let i=0; i<6; i++){
                  if(isNaN(me.chartData.rows[i].数量) == true){
                    me.Data[i].num = '-'
                  }
                  if(isNaN(me.Data[i].percentage) == true){
                    me.Data[i].percentage = '-'
                  }
                }
            })
      }
    }
}
</script>

<style lang="stylus" scoped>
.echarts-pie
  position relative
  .echarts-allcharge
    position absolute
    top 44%
    left 13%
    font-size 20px
    font-weight 600
    color rgba(55,57,76,1)
  .echarts-box
    position absolute
    top 23%
    left 62%
    line-height 25px
    .echarts-font
      display flex
      span
        margin-left 10px
        display block
        text-align right
      .echarts-percentage
        color rgba(61,130,254,1)
        width 70px
      .echarts-percentage
        color rgba(61,130,254,1)
        width 50px
</style>