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
        data: [
          {
            name: '准时送达',
            value: 25,
          },
          {
            name: '包装完好',
            value: 18,
          },
          {
            name: '配送速度快',
            value: 15,
          },
          {
            name: '物流跟踪清晰',
            value: 12,
          },
          {
            name: '服务态度好',
            value: 10,
          },
          {
            name: '退换货便利',
            value: 9,
          },
          {
            name: '包裹安全无损',
            value: 8,
          },
          {
            name: '送货上门',
            value: 7,
          },
          {
            name: '提供签收服务',
            value: 6,
          },
          {
            name: '快递员礼貌',
            value: 5,
          },
          {
            name: '运输效率高',
            value: 4,
          },
          {
            name: '信息更新及时',
            value: 3,
          },
          {
            name: '特快专递可选',
            value: 2,
          },
          {
            name: '费用合理',
            value: 1,
          },
          {
            name: '快递包装精美',
            value: 25,
          },
          {
            name: '送货速度可靠',
            value: 18,
          },
          {
            name: '追踪查询方便',
            value: 15,
          },
          {
            name: '客服响应迅速',
            value: 12,
          },
          {
            name: '退款迅速处理',
            value: 10,
          },
          {
            name: '包装耐用',
            value: 9,
          },
          {
            name: '配送到家省心',
            value: 8,
          },
          {
            name: '签收流程简单',
            value: 7,
          },
          {
            name: '送货上门便捷',
            value: 6,
          },
          {
            name: '派送员服务好',
            value: 5,
          },
          {
            name: '快递运输安全',
            value: 4,
          },
          {
            name: '状态查询及时',
            value: 3,
          },
          {
            name: '提供定时送达',
            value: 2,
          },
          {
            name: '价格透明',
            value: 1,
          },
          {
            name: '快递快速到达',
            value: 25,
          },
          {
            name: '物流信息准确',
            value: 18,
          },
          {
            name: '客服专业回答',
            value: 15,
          },
          {
            name: '售后服务周到',
            value: 12,
          },
          {
            name: '包裹完好无损',
            value: 10,
          },
          {
            name: '运输过程顺利',
            value: 9,
          },
          {
            name: '提供上门取件',
            value: 8,
          },
        ],
      },
    }
  },
}
</script>
