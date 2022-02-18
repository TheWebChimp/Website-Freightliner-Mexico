<template>
	<div>
		<nav class="product-navigation">
			<div class="inner">
				<ul class="menu">
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-2528">Modelo</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-2528/aplicaciones">Aplicaciones</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-2528/ventajas">Ventajas</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-2528/dimensiones">Dimensiones</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-2528/datos-tecnicos">Datos Técnicos</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-2528/manuales">Manuales</nuxt-link></li>
				</ul>
			</div>
		</nav>
		<nuxt-child />
	</div>
</template>

<script>
	export default {
		layout: 'site',
		mounted() {},
		methods: {}
	}
</script>

<style scoped lang="less">

	.product-navigation {

		background: @brand-1;
	}


</style>