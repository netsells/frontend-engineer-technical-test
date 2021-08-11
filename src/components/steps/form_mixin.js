import { mapState } from 'vuex';


export const form_mixin = {
	data() {
		return {
			step: 0,
			errors: [],
			step1: ['fname', 'lname', 'emailid', 'phone'],
		}
	},
	computed: {
		...mapState({
			form_data: state => state.profile.form_data,
		}),
	},
	methods: {
		handleCvUpload() {
			let self = this;

			self.form_data.cv = this.$refs.filecv.files[0].name;
		},
		handleCoverUpload() {
			let self = this;
			self.form_data.coverletter = this.$refs.filecover.files[0].name;
		},

		submitForm() {
			const self = this;
			self.errors = [];
			var validate = true;
			if (self.step == 3) {
				if (!self.form_data.cv) {
					self.errors.push("Upload Your CV .");
					validate = false;
				}
				if (!self.form_data.coverletter) {
					self.errors.push("Upload Your Cover Letter.");
					validate = false;
				}

			}

			if (validate) {
				self.form_data = {
					fname: '',
					lname: '',
					emailid: '',
					phone: '',
					liveinuk: '',
					githubprofile: '',
					aboutyou: '',
					cv: '',
					coverletter: '',
				};
				self.step++;
			}
			//this.$route.push("/thankyou");
		},
		getProgressBar(step) {
			const self = this;
			var progressCoun = 0;
			var percentageValueNow = 0;

			if (step === 1) {
				self.step1.map(data => {
					//	console.log(data);
					if (self.form_data[data]) {

						progressCoun++;
					}
				});
				percentageValueNow = (parseInt(100) * parseInt(progressCoun)) / parseInt(self.step1.length);
			}

			return percentageValueNow;
		},
		checkForm() {
			const self = this;
			self.errors = [];
			var validate = true;

			if (self.step == 1) {

				if (!self.form_data.fname) {
					self.errors.push("firstname  required");
					validate = false;
				}

				if (!self.form_data.emailid) {
					self.errors.push("emailid  required.");
					validate = false;
				}
			}
			else if (self.step == 2) {
				if (!self.form_data.liveinuk) {
					self.errors.push("Live in Uk field is required .");
					validate = false;
				}
				if (!self.form_data.githubprofile) {
					self.errors.push("Git Profile  required.");
					validate = false;
				}
				if (!self.form_data.aboutyou) {
					self.errors.push("About you  required.");
					validate = false;
				}
			}



			if (validate == true) {
				self.step++;
			}
		}

	}
}