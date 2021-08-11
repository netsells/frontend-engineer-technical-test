import Vue from 'vue';
import Vuex from 'vuex';

import {profile} from './profile.module';
import {alert} from './alert.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        profile,
        alert,
    }
});
