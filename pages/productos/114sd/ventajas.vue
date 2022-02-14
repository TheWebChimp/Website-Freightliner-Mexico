<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Ventajas</h2>
							<div class="the-content">
								<h3>Durabilidad</h3>
								<ul class="list">
									<li>Camión Nacido Vocacional.</li>
									<li>Toma de aire de motor con precleaner como equipamiento de línea.</li>
									<li>Ayuda a la vida útil del motor.</li>
								</ul>

								<h3>Productividad</h3>
								<ul class="list">
									<li>Nuevos motores propietarios Detroit DD8 y DD13.</li>
									<li>Diferentes opciones de PTO</li>
								</ul>

								<h3>Seguridad</h3>
								<ul class="list">
									<li>Cabina de aluminio, reforzada con acero y paneles resistentes a la corrosión.</li>

								</ul>

								<h3>Versatilidad</h3>
								<ul class="list">
									<li>Larguero de 12” y 3.2M RBM para aplicaciones severas de grúa y volteo.</li>
									<li>Sistemas de cableado multiplexado y sistema eléctrico SmartPlex que facilita la integración eléctrica de la carrocería.</li>
								</ul>

								<h3>Visibilidad</h3>
								<ul class="list">
									<li>Parabrisas de 2,500 pulgadas cuadradas y cofre inclinado.</li>
									<li>Espejos laterales dobles.</li>
								</ul>

								<h3>Ergonomía</h3>
								<ul class="list">
									<li>Amplio ángulo de apertura de puertas, cabina con escalón bajo antiderrapante y agarraderas ergonómicas para acceso a la cabina.</li>
								</ul>

								<h3>Confort</h3>
								<ul class="list">
									<li>Cabina con suspensión de aire.</li>
									<li>Asientos anchos personalizables y habitáculo ergonómico con volante de ajuste telescópico y de posiciones.</li>
								</ul>

								<h3>Maniobrabilidad</h3>
								<ul class="list">
									<li>Ángulo de giro de 50°</li>
								</ul>

								<h3>Normatividad</h3>
								<ul class="list">
									<li>Único fabricante con motor de 13lts Euro V</li>
									<li>Vocacional de rango medio para ciudades con requerimientos de rangos de emisión bajos.</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/114sd/imagen-interior-114.png" alt="">
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