<template>
  <div id="CenterBottom">
    <dv-border-box-13>
      <HeaderTitle title="货运司机" />
      <CenterBottomEarch />
    </dv-border-box-13>
  </div>
</template>

<script>
import CenterBottomEarch from '_c/echart/center/center-bottom-echart/index.vue'
export default {
  components: {
    CenterBottomEarch,
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
#CenterBottom {
  width: 100%;
  height: 310px;
}
</style>
