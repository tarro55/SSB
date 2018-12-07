import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import "@mdi/font/css/materialdesignicons.min.css"
import App from './App.vue'
import router from './router/'
import store from './store/'
import "@/assets/custom.css"
import 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
