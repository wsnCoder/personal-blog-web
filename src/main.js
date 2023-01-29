import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

import 'muse-ui/lib/styles/base.less'
import { Button, Select } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'

import '@/assets/css/global.less'

Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
