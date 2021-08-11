<template>
	<vs-row>
		<vs-col> 
		<!--	<vs-row>
				<vs-col class="col-4">step</vs-col>
				<vs-col class="col-4">More about You</vs-col>
				<vs-col class="col-4"></vs-col>
			</vs-row> -->
			
								<vs-row>
				<vs-col col="w-12">
					<h3 class="sec_title">More About You</h3>
					<h5 class="sec_desc">Required Fields are marked by the asterisk <span class="required">*</span>  </h5>
				</vs-col>
			</vs-row>
			
			<vs-row>
				<form >
					<div class="row_wrap">
						<!-- <label for="liveinuk">Do you live in UK?<span class="required">*</span></label><br>  -->
						<vs-input type="text" v-model="form_data.liveinuk" name="liveinuk" value="" required label="Do you live in UK?"/>
					</div>
					<div class="row_wrap">
					<!--<label for="githubprofile">Your Github Profile <span class="required">*</span></label><br>  -->
						<vs-input type="text" v-model="form_data.githubprofile" name="githubprofile" value="" required label="Your Github Profile *"/>
					</div>
					<div class="row_wrap">
						<!--<label for="aboutyou">About You <span class="required">*</span></label><br>  -->
						<vs-textarea v-model="form_data.aboutyou" name="aboutyou" value="" required label="About You "></vs-textarea>
					</div>
				</form>
			</vs-row>
		</vs-col>
	</vs-row>
</template>

<script>
    // import {mapState, mapGetters} from 'vuex';
    import {form_mixin} from './form_mixin';

    export default {
        mixins: [form_mixin],
        name: 'step2',
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
