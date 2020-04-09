/**
 * Core
 */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

/**
 * Router & Store
 */
import router from './router';

/**
 * Dependencies
 */
import Axios from 'axios';
import appOpts from './config';

/**
 * Vue Components
 */
import App from './App.vue';

/**
 * Styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.css';
import './assets/styles/app-styles.css';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

Vue.prototype.$eventHub = new Vue();
Vue.prototype.$http = Axios;
Vue.prototype.$http.baseURL = appOpts.apiEndpoint;

Vue.use(ShardsVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
