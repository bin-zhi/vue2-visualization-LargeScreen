<template>
  <div id="LeftTop">
    <dv-border-box-13>
      <HeaderTitle title="车辆总览" />
      <LeftTopEchart />
    </dv-border-box-13>
  </div>
</template>

<script>
import LeftTopEchart from '_c/echart/left/left-top-echart/index.vue'
export default {
  name: 'LeftTop',
  components: {
    LeftTopEchart,
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
#LeftTop {
  width: 100%;
  height: 310px;
}
</style>
