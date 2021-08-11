import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/home'
import Formd from '../components/formd';
import thankyou from '../components/steps/thankyou';

Vue.use(Router);

export const router = new Router({
    routes: [
        { path: '/', component: HomePage },
        { path: '/thankyou', component: thankyou },
        { path: '/formd/:action?/', component: Formd},

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ],
    mode: 'history',
});
