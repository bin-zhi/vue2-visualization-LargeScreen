<template>
  <div>
    <!-- 车辆汇总 -->
    <Echart
      :options="options"
      id="LeftTopEchart"
      height="200px"
      width="200px"
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
      angle: 0,
    }
  },

  mounted() {},
  methods: {
    getCirlPoint(x0, y0, r, angle) {
      let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
      let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
      return {
        x: x1,
        y: y1,
      }
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        const that = this
        this.options = {
          backgroundColor: 'transparent',
          title: {
            text: newData.value + '%',
            x: 'center',
            y: 'center',
            textStyle: {
              rich: {
                a: {
                  fontSize: 48,
                  color: '#00b0d3',
                },

                c: {
                  fontSize: 20,
                  color: '#ffffff',
                  // padding: [5,0]
                },
              },
            },
          },

          series: [
            // 紫色
            {
              name: 'ring5',
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                return {
                  type: 'arc',
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                    startAngle: ((0 + newData.angle) * Math.PI) / 180,
                    endAngle: ((90 + newData.angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: '#8383FA',
                    fill: 'transparent',
                    lineWidth: 1.5,
                  },
                  silent: true,
                }
              },
              data: [0],
            },
            {
              name: 'ring5', //紫点
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                let x0 = api.getWidth() / 2
                let y0 = api.getHeight() / 2
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6
                let point = that.getCirlPoint(x0, y0, r, 90 + newData.angle)
                return {
                  type: 'circle',
                  shape: {
                    cx: point.x,
                    cy: point.y,
                    r: 4,
                  },
                  style: {
                    stroke: '#8450F9', //绿
                    fill: '#8450F9',
                  },
                  silent: true,
                }
              },
              data: [0],
            },
            // 蓝色
            {
              name: 'ring5',
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                return {
                  type: 'arc',
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                    startAngle: ((180 + newData.angle) * Math.PI) / 180,
                    endAngle: ((270 + newData.angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: '#4386FA',
                    fill: 'transparent',
                    lineWidth: 1.5,
                  },
                  silent: true,
                }
              },
              data: [0],
            },
            {
              name: 'ring5', // 蓝色
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                let x0 = api.getWidth() / 2
                let y0 = api.getHeight() / 2
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6
                let point = that.getCirlPoint(x0, y0, r, 180 + newData.angle)
                return {
                  type: 'circle',
                  shape: {
                    cx: point.x,
                    cy: point.y,
                    r: 4,
                  },
                  style: {
                    stroke: '#4386FA', //绿
                    fill: '#4386FA',
                  },
                  silent: true,
                }
              },
              data: [0],
            },

            {
              name: 'ring5',
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                return {
                  type: 'arc',
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((270 + -newData.angle) * Math.PI) / 180,
                    endAngle: ((40 + -newData.angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: '#0CD3DB',
                    fill: 'transparent',
                    lineWidth: 1.5,
                  },
                  silent: true,
                }
              },
              data: [0],
            },
            // 橘色
            {
              name: 'ring5',
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                return {
                  type: 'arc',
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((90 + -newData.angle) * Math.PI) / 180,
                    endAngle: ((220 + -newData.angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: '#FF8E89',
                    fill: 'transparent',
                    lineWidth: 1.5,
                  },
                  silent: true,
                }
              },
              data: [0],
            },
            {
              name: 'ring5',
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                let x0 = api.getWidth() / 2
                let y0 = api.getHeight() / 2
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
                let point = that.getCirlPoint(x0, y0, r, 90 + -newData.angle)
                return {
                  type: 'circle',
                  shape: {
                    cx: point.x,
                    cy: point.y,
                    r: 4,
                  },
                  style: {
                    stroke: '#FF8E89', //粉
                    fill: '#FF8E89',
                  },
                  silent: true,
                }
              },
              data: [0],
            },
            {
              name: 'ring5', //绿点
              type: 'custom',
              coordinateSystem: 'none',
              renderItem: function (params, api) {
                let x0 = api.getWidth() / 2
                let y0 = api.getHeight() / 2
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
                let point = that.getCirlPoint(x0, y0, r, 270 + -newData.angle)
                return {
                  type: 'circle',
                  shape: {
                    cx: point.x,
                    cy: point.y,
                    r: 4,
                  },
                  style: {
                    stroke: '#0CD3DB', //绿
                    fill: '#0CD3DB',
                  },
                  silent: true,
                }
              },
              data: [0],
            },
            {
              name: '外环',
              type: 'pie',
              radius: ['52%', '40%'],
              silent: true,
              clockwise: true,
              startAngle: 90,
              z: 0,
              zlevel: 0,
              label: {
                normal: {
                  position: 'center',
                },
              },
              data: [
                {
                  value: newData.value,
                  name: '',
                  itemStyle: {
                    normal: {
                      color: {
                        // 完成的圆环的颜色
                        colorStops: [
                          {
                            offset: 0,
                            color: '#A098FC', // 0% 处的颜色
                          },
                          {
                            offset: 0.3,
                            color: '#4386FA', // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: '#4FADFD', // 0% 处的颜色
                          },
                          {
                            offset: 0.8,
                            color: '#0CD3DB', // 100% 处的颜色
                          },
                          {
                            offset: 1,
                            color: '#646CF9', // 100% 处的颜色
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  value: 100 - newData.value,
                  name: '',
                  label: {
                    normal: {
                      show: false,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: '#173164',
                    },
                  },
                },
              ],
            },
            {
              name: '内环',
              type: 'pie',
              radius: ['32%', '35%'],
              silent: true,
              clockwise: true,
              startAngle: 270,
              z: 0,
              zlevel: 0,
              label: {
                normal: {
                  position: 'center',
                },
              },
              data: [
                {
                  value: newData.value,
                  name: '',
                  itemStyle: {
                    normal: {
                      color: {
                        // 完成的圆环的颜色
                        colorStops: [
                          {
                            offset: 0,
                            color: '#00EDF3', // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: '#646CF9', // 100% 处的颜色
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  value: 100 - newData.value,
                  name: '',
                  label: {
                    normal: {
                      show: false,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: '#173164',
                    },
                  },
                },
              ],
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
