<template>
	<div>
		<div class="block block-hero has-navigation">
			<!--<nav class="hero-navigation">
				<div class="inner">
					<ul class="menu">
						<li class="menu-item"><nuxt-link to="/multimedia">Catálogos</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/multimedia/calendario">Calendario</nuxt-link></li>
					</ul>
				</div>
			</nav>-->
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
		name: 'Empresa',
		layout: 'site',
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.block {

		padding-top: 66%;
		background-image: url('~assets/images/template/multimedia/splash-multimedia-mobile.jpg');

		@media @md-n-above {

			padding-top: 45%;
			background-image: url('~assets/images/template/multimedia/splash-multimedia.jpg');
		}
	}

</style>