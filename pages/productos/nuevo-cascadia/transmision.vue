<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<h2 class="block-title">Transmisión</h2>
					<div class="row">
						<div class="col-xs-12 col-sm-6">
							<div class="the-content">
								<h3>DT12<br><small>Detroit DT12 Automatizada</small></h3>

								<p>La transmisión DT12 Automatizada, es una transmisión manual de 12 velocidades que realiza los cambios a través de una computadora.</p>
								<ul>
									<li>Protege tu tren motriz gracias a los cambios automatizados.</li>
									<li>Los mejores patrones de cambio son seleccionados electrónicamente para proveer la mejor potencia y la mayor eficiencia de combustible.</li>
									<li>Modo planeo que en condiciones de descenso permite al motor reducir las RPM al mínimo para ahorrar combustible. </li>
									<li>Con nuestra transmisión automatizada fácil de operar, los conductores alcanzan su rendimiento óptimo más rápido, lo que le permite ahorrar dinero en combustible y mejorar la comodidad del conductor.</li>
									<li>Menor tiempo de capacitación al operador.</li>
									<li>Asistente en pendientes que detecta la inclinación del vehículo y mantiene activados los frenos, evitando que el tractocamión tenga un retroceso y golpee al vehículo de atrás.</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/nuevo-cascadia/dt12.jpg" alt="">
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