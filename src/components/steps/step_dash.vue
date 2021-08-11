<template>
	<vs-row>
		<vs-col v-if="step == 0 || !step">
			<vs-row>
				<vs-col col="w-12">
					<h3 class="sec_title">Application Steps</h3>
					<h5 class="sec_desc">Select the Step you wish to complete  </h5>
				</vs-col>
			</vs-row>


			<vs-row class="prgress_container ">
				<vs-col col="w-4">
					<progressbar :percentage="getProgressBar(1)"></progressbar>
					<h5>Step 1</h5>
					
					<h4>Personal Details</h4>
					<p>Please complete your personal details
					</p>
					<router-link to="/formd/1"  type="button">Complete</router-link>
				</vs-col>
				<vs-col col="w-4">
					<progressbar :percentage="getProgressBar(2)"></progressbar>
					<h5>Step 2</h5>
					
					<h4>More about you</h4>
					<p>Please complete this section by clicking complete
					</p>
					<router-link to="/formd/2"  type="button">Complete</router-link>
				</vs-col>
				<vs-col col="w-4">
						<progressbar :percentage="getProgressBar(3)"></progressbar>
					<h5>Step 3</h5>
				
					<h4>Files Upload</h4>
					<p>Please upload cover letter and cv
					</p>
					<router-link to="/formd/3" type="button">Complete</router-link>
				</vs-col>
			</vs-row>
		</vs-col>
	</vs-row>
</template>

<script>
    import {form_mixin} from './form_mixin';
	import progressbar from "./progressbar";

    export default {
        mixins: [form_mixin],
        name: 'step1',
        props: {
            msg: String
        },
        computed: { },
        methods: {
        },
        components: {
			progressbar
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	
</style>
