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
          series: [
            {
              type: 'wordCloud',
              gridSize: 20,
              sizeRange: [9, 30],
              rotationRange: [0, 0],
              shape: 'circle',
              textStyle: {
                normal: {
                  color: function () {
                    return (
                      'rgb(' +
                      [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                      ].join(',') +
                      ')'
                    )
                  },
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowColor: '#333',
                },
              },
              data: newData.data,
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
