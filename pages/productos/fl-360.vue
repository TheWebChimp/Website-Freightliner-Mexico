<template>
	<div>
		<div class="block block-hero has-navigation">
			<nav class="hero-navigation">
				<div class="inner">
					<ul class="menu">
						<li class="menu-item"><nuxt-link to="/productos/fl-360">Camión 360 715</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/fl-360/360-917-1217">Camión 360 917 y 1217</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/360-2528">Camión 360 2528</nuxt-link></li>
					</ul>
				</div>
			</nav>
		</div>

		<div class="sub-sections">
			<nuxt-child />
		</div>
	</div>
</template>

<script>

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export default {
		name: 'M2',
		layout: 'site',
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.block-hero {

		padding-top: 47%;
		background-image: url('~assets/images/template/productos/fl-360/splash-360-mobile.jpg');

		@media @md-n-above {

			padding-top: 34%;
			background-image: url('~assets/images/template/productos/fl-360/splash-360.jpg');
		}
	}

</style>