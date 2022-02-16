<template>
	<div>
		<nav class="product-navigation">
			<div class="inner">
				<ul class="menu">
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217">Modelo</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217/aplicaciones">Aplicaciones</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217/ventajas">Ventajas</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217/dimensiones-1017">Dimensiones 1017</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217/dimensiones-1217">Dimensiones 1217</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217/datos-tecnicos-1017">Datos Técnicos 1017</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217/datos-tecnicos-1217">Datos Técnicos 1217</nuxt-link></li>
					<li class="menu-item"><nuxt-link to="/productos/fl-360/camion-1217/manuales">Manuales</nuxt-link></li>
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