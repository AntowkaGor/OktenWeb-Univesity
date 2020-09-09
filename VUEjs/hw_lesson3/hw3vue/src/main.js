import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import Vuerouter from "vue-router"
import {routes} from "@/routes";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(Vuerouter);

const route = new Vuerouter({
  routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  roter
}).$mount('#app')
