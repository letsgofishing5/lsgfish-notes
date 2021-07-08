<template>
  <div class="big_screen_body_left_container">
    <h2>数据大屏左边</h2>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import theme from '../js/theme'
import * as echarts from 'echarts';
export default {
  name: 'BigScreenBodyLeft',
  created () {
    this.echartsInit()
  },
  mounted () {
    echartsInit()
    {
      var myChart = echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.big_screen_body_left_container {
  color: white;
}
</style>
