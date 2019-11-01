import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'
import moment from 'moment'

moment.locale("zh-cn")
Vue.use(ElementUI)
Vue.prototype.$moment = moment
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
