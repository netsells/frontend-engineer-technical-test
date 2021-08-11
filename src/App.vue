<template>
	<div id="contents">

		<!-- Display a quick message on screen / ALERT -->
		<!--<snackBar></snackBar>-->

		<!--<Header></Header>-->
		<router-view></router-view>
	</div>
</template>

<script>

    // import snackBar from './components/common/snackbar';
    import {notification} from './_helpers/notification.js';

    export default {
        name: 'App',
		mixins:[notification],
        computed: {
            // ...mapState({
            //     alert: state => state.alert,
            //     loading: state => state.products.loading,
            // }),
        },
        methods: {
            // ...mapActions({clearAlert: 'alert/clear'}),
        },
        watch: {
            $route() {
                // clear alert on location change
                this.clearAlert();
            }
        },
        components: {
            // Header,
            // snackBar
        }
    }
</script>

<style>
	#contents {
	
		margin: auto;
		bottom:0px;
		min-height:100%;
		padding: 1px 1px 20px 1px;
		
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	
		margin-top: 10px;
	}
</style>
