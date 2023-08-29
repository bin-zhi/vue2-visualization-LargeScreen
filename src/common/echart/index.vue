<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import tdTheme from './theme.json' // 引入默认主题
import china from '@/utils/china.json'

export default {
  name: 'echart',
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    id: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '2.5rem',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    options: {
      handler(options) {
        // 设置true清空echart缓存的options，以新的为准
        this.chart.setOption(options, true)
      },
      deep: true,
    },
  },
  mounted() {
    // 注册主题
    this.$echarts.registerTheme('tdTheme', tdTheme)
    this.$echarts.registerMap('china', china)
    this.initChart()
  },
  methods: {
    initChart() {
      // 应用主题
      this.chart = this.$echarts.init(this.$el, 'tdTheme')
      // 图表配置
      this.chart.setOption(this.options, true)
    },
  },
  beforeDestroy() {
    // 销毁
    this.chart.dispose()
    this.chart = null
  },
}
</script>

<style></style>
