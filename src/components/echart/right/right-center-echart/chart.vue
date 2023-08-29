<template>
  <div>
    <Echart
      :options="options"
      id="RightCenterEchart"
      height="255px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {},
    }
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          backgroundColor: 'transparent',

          grid: {
            top: '15%',
            left: '5%',
            right: '5%',
            bottom: '20%',
            // containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisLine: {
                show: true,
              },
              splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                  color: '#f00',
                },
              },
              axisLabel: {
                color: '#00afca',
                textStyle: {
                  fontSize: '18',
                  fontFamily: 'cursive', // 设置字体系列为sans-serif
                },
              },
              splitLine: {
                show: false,
              },
              boundaryGap: false,
              data: newData.data,
            },
          ],

          yAxis: [
            {
              type: 'value',
              min: 0,
              // max: 140,
              splitNumber: 4,
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.1)',
                },
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                  color: '#d1e6eb',
                },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: '入库',
              type: 'line',
              // smooth: true, //是否平滑
              showAllSymbol: true,
              // symbol: 'image://./static/images/guang-circle.png',
              symbol: 'circle',
              symbolSize: 10,
              lineStyle: {
                normal: {
                  color: '#6c50f3',
                  shadowColor: 'rgba(0, 0, 0, .3)',
                  shadowBlur: 0,
                  shadowOffsetY: 5,
                  shadowOffsetX: 5,
                },
              },
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#6c50f3',
                },
              },
              itemStyle: {
                color: '#6c50f3',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
              },
              tooltip: {
                show: false,
              },
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(108,80,243,0.3)',
                      },
                      {
                        offset: 1,
                        color: 'rgba(108,80,243,0)',
                      },
                    ],
                    false
                  ),
                  shadowColor: 'rgba(108,80,243, 0.9)',
                  shadowBlur: 20,
                },
              },
              data: newData.revenue,
            },
            {
              name: '出库',
              type: 'line',
              // smooth: true, //是否平滑
              showAllSymbol: true,
              // symbol: 'image://./static/images/guang-circle.png',
              symbol: 'circle',
              symbolSize: 10,
              lineStyle: {
                normal: {
                  color: '#00ca95',
                  shadowColor: 'rgba(0, 0, 0, .3)',
                  shadowBlur: 0,
                  shadowOffsetY: 5,
                  shadowOffsetX: 5,
                },
              },
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#00ca95',
                },
              },

              itemStyle: {
                color: '#00ca95',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
              },
              tooltip: {
                show: false,
              },
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(0,202,149,0.3)',
                      },
                      {
                        offset: 1,
                        color: 'rgba(0,202,149,0)',
                      },
                    ],
                    false
                  ),
                  shadowColor: 'rgba(0,202,149, 0.9)',
                  shadowBlur: 20,
                },
              },
              data: newData.expenditures,
            },
          ],
        }
      },
      immediate: true,
      deep: true,
    },
  },
}
</script>
