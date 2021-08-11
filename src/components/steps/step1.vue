<template>
	<vs-row>
		<vs-col>
			<!--<vs-row>
				<vs-col class="col-4">step</vs-col>
				<vs-col class="col-4"></vs-col>
				<vs-col class="col-4"></vs-col>
			</vs-row> -->
			
					<vs-row>
				<vs-col col="w-12">
					<h3 class="sec_title">Personal  Details</h3>
					<h5 class="sec_desc">Required Fields are marked by the asterisk <span class="required">*</span>  </h5>
				</vs-col>
			</vs-row>
			<vs-row>
				<form >
				
					<div class="row_wrap">
						<!-- <label for="fname">First name <span class="required">*</span></label><br> -->
						<vs-input type="text" v-model="form_data.fname" required label="First Name *"/>
					</div>
					<div class="row_wrap">
					<!--	<label for="lname">Second name:</label><br> -->
						<vs-input type="text" v-model="form_data.lname" name="lname" value=""  label="Last Name *"/>
					</div>
					<div class="row_wrap">
						
						<vs-input type="email" v-model="form_data.emailid" name="emailid" required label="Email ID *"/>
					</div>
					<div class="row_wrap">
						<!-- <label for="phone">Phone <span class="required">*</span></label><br>  -->
						<vs-input type="text" v-model="form_data.phone" name="phone" value="" required label="Phone *"/>
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
