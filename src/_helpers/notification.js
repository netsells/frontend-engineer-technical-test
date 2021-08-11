import {mapState, mapActions} from "vuex";

export const notification = {
    data: () => ({
    }),
    watch: {
        alert: {
            handler() {
                if (this.alert.message) {
                    this.notify();
                }
            },
            deep: true,
        },
        $route() {
            // clear alert on location change
            this.clearAlert();
        },
    },
    computed: {
        ...mapState({
            alert: (state) => state.alert,
            message: (state) => state.alert.message,
            loading: (state) => state.users.loading,
            snackbarModel: (state) => state.alert.snackbarModel,
            sn_top: (state) => state.alert.sn_top,
            sn_bottom: (state) => state.alert.sn_bottom,
        }),
    },
    created() {
        this.notify();
    },
    methods: {
        ...mapActions({clearAlert: "alert/clear"}),
        notify() {
            var self = this;
            if(self.message) {
                self.$vs.notification({
                    color: "success",
                    position: "top-right",
                    title: self.alert.type,
                    text: self.message
                })
            }
        },
    },
};