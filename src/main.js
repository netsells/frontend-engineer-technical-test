import Vue from 'vue';
import Vuex from 'vuex';
import Vuesax from 'vuesax';
import Micons from 'material-icons';
import VueNumericInput from 'vue-numeric-input';
import App from './App.vue';

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/css/material-icons.css' //material icon styles
import {store} from './_store';
import {router} from './_helpers';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(Vuesax);
Vue.use(Micons);
Vue.use(VueNumericInput);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
