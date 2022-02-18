<template>
	<div>
		<div class="block block-hero has-navigation">
			<nav class="hero-navigation">
				<div class="inner">
					<ul class="menu">
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia">Modelo</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia/ventajas">Ventajas</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia/cabina">Cabina</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia/seguridad">Seguridad</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia/datos-tecnicos">Datos Técnicos</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia/transmision">Transmisión</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia/motores">Motores</nuxt-link></li>
						<li class="menu-item"><a href="https://www.freightliner.com.mx/configurador-cascadia/" target="_blank">Configurador</a></li>
						<li class="menu-item"><nuxt-link to="/productos/nuevo-cascadia/manuales">Manuales</nuxt-link></li>
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

		padding-top: 77%;
		background-image: url('~assets/images/template/productos/nuevo-cascadia/splash-nuevo-cascadia-mobile.jpg');

		@media @md-n-above {

			padding-top: 34%;
			background-image: url('~assets/images/template/productos/nuevo-cascadia/splash-nuevo-cascadia.jpg');
		}
	}

</style>