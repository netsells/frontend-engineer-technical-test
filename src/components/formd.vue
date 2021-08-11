<template>

  <div class="progress_wrap">
    <vs-row v-if="step >=1 && step <= 3" class="progress_list">
      <vs-col>
        <router-link to="/formd/1" type="button">Step1</router-link>
        <progressbar :percentage="getProgressBar(1)"></progressbar
      ></vs-col>
      <vs-col>
        <router-link to="/formd/2" type="button">Step2</router-link>
        <progressbar :percentage="getProgressBar(2)"></progressbar
      ></vs-col>
      <vs-col>
        <router-link to="/formd/3" type="button">Step3</router-link>
        <progressbar :percentage="getProgressBar(3)"></progressbar
      ></vs-col>
    </vs-row>
 


    <step_1 v-if="step == 1"></step_1>
    <step_2 v-else-if="step == 2"></step_2>
    <step_3 v-else-if="step == 3"></step_3>
    <step_dash v-else-if="step == 0"></step_dash>
    <step_thankyou v-else-if="step == 4"></step_thankyou>

    <!--STEPS-->
    <div v-if="step != 0 || step <= 3">
      
      <button class="btn_style1" v-if="step < 3" @click="checkForm()">
        Next
      </button>
      <button class="btn_style1" v-if="step == 3" @click="submitForm()">
        Submit
      </button>
    </div>
    <div class="errordiv">
 <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
    </ul>
  </p>

    </div>
  </div>
</template>

<script>
import { form_mixin } from "./steps/form_mixin";
import step_dash from "./steps/step_dash";
import step_1 from "./steps/step1";
import step_2 from "./steps/step2";
import step_3 from "./steps/step3";
import progressbar from "./steps/progressbar";
import step_thankyou from "./steps/thankyou";

export default {
  mixins: [form_mixin],
  name: "formd",
  props: {
    msg: String,
  },
  watch: {
    $route() {
      let self = this;
      self.action = self.$route.params.action ? self.$route.params.action : "";
      self.changeComponent(
        self.action ? "step_" + self.action : "",
        self.action
      );
    },
  },
  created() {
    const self = this;
    self.action = self.$route.params.action ? self.$route.params.action : "";
    self.changeComponent(self.action ? "step_" + self.action : "", self.action);
  },
  methods: {
    changeComponent(componentName, step = 0) {
      const self = this;
      self.step = step;
      if (componentName) {
        self.selectedComponent = componentName;
      } else {
        self.selectedComponent = "step_dash";
      }
    },
  },
  components: {
    step_1,
    step_2,
    step_3,
    progressbar,
    step_dash,
    step_thankyou,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
