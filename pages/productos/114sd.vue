<template>
	<div>
		<div class="block block-hero has-navigation">
			<nav class="hero-navigation">
				<div class="inner">
					<ul class="menu">
						<li class="menu-item"><nuxt-link to="/productos/114sd">Modelo</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/114sd/ventajas">Ventajas</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/114sd/cabina">Cabina</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/114sd/motor">Motor</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/114sd/datos-tecnicos">Datos Técnicos</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/productos/114sd/manuales">Manuales</nuxt-link></li>
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
		background-image: url('~assets/images/template/productos/114sd/splash-114sd-mobile.jpg');

		@media @md-n-above {

			padding-top: 34%;
			background-image: url('~assets/images/template/productos/114sd/splash-114sd.jpg');
		}
	}

</style>