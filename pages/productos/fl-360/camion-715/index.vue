<template>
	<div>
		<nav class="product-navigation">
			<div class="inner">
				<ul class="menu">
					<li class="menu-item"><nuxt-link to="/productos/fl-360">Camión 360 715</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/360-917-1217">Camión 360 917 y 1217</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/m2/360-2528">Camión 360 2528</nuxt-link></li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export default {
		name: 'FL 360',
		layout: 'site',
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.block-producto {

		padding: @margin-double 0;

		.the-content {
		}
	}


</style>