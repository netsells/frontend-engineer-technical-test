<template>
	<div class="scroll-y- col-12">
		<component
				:key=" 'Component' + selectedComponent"
				v-bind:is="selectedComponent"
				class="pt-0"
		></component>
	</div>
</template>

<script>
    // import { mapState, mapActions } from 'vuex';
    import step_1 from './step1';
    import step_2 from './step2';
    import step_3 from './step3';
    import step_dash from './step_dash';

    export default {
        data() {
            return {
                selectedComponent: 'step_dash',
                employeeId: '',
                action: '',
            }
        },
        watch: {
            $route(to, from) {
                let self = this;
                self.action = self.$route.params.action ? self.$route.params.action : '';
                self.changeComponent(self.action ?
                    "step_" + self.action :
                    ""
                );
                console.log(to, from);
            }
        },
        computed: {},
        created() {
            const self = this;
            self.action = self.$route.params.action ? self.$route.params.action : '';
            self.changeComponent(
                self.action ?
                    "step_" + self.action :
                    ""
            );
        },
        methods: {
            changeComponent(componentName) {
                const self = this;
                if (componentName) {
                    self.selectedComponent = componentName;
                } else {
                    self.selectedComponent = 'step_dash';
                }
            }
        },
        components: {
            step_1,
            step_2,
            step_3,
            step_dash,
        }
    };
</script>

<style scoped>
	.bg-finehr {
		background-color: #1c3691;
		color: white;
	}

	h2 {
		color: #e1e1e1;
	}

	p {
		line-height: 1.7;
		color: #e1e1e1;
	}

	.scroll-y {
		overflow-y: scroll;
	}
</style>
