import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
//import VueHead from 'vue-head'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-119308617-1'
})
//Vue.use(VueHead)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
