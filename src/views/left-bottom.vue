<template>
  <div id="LeftBottom">
    <dv-border-box-13>
      <HeaderTitle title="仓储分布" />
      <LeftBottomEarch />
    </dv-border-box-13>
  </div>
</template>

<script>
import LeftBottomEarch from '_c/echart/left/left-bottom-echart/index.vue'
export default {
  components: {
    LeftBottomEarch,
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
#LeftBottom {
  width: 100%;
  height: 310px;
}
</style>
