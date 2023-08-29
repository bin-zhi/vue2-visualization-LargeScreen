<template>
  <div id="RightTop">
    <dv-border-box-13>
      <HeaderTitle title="同比增长数据" />
      <div class="increase">
        <div class="rising">
          <dv-decoration-9 style="width: 100%; height: 100px; color: #516b91"
            >36%</dv-decoration-9
          >

          <p class="sizeone">人员增长</p>
        </div>
        <div class="rising">
          <dv-decoration-9 style="width: 100%; height: 100px; color: #516b91"
            >19%</dv-decoration-9
          >
          <p class="sizetwo">市值增长</p>
        </div>
        <div class="rising">
          <dv-decoration-9 style="width: 100%; height: 100px; color: #516b91"
            >-27%</dv-decoration-9
          >
          <p class="sizeThree">成本增长</p>
        </div>
      </div>
    </dv-border-box-13>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
#RightTop {
  height: 310px;
  width: 100%;
}
.increase {
  height: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.rising {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
