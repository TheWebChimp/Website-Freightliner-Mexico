<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<h2 class="block-title">Datos Técnicos</h2>
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<div class="the-content">
								<ul class="list">
									<li><strong>Capacidad:</strong> Clase 8  Peso Bruto Vehicular desde 60,000 Lb (27,215 Kg) hasta 66,000 Lb (29,937 Kg).</li>
									<li><strong>Dirección:</strong> TRW THP-60 Power Steering, TRW TAS-85 Power Steering.</li>
									<li><strong>Transmisión:</strong> Manuales Eaton Fuller (9, 10, 11, 13 y 18 velocidades) y Automática Allison (Serie 3000 y 4000)</li>
									<li><strong>Tanque de combustible:</strong> Configurables de 1-4 tanques en forma cilíndrica o rectangular.</li>
									<li><strong>Sistema de postratamiento EURO V y EPA 10 GHG17</strong> </li>
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