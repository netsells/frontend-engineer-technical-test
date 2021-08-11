const state = {
    snackbarModel:true,
    type: null,
    message: null,
    sn_right: true,
    sn_top: true,
    sn_bottom: false
};

const actions = {
    success({ commit }, message) {
        commit('clear');
        commit('success', message);
    },
    warning ({ commit }, message) {
        commit('clear');
        commit('warning', message);
    },
    error({ commit }, message) {
        commit('clear');
        if (message) {
            commit('error', message);
        } else {
            commit('error', 'Error !');
        }
    },
    clear({ commit }) {
        commit('clear');
    }
};

const mutations = {
    success(state, message) {
        state.snackbarModel = true;
        state.sn_top = true;
        state.sn_bottom = false;
        state.type = 'success';
        state.message = message;
    },
    warning(state, message) {
        state.snackbarModel = true;
        state.sn_top = true;
        state.sn_bottom = false;
        state.type = 'warning';
        state.message = message;
    },
    error(state, message) {
        state.snackbarModel = true;
        state.sn_top = false;
        state.sn_bottom = true;
        state.type = 'error';
        state.message = message;
    },
    clear(state) {
        state.type = null;
        state.message = null;
        state.snackbarModel = false;
    }
};

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
};
