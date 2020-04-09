<template>
  <ve-line :data="chartData" :settings="chartSettings" width="1300px" height="600px" style="margin-top: 5%;left:15%"></ve-line>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      axisSite: { right: ['cpu', '内存'] },
      yAxisType: ['MB', 'percent'],
      yAxisName: ['摄氏度', '占用率']
    }
    return {
      chartData: {
        columns: ['时间', 'cpu', '内存', '温度'],
        rows: [
          { 时间: '1/1', cpu: 0.4, 内存: 0.5, 温度: 60 },
          { 时间: '1/2', cpu: 0.8, 内存: 0.7, 温度: 65 },
          { 时间: '1/3', cpu: 0.5, 内存: 0.2, 温度: 75 },
          { 时间: '1/4', cpu: 0.6, 内存: 0.8, 温度: 80 },
          { 时间: '1/5', cpu: 0.7, 内存: 0.4, 温度: 70 },
          { 时间: '1/6', cpu: 0.3, 内存: 0.6, 温度: 66 }
        ]
      }
    }
  }
}
</script>
