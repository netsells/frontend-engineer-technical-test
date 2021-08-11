<template> 
<div class="col-12 progress">
<div class="progress-bar" role="progressbar" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100" v-bind:style="'width:'+percentage+'%'"></div>
</div>

</template>

<script>
    // import {mapState, mapGetters} from 'vuex';
    import {form_mixin} from './form_mixin';

    export default {
        mixins: [form_mixin],
        name: 'ProgressBar',
        props: {
            percentage: {
				default : 0,
			}
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
