<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-7">
							<h2 class="block-title">Cabina</h2>
							<div class="the-content mb-double">
								<ul class="list">
									<li>Ligera y resistente de aluminio reforzado con acero tratado.</li>
									<li>Remaches Henrob</li>
									<li>Segura y durable; cumple con las pruebas de impacto para el pilar A, volcaduras e impactos traseros.</li>
									<li>Montaje neumático</li>
									<li>Parabrisas de 2,500 pulgadas cuadradas de una sola pieza para una visibilidad sobresaliente en el sitio de trabajo.</li>
									<li>Tablero ergonómicamente diseñado para el área del operador con características de un tablero estilo automotriz.</li>
									<li>Control de instrumentos y equipo adicional personalizable,  fácil de leer con luces LED en instrumentos y controles al alcance del operador.</li>
									<li>Amplio ángulo de apertura de puerta</li>
									<li>Cabina con escalón bajo y antiderrapante.</li>
									<li>Apertura del cofre de 70°</li>
									<li>Cabina con suspensión de aire</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-5 text-center">
							<img class="mb-double" src="~/assets/images/template/productos/114sd/cabinas.jpg" alt="">
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
	}


</style>