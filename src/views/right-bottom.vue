<template>
  <div id="RightBottom">
    <dv-border-box-13>
      <HeaderTitle title="评价反馈" />
      <RightBottomEarch />
    </dv-border-box-13>
  </div>
</template>

<script>
import RightBottomEarch from '@/components/echart/right/right-bottom-echart/index.vue'
export default {
  components: { RightBottomEarch },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
#RightBottom {
  height: 310px;
  width: 100%;
}
</style>
