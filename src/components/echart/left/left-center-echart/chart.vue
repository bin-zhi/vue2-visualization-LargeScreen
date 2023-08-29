<template>
  <div>
    <Echart
      :options="options"
      id="LeftCenterEchart"
      height="255px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
export default {
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      options: {},
      // 定义颜色
      colorList: [
        '#00AAFF',
        '#A52A2A',
        '#FF752D',
        '#FFCF31',
        '#FF3129',
        '#006400',
        '#8B4513',
        '#FF8C00',
        '#FFB6C1',
        '#7B68EE',
        '#87CEFA',
        '#008000',
        '#D2B48C',
      ],
    }
  },

  created() {},
  methods: {},
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          backgroundColor: 'transparent',
          grid: {
            left: '3%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
            position: function (point) {
              return [point[0], point[1]]
            },
            confine: false,
            formatter: function (params) {
              let title = params[0].name
              if (title.length > 30) {
                title =
                  title.substring(0, 15) +
                  '<br/>' +
                  title.substring(15, 30) +
                  '<br/>' +
                  title.substring(30)
              } else if (title.length > 15) {
                title = title.substring(0, 15) + '<br/>' + title.substring(15)
              }
              let name = title + ' : ' + params[0].value
              return name
            },
          },
          xAxis: {
            show: false,
            type: 'value',
          },
          yAxis: [
            {
              type: 'category',
              inverse: true,
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                textStyle: {
                  color: '#4eaafd',
                  fontSize: '18',
                },
                formatter: function (value) {
                  value =
                    value.length > 7 ? value.substring(0, 7) + '...' : value
                  return value
                },
              },
              data: newData.name,
            },
            {
              type: 'category',
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              show: true,
              axisLabel: {
                textStyle: {
                  color: '#fff',
                  fontSize: '16',
                },
                formatter: function (value) {
                  return value
                },
              },
              data: newData.Number,
            },
          ],
          series: [
            {
              name: '数量',
              type: 'bar',
              zlevel: 1,
              itemStyle: {
                normal: {
                  barBorderRadius: [30, 30, 30, 30],
                  color: (params) => {
                    return new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 0,
                          color: 'rgba(54,69,129,1)',
                        },
                        {
                          offset: 0.8,
                          color: this.colorList[params.dataIndex],
                        },
                        {
                          offset: 1,
                          color: 'rgba(255,255,255,0.8)',
                        },
                      ]
                    )
                  },
                },
              },
              barWidth: 15,
              data: newData.Number,
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
