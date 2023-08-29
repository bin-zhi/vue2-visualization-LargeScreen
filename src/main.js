import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import Echart from './common/echart/index.vue'
import HeaderTitle from './components/header-title/header-title.vue'
Vue.component('Echart', Echart)
Vue.component('HeaderTitle', HeaderTitle)
// 引入全局css
import './assets/scss/style.scss'
//引入echart
//4.x 引用方式
import echarts from 'echarts'
import 'echarts-wordcloud'
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
//import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(dataV)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
