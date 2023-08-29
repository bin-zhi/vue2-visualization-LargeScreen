<template>
  <div class="table">
    <div class="cdataone">
      <Chart :cdata="cdataone" />
      <div class="sizeone">在线</div>
    </div>
    <div class="cdatatwo">
      <Chart :cdata="cdatatwo" />
      <div class="sizetwo">离线</div>
    </div>
    <div class="cdataThree">
      <Chart :cdata="cdataThree" />
      <div class="sizeThree">异常</div>
    </div>
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
      cdataone: { value: 80, angle: 0 },
      cdatatwo: { value: 17, angle: 0 },
      cdataThree: { value: 3, angle: 0 },

      timer: null,
    }
  },
  created() {
    this.draw()
    this.timer = setInterval(() => {
      this.draw()
    }, 200)
  },
  methods: {
    draw() {
      this.cdataone.angle = this.cdataone.angle + 10
      this.cdatatwo.angle = this.cdatatwo.angle + 15
      this.cdataThree.angle = this.cdataThree.angle + 20
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
}
</script>

<style lang="scss" scoped>
.table {
  display: flex;
}
</style>
