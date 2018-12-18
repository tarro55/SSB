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
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: '...', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
  version: '...', // Optional
});

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
    libraries: 'places', 
  },
})

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
