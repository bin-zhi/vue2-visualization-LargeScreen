<template>
  <div style="position: relative">
    <Echart
      :options="options"
      id="CenterTopEchart"
      height="600px"
      width="100%"
    />
    <dv-decoration-12
      style="
        width: 150px;
        height: 150px;
        position: absolute;
        left: 10px;
        top: 15px;
      "
    />
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
    }
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          //  tooltip 该版本需在 option中定义才开启
          //  子图层可自定义内容
          tooltip: {
            //格式化内容，返回为空，地图组件不起作用，得在地图组件重新定义
            formatter: () => '',
            textStyle: {
              color: '#fff',
            },
          },
          backgroundColor: 'transparent',
          geo: {
            map: 'china',
            zoom: 1.1,
            roam: true,
            layoutCenter: ['50%', '50%'],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: '100%',
            itemStyle: {
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                  },
                ],
              },
              shadowColor: 'rgba(128, 217, 248, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10,
              borderColor: 'rgba(147, 235, 248, 1)',
            },
            tooltip: {
              formatter: () => '',
            },
            emphasis: {
              //地图高亮
              itemStyle: {
                color: '#0c93e2',
              },
            },
          },
          series: [
            {
              type: 'lines',
              zlevel: 2,
              effect: {
                show: true,
                symbolSize: 7,
                color: '#E4AA0C',
                symbol: 'arrow',
              },
              lineStyle: {
                color: '#7890fb',
                width: 2, //线条宽度
                curveness: 0.3,
              },
              tooltip: {
                formatter({ data }) {
                  return `行驶路线如下：<br />
              起点：${data.label.start}<br />
              终点：${data.label.end}
              `
                },
                backgroundColor: 'rgba(245,108,45,0.5)',
              },
              data: newData.point_line,
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              rippleEffect: {
                number: 2,
                scale: 2,
                brushType: 'stroke',
              },
              itemStyle: {
                color: '#14c9de',
              },
              tooltip: {
                formatter({ data }) {
                  return `地点位于：${data.label.name}`
                },
                backgroundColor: 'rgba(232,85,160,0.5)',
              },
              label: {
                show: true,
                offset: [40, 0],
                color: '#ecdb5c',
                fontSize: 18,
                fontFamily: 'cursive', // 设置字体系列为sans-serif

                formatter({ data }) {
                  return `${data.label.name}`
                },
              },
              data: newData.point_circle,
            }, //地图线的动画效果,
          ],
        }
      },
      immediate: true,
      deep: true,
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss"></style>
