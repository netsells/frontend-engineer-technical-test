<template>
	<div class="center examplex">
		<vs-navbar hide-scroll center-collapsed v-model="activeItem">
			<template #left>
				<div class="center con-avatars">
					<vs-avatar>
						<i class='mi mi-menu'></i>
					</vs-avatar>
				</div>
			</template>
			<vs-navbar-item :active="activeItem == 'guide'" id="guide">
				<router-link to="/" class="no-link-style">
				<!--<img src="../../assets/logo.png" alt="" width="40px">-->
					HOME
				</router-link>
			</vs-navbar-item>
			<template #right>
				<router-link to="/product/cart" class="no-link-style">
					<span class="cart-count" v-if="cartCount>=1">{{cartCount}}
						<i class="bx bxs-heart"></i></span>
					<vs-button
							circle
							dark
							border
					>
						<i class='mi mi-shopping-cart mi-1k'></i>
					</vs-button>
				</router-link>
			</template>
		</vs-navbar>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Header',
        props: {},
        computed: {
            ...mapGetters("products", ["cartCount"]),
        },
        data() {
            return {
                activeItem: 1
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.cart-count {
		position: absolute;
		right: 54px;
		top: 10px;
		z-index: 12;
		padding: 4px 8px;
		background: #0057f7;
		font-size: 10px;
		color: #fff;
		border-radius: 50%;
	}
	.no-link-style{
		text-decoration: none;
	}
	.vs-navbar-content{
		position: relative;
	}

</style>
