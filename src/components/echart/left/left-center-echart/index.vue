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
        name: ['第一周', '第二周', '第三周', '第四周'],
        Number: [1320, 1762, 1191, 1017],
      },
    }
  },

  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
