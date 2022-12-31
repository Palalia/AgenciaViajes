import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import {faPlaneSlash} from '@fortawesome/free-solid-svg-icons'
Vue.config.productionTip=false;
library.add(
  faMapLocationDot,
  faHeadset,
  faHandHoldingDollar,
  faBusinessTime,
  faPlaneSlash);

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
