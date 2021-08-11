<template>
	<div class="home style_pattern1">
	<div class="wrap_div">

		<div class="achivement_txt">Welcome </div>
		<div class="message_txt">We're exicted to see <br> What you can do!</div>
		
		<router-link  class="btn_style1" to="/formd">Begin</router-link>
	</div>
	</div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        components: {
        }
    }
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
