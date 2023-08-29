// 混入代码 resize-mixins.js
// 改成 Scale 缩放之后，没有使用这个代码，但是保留
import { debounce } from '@/utils';
const resizeChartMethod = '$__resizeChartMethod';

export default {
  data() {
    // 在组件内部将图表 init 的引用映射到 chart 属性上
    return {
      chart: null,
    };
  },
  created() {
    window.addEventListener('resize', this[resizeChartMethod], false);
  },
  activated() {
    // 防止 keep-alive 之后图表变形
    if (this.chart) {
      this.chart.resize()
    }
  },
  beforeDestroy() {
    window.removeEventListener('reisze', this[resizeChartMethod]);
  },
  methods: {
    // 防抖函数来控制 resize 的频率
    [resizeChartMethod]: debounce(function() {
      if (this.chart) {
        this.chart.resize();
      }
    }, 300),
  },
};
