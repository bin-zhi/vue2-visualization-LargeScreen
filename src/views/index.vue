<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="header">
          <dv-decoration-10 class="header-left" />
          <div class="header">
            <dv-decoration-8 class="text-boder" :color="decorationColor" />
            <div class="title">
              <span class="title-text">物流数据可视化平台</span>
              <dv-decoration-6
                class="title-text-decoration"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="text-boder"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="header-right" />
        </div>

        <div class="body-box">
          <div class="left">
            <div class="left-top">
              <LeftTop />
            </div>
            <div class="left-center">
              <LeftCenter />
            </div>
            <div class="left-bottom">
              <LeftBottom />
            </div>
          </div>
          <div class="center">
            <div class="center-header">
              <img
                style="height: 70%"
                src="@/assets/height-left-icon.png"
                alt=""
              />
              <span class="center-header-size">物流路线图</span>
              <img
                style="height: 70%"
                src="@/assets/header-right-icon.png"
                alt=""
              />
            </div>
            <div class="center-top">
              <CenterTop />
            </div>
            <div class="center-bottom">
              <CenterBottom />
            </div>
          </div>
          <div class="right">
            <div class="right-top">
              <RightTop />
            </div>
            <div class="right-center">
              <RightCenter />
            </div>
            <div class="right-bottom">
              <RightBottom />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from '../utils/drawMixin'
import LeftTop from './left-top.vue'
import LeftCenter from './left-center.vue'
import LeftBottom from './left-bottom.vue'
import CenterTop from './center-top.vue'
import CenterBottom from './center-bottom.vue'
import RightTop from './right-top.vue'
import RightCenter from './right-center.vue'
import RightBottom from './right-bottom.vue'
export default {
  mixins: [drawMixin],
  data() {
    return {}
  },
  components: {
    LeftTop,
    LeftCenter,
    LeftBottom,
    CenterTop,
    CenterBottom,
    RightTop,
    RightCenter,
    RightBottom,
  },
  mounted() {},
  //
  beforeDestroy() {},
  methods: {
    // loading效果
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.left-bottom,
.left-center,
.center-bottom,
.right-center,
.right-bottom {
  margin-top: 20px;
}

.center-header {
  width: 100%;
  font-size: 30px;
  height: 35px;
  font-family: cursive;
  text-align: center;
  padding-right: 110px;
  .center-header-size {
    padding: 0 10px;
    letter-spacing: 2px;
    font-weight: 700;
    background: linear-gradient(
      92deg,
      #0072ff 0%,
      #00eaff 48.8525390625%,
      #01aaff 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
