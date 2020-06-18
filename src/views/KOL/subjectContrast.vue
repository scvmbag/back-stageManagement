<template>
  <div class="container">
    <h3>话题对比分析</h3><hr>

    <el-form ref="form" :model="form" label-width="130px" label-position="left">
      <el-form-item label="视频发布时间：">
        <el-col :span="3">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="1">至</el-col>
        <el-col :span="3">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="类型：">
        <el-button type="success" plain>增量图</el-button>
        <el-button type="success" plain>总量图</el-button>
      </el-form-item>
    </el-form>


    <div id="myChart" style="width: 600px;height:400px;"></div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        date1:'',
        date2:'',
      }
    }
  },
  methods: {
    charts(){
      let _that = this;
      let myChart = _that.$echarts.init(document.getElementById('myChart'))
      let option = {
        title:{
          text:'播放增量图',
          left:'center'
        },
        tooltip : {
          trigger: 'axis'
        },
        grid:{
          left:'3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox:{
          feature:{
            saveAsImage:{}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap:false,
          data: ['5.27', '5.28', '5.29', '5.30', '5.31', '6.1', '6.2']
        },
        yAxis: {
          type: 'value',
          minInterval: 20000,
          max:160000,
          interval:20000,
          axisLabel:{
            formatter:'{value}w'
          },
          splitLine:{
            show:false
          }
        },
        series: [
          {
            name:'话题一',
            data: [20457, 7532, 93801, 93854, 1980, 123830, 280],
            type: 'line',
            symbol:'circle',
            symbolSize:12,
            itemStyle:{
              normal:{
                color:'rgba(230,162,60,1)',
                lineStyle:{
                  width:5,
                  color:'rgba(230,162,60,1)'
                }
              }
            }
          },
          {
            name:'话题二',
            data: [82820, 149832, 9201, 53454, 18890, 13830, 13820],
            type: 'line',
            symbol:'circle',
            symbolSize:12,
            itemStyle:{
              normal:{
                color:'rgba(64,158,255,1)',
                lineStyle:{
                  width:5,
                  color:'rgba(64,158,255,1)'
                }
              }
            }
          },
        ]
      };
      myChart.setOption(option,true)
    }
  },
  mounted () {
    this.charts()
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
// /deep/ .el-col-1{
//   text-align: center;
// }
</style>
