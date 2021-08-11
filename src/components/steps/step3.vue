<template>
	<vs-row>
		<vs-col>
	<!---	<vs-row>
				<vs-col class="col-4">step</vs-col>
				<vs-col class="col-4">File Uploads</vs-col>
				<vs-col class="col-4"></vs-col>
			</vs-row> -->
			<vs-row>
				<form class="file_upload" >
					<div class="row_wrap">
					<label for="filecv">Upload Your CV:</label><br>
					<input type="file" name="filecv" ref="filecv"   v-on:change="handleCvUpload()">
					</div>
					<div class="row_wrap">
					<label for="coverletter">Upload Your Cover Letter :</label><br>
					<input type="file" name="coverletter"    ref="filecover" v-on:change="handleCoverUpload()">
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
        name: 'step3',
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
