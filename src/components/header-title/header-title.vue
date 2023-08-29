<template>
  <div class="header">
    <div class="left-icon"></div>
    <div class="title">{{ title }}</div>
    <div class="right-icon"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题',
    },
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
.header {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  // background-color: red;
  .title {
    font-size: 20px;
    padding: 0 7px;
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
  .right-icon,
  .left-icon {
    width: 50px;
    height: 20px;
    background-image: url('~@/assets/left-icon.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .left-icon {
    transform: rotate(180deg);
  }
}
</style>
