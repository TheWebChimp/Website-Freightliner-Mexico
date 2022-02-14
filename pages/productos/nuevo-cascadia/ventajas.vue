<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<div class="title-wrapper">
								<h2 class="block-title">Ventajas</h2>
							</div>

							<div class="the-content">
								<ul class="list">
									<li>Amplia variedad de motores: DD13, DD15 y DD16 según las necesidades de tu negocio. </li>
									<li>Diseño aerodinámico mejorado para brindar mayor eficiencia de combustible</li>
									<li>Tren Motriz Integral</li>
									<li>Transmisión automatizada para un manejo óptimo</li>
									<li>Sistemas de seguridad activos para mitigar accidentes</li>
									<li>Diseño de máxima comodidad para el operador</li>
									<li>Conectividad para el control y manejo de tu flota</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/nuevo-cascadia/cascadia-nuevo.png" alt="">
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

	.title-wrapper {

		text-align: center;

		@media @md-n-above {

			text-align: left;
		}
	}

	.block-producto {

		padding: @margin-double 0;
	}


</style>