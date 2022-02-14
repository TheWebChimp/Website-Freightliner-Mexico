<template>
	<div>
		<div class="block block-hero has-navigation">
			<nav class="hero-navigation">
				<div class="inner">
					<ul class="menu">
						<li class="menu-item"><nuxt-link to="/productos/cascadia">Modelo</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/cascadia/ventajas">Ventajas</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/cascadia/cabina">Cabina</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/cascadia/datos-tecnicos">Datos Técnicos</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/cascadia/motor">Motor</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/cascadia/manuales">Manuales</nuxt-link></li>
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
		name: 'Cascadia',
		layout: 'site',
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.block-hero {

		padding-top: 97%;
		background-image: url('~assets/images/template/productos/cascadia/splash-cascadia-mobile.jpg');

		@media @md-n-above {

			padding-top: 34%;
			background-image: url('~assets/images/template/productos/cascadia/splash-cascadia.jpg');
		}
	}

</style>