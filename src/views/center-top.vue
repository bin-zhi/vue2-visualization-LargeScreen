<template>
  <div id="center">
    <dv-border-box-13>
      <CenterTopEarch />
    </dv-border-box-13>
  </div>
</template>

<script>
import CenterTopEarch from '_c/echart/center/center-top-echart/index.vue'
export default {
  components: {
    CenterTopEarch,
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
#center {
  width: 100%;
  height: 605px;
}
</style>
