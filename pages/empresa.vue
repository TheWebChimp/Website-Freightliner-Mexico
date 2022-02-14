<template>
	<div>
		<div class="block block-hero has-navigation">
			<nav class="hero-navigation">
				<div class="inner">
					<ul class="menu">
						<li class="menu-item"><nuxt-link to="/empresa">Quiénes Somos</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/empresa/mision">Misión y Visión</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/empresa/historia">Historia</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/empresa/instalaciones">Instalaciones</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/empresa/tecnologia">Tecnología</nuxt-link></li>
						<li class="menu-item"><nuxt-link to="/empresa/pdi">Custom Truck Services Centers (PDI)</nuxt-link></li>
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

		padding-top: 100%;
		background-image: url('~assets/images/template/empresa/splash-empresa-mobile.jpg');

		@media @md-n-above {

			padding-top: 45%;
			background-image: url('~assets/images/template/empresa/splash-empresa.jpg');
		}
	}

</style>