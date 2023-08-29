<template>
  <div id="LeftCenter">
    <dv-border-box-13>
      <HeaderTitle title="本月订单" />
      <LeftCenterEarch />
    </dv-border-box-13>
  </div>
</template>

<script>
import LeftCenterEarch from '_c/echart/left/left-center-echart/index.vue'
export default {
  components: { LeftCenterEarch },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
#LeftCenter {
  width: 100%;
  height: 310px;
}
</style>
