<template>
  <div class="container">
    <span>KOL详情</span><hr>
    <div class="title">
      <ul>
        <li>名称：</li>
        <li>抖音号：</li>
        <li>粉丝数：</li>
        <li>作品数：</li>
        <li>总点赞：</li>
        <li>平均点赞：</li>
      </ul>
    </div>

    <h3>粉丝趋势</h3>
    <div id="fans" style="width: 1000px;height:400px;"></div>

    <h3>点赞趋势</h3>
    <div id="like" style="width: 1000px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  components: {

  },
  methods: {
    LineBase(v){
        let _that = this;
        const myChart = _that.$echarts.init(document.getElementById('fans'))
        const option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: [
            {
              orient:'horizontal',
              x:'5%',
              align: 'left',
              data: ['7天'],
              textStyle:{
                backgroundColor:'#67c23a',
                color:'#fff',
                fontSize:14,
                borderRadius:6,
                padding:6
              },
              icon:'none',
            },
            {
              orient:'horizontal',
              x:'10%',
              align: 'left',
              data: ['30天'],
              textStyle:{
                backgroundColor:'#67c23a',
                color:'#fff',
                fontSize:14,
                borderRadius:6,
                padding:6
              },
              icon:'none',
            },
            {
              orient:'horizontal',
              x:'15%',
              align: 'left',
              data: ['90天'],
              textStyle:{
                backgroundColor:'#67c23a',
                color:'#fff',
                fontSize:14,
                borderRadius:6,
                padding:6
              },
              icon:'none',
            },
            {
              orient:'horizontal',
              x:'25%',
              align: 'left',
              data: ['增量'],
              textStyle:{
                backgroundColor:'#67c23a',
                color:'#fff',
                fontSize:14,
                borderRadius:6,
                padding:6
              },
              icon:'none',
            },
            {
              orient:'horizontal',
              x:'30%',
              align: 'left',
              data: ['总量'],
              textStyle:{
                backgroundColor:'#67c23a',
                color:'#fff',
                fontSize:14,
                borderRadius:6,
                padding:6
              },
              icon:'none',
            },
          ],
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  data: ['5-29', '5-30', '5-31', '6-01', '6-02', '6-03', '6-04']
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  minInterval: -1,
                  max:2,
                  interval:0.5,
                  axisLabel:{
                    formatter:'{value}w'
                  }
              }
          ],
          series: [
              {
                  name: '7天',
                  type: 'line',
                  stack: '总量',
                  symbol:'none',
                  areaStyle: {
                    normal:{
                      color:'rgba(103,194,58,.5)'
                    }
                  },
                  itemStyle:{
                    normal:{
                      color:'#67c23a',
                      lineStyle:{
                        color:'#67c23a'
                      }
                    }
                  },
                  data: [1.3, 1.89, 0.55, -1, 0, 1, 2]
              },
              {
                  name: '30天',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name: '90天',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [0, 2, -1, 4, 0, 3, 4]
              },
              {
                  name: '增量',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name: '总量',
                  type: 'line',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  areaStyle: {},
                  data: [820, 900, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
        myChart.setOption(option,true);

    },





    
    LineBase2(){
        let _that = this;
        let myChart = _that.$echarts.init(document.getElementById('like'))
        let option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
            selected:{
              '7天':true,
              '30天':false,
              '90天':false,
              '增量':false,
              '总量':false,
            },
              data: ['7天', '30天', '90天', '增量', '总量'],
              textStyle:{
                backgroundColor:'#67c23a',
                color:'#fff',
                fontSize:14,
                borderRadius:6,
                padding:6
              },
              left:'left',
              icon:'none',
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  min:-1,
                  max:2,
                  axisLabel:{
                    formatter:'{value}w'
                  }
              }
          ],
          series: [
              {
                  name: '7天',
                  type: 'line',
                  stack: '总量',
                  symbol:'none',
                  areaStyle: {
                    normal:{
                      color:'rgba(103,194,58,.5)'
                    }
                  },
                  itemStyle:{
                    normal:{
                      color:'#67c23a',
                      lineStyle:{
                        color:'#67c23a'
                      }
                    }
                  },
                  data: [1, 2, 0.5, -1, 0, 1, 2]
              },
              {
                  name: '30天',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name: '90天',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [0, 2, -1, 4, 0, 3, 4]
              },
              {
                  name: '增量',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name: '总量',
                  type: 'line',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  areaStyle: {},
                  data: [820, 900, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
        myChart.setOption(option,true);
    }
  },
  mounted () {
    this.LineBase();
    this.LineBase2();
  }
}

</script>

<style scoped lang="scss">
.container{
  .title{
    height: 50px;
    ul{
      li{
        list-style: none;
        padding: 0;
        margin-right: 100px;
        float: left;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
