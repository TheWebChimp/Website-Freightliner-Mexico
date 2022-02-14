<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Camión M2</h2>
							<div class="the-content">
								<p>El camión Freightliner M2 es el camión más versátil y que le ayudará a ganar más dinero. Cuenta con una cabina de aluminio disponible en 106 pulgadas BBC, que garantiza la comodidad de los ocupantes en cualquier operación.</p>
								<p>Además de una amplia variedad de aplicaciones funcionales en ciudad o carretera, el M2 tiene 4 opciones de motorización que se adaptan a las necesidades de tu negocio: Detroit DD5, Detroit DD8 y los MBE 924 y MBE 926; todos ellos reconocidos por su durabilidad, bajo costo de mantenimiento e inigualable economía en el consumo de combustible.</p>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/m2/m2.jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export default {
		name: 'Modelo',
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