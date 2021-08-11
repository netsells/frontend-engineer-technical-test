// import { authHeader } from '../_helpers';
// import { crypt } from '../_services';

const state = {
    form_data: {
        fname:'',
        lname:'',
        emailid:'',
        phone:'',
        liveinuk:'',
        githubprofile:'',
        aboutyou:'',
        cv:'',
        coverletter:'',
    },
    loading: false,
};

const actions = {
    addToCart({dispatch, commit}, product) {
        commit('setLoading', true);
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (product) {
                    commit('addToCart', product);
                    dispatch('alert/success', "Product Carted Successfully!", {root: true});
                    resolve(product);
                } else {
                    reject("Failed to Cart Product...!");
                    dispatch('alert/error', "Failed to Cart Product...!", {root: true});
                }
                commit('setLoading', false);
            }, 1000);
        });
    },
};

const getters = {
    cartCount(state) {
        return state.cart_items.length;
    }
}

const mutations = {
    setLoading(state, status) {
        state.loading = status;
    },
    addToCart(state, product) {
        state.cart_items.push(product);
    }
};

export const profile = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
