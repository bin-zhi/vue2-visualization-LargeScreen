<template>
  <div>
    <Echart
      :options="options"
      id="LeftBottomEchart"
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
    }
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          backgroundColor: 'transparent',
          xAxis: {
            min: 0,
            max: 1000,
            show: false,
            type: 'value',
          },
          yAxis: {
            min: 0,
            max: 1000,
            show: false,
            type: 'value',
          },
          series: [
            {
              type: 'graph',
              coordinateSystem: 'cartesian2d',

              label: {
                show: true,
                position: 'bottom',
                color: 'orange',
                formatter: function (item) {
                  return item.data.nodeName
                },
                fontSize: 18, // 设置字体大小为16px
                fontFamily: 'cursive', // 设置字体系列为sans-serif
              },
              data: newData.nods,
            },
            {
              type: 'lines',
              polyline: true,
              coordinateSystem: 'cartesian2d',
              lineStyle: {
                type: 'dashed',
                width: 1,
                color: '#175064',
                curveness: 0.3,
              },
              effect: {
                show: true,
                trailLength: 0.1,
                symbol: 'arrow',
                color: 'orange',
                symbolSize: 8,
              },
              data: newData.linesData,
            },
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
