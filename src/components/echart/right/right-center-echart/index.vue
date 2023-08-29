<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  components: {
    Chart,
  },
  data() {
    return {
      cdata: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        revenue: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 327.08],
        expenditures: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, 214.52],
      },
    }
  },
}
</script>
