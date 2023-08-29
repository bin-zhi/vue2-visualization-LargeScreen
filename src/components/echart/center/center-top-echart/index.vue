<template>
  <div>
    <Chart :cdata="cdata" />
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
      cdata: {
        point_circle: [
          {
            value: [109.754859, 19.189767],
            label: {
              name: '海口',
            },
            itemStyle: {
              color: 'red',
            },
          },
          {
            value: [116.41995, 40.18994],
            label: {
              name: '北京',
            },
          },
          {
            value: [113.4668, 33.8818],
            label: {
              name: '郑州',
            },
          },
          {
            value: [85.294711, 41.371801],
            label: {
              name: '乌鲁木齐',
            },
          },
          {
            value: [88.7695, 31.6846],
            label: {
              name: '西藏',
            },
          },
          {
            value: [110.3467, 41.4899],
            label: {
              name: '呼和浩特',
            },
          },
          {
            value: [125.8154, 44.2584],
            label: {
              name: '长春',
            },
          },
          {
            value: [95.7129, 40.166],
            label: {
              name: '甘肃',
            },
          },
          {
            value: [106.3586, 38.1775],
            label: {
              name: '银川',
            },
          },
          {
            value: [103.5901, 36.3043],
            label: {
              name: '兰州',
            },
          },
          {
            value: [119.4543, 25.9222],
            label: {
              name: '福州',
            },
          },
          {
            value: [96.2402, 35.4199],
            label: {
              name: '青海',
            },
          },
          {
            value: [102.9199, 30.1904],
            label: {
              name: '四川',
            },
          },
          {
            value: [109.5996, 35.6396],
            label: {
              name: '西安',
            },
          },
          {
            value: [112.2363, 31.1572],
            label: {
              name: '湖北',
            },
          },
          {
            value: [112.4121, 37.6611],
            label: {
              name: '山西',
            },
          },
          {
            value: [117.2461, 32.0361],
            label: {
              name: '安徽',
            },
          },
        ],
        point_line: [
          {
            coords: [
              [109.754859, 19.189767], // 初始点经纬度
              [113.4668, 33.8818], //目标点经纬度
            ],
            label: {
              start: '海口',
              end: '郑州',
            },
          },
          {
            coords: [
              [109.754859, 19.189767],
              [119.4543, 25.9222],
            ],
            label: {
              start: '海口',
              end: '福州',
            },
          },
          {
            coords: [
              [113.4668, 33.8818],
              [112.4121, 37.6611],
            ],
            label: {
              start: '郑州',
              end: '山西',
            },
          },
          {
            coords: [
              [113.4668, 33.8818],
              [125.8154, 44.2584],
            ],
            label: {
              start: '郑州',
              end: '长春',
            },
          },
          {
            coords: [
              [113.4668, 33.8818],
              [117.2461, 32.0361],
            ],
            label: {
              start: '郑州',
              end: '安徽',
            },
          },
          {
            coords: [
              [113.4668, 33.8818],
              [116.41995, 40.18994],
            ],
            label: {
              start: '郑州',
              end: '北京',
            },
          },
          {
            coords: [
              [113.4668, 33.8818],
              [112.2363, 31.1572],
            ],
            label: {
              start: '郑州',
              end: '湖北',
            },
          },
          {
            coords: [
              [113.4668, 33.8818],
              [109.5996, 35.6396],
            ],
            label: {
              start: '郑州',
              end: '西安',
            },
          },
          {
            coords: [
              [113.4668, 33.8818],
              [110.3467, 41.4899],
            ],
            label: {
              start: '郑州',
              end: '呼和浩特',
            },
          },
          {
            coords: [
              [96.2402, 35.4199],
              [85.294711, 41.371801],
            ],
            label: {
              start: '青海',
              end: '乌鲁木齐',
            },
          },
          {
            coords: [
              [96.2402, 35.4199],
              [95.7129, 40.166],
            ],
            label: {
              start: '青海',
              end: '甘肃',
            },
          },
          {
            coords: [
              [96.2402, 35.4199],
              [102.9199, 30.1904],
            ],
            label: {
              start: '青海',
              end: '四川',
            },
          },
          {
            coords: [
              [96.2402, 35.4199],
              [103.5901, 36.3043],
            ],
            label: {
              start: '青海',
              end: '兰州',
            },
          },
          {
            coords: [
              [96.2402, 35.4199],
              [88.7695, 31.6846],
            ],
            label: {
              start: '青海',
              end: '西藏',
            },
          },
          {
            coords: [
              [109.754859, 19.189767],
              [96.2402, 35.4199],
            ],
            label: {
              start: '海口',
              end: '青海',
            },
          },
        ],
      },
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss"></style>
