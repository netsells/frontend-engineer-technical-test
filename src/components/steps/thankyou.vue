<template>
<div class="confirm style_pattern1">
<div class="wrap_div">

<div class="achivement_txt">Success! </div>
<div class="message_txt">Thank you </div>
<div class="description_txt">Our team willrespond to you within the next 48h </div>

<router-link class="btn_style1" to="/" type="button">Home</router-link>

</div>
</div>

</template>

<script>
    // import {mapState, mapGetters} from 'vuex';
    import {form_mixin} from './form_mixin';

    export default {
        mixins: [form_mixin],
        name: 'step1',
        props: {
            msg: String
        },
        data: () => ({
        }),
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
