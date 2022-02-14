<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Ventajas</h2>
							<div class="the-content">
								<ul class="list">
									<li><strong>Maniobrabilidad</strong><br>Radio de giro de hasta 55°</li>
									<li><strong>Visibilidad</strong><br>Parabrisas más amplio del mercado</li>
									<li>Tren Motriz Propietario</li>
									<li><strong>Accesibilidad</strong><br>Ángulo de apertura de puertas</li>
									<li>Portafolio más amplio de motores para segmento mdio y heavy duty</li>
									<li>Durabilidad y confiabilidad</li>
									<li>Ergonomía y confort de cabina</li>
									<li>Flexibilidad de opciones de aplicaciones y componentes</li>
									<li>Estabilidad y suavidad</li>
									<li>Gran potencia</li>
									<li>Amplitud de la cabina</li>
									<li>Faros amplios</li>
									<li>Cómodo y ergonómicos</li>
									<li>Bajo costo real de operación</li>
									<li>Aerodinámica</li>
									<li>Variedad de configuraciones en tren motriz y cabina</li>
									<li>Sistema antivuelco</li>
									<li>Retrovisores amplios, buenos y duraderos</li>
									<li>Cinturones de seguridad de alta visibilidad</li>
								</ul>


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
	}


</style>