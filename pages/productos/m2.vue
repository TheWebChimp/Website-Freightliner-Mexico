<template>
	<div>
		<div class="block block-hero has-navigation">
			<nav class="hero-navigation">
				<div class="inner">
					<ul class="menu">
						<li class="menu-item"><nuxt-link to="/productos/m2">Modelo</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/aplicaciones">Aplicaciones</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/ventajas">Ventajas</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/cabina">Cabina</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/motor">Motor</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/dimensiones">Dimensiones</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/datos-tecnicos">Datos Técnicos</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/m2/manuales">Manuales</nuxt-link></li>
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

		padding-top: 66%;
		background-image: url('~assets/images/template/productos/m2/splash-m2-mobile.jpg');

		@media @md-n-above {

			padding-top: 34%;
			background-image: url('~assets/images/template/productos/m2/splash-m2.jpg');
		}
	}

</style>