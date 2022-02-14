<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-7">
							<h2 class="block-title">Cabina</h2>
							<div class="the-content mb-default">

								<p>Las cabinas del Cascadia se encuentran disponibles en opciones de día o con dormitorio. </p>
								<p>Su diseño aerodinámico se complementa con 2 paquetes opcionales, con los que puede mejorar la eficiencia de combustible. </p>
								<p>3 paquetes aerodinámicos Estándar, Aero y AeroX</p>
								<p><strong><u>El Paquete Estándar del Cascadia incluye: </u></strong></p>
								<ol class="list">
									<li>Cofre inclinado con deflector de aire y parrilla de cuatro barras. </li>
									<li>Defensa con deflector de aire</li>
									<li>Espejos aerodinámicos laterales y auxiliares</li>
									<li>Sello en la parte superior de las puertas</li>
									<li>Antena integrada</li>
									<li>Extensiones laterales de 12”</li>
								</ol>
								<p><strong><u>El Paquete Aero del Nuevo Cascadia incluye las características del Paquete Estándar y además:</u></strong></p>
								<ol class="list">
									<li>Extensiones laterales de 20”</li>
									<li>Faldones laterales de chasis</li>
									<li>Cubiertas de rueda trasera removibles</li>
								</ol>

								<p><strong><u>El paquete AeroX del Nuevo Cascadia incluye el Paquete Estándar,  el Paquete Aero y además:</u></strong></p>
								<ol class="list">
									<li>Defensa con deflector de aire flexible</li>
									<li>Extensiones laterales de 24”</li>
									<li>Deflector entre ruedas del eje tándem.</li>
								</ol>
							</div>
						</div>
						<div class="col-xs-12 col-sm-5">
							<img src="~/assets/images/template/productos/nuevo-cascadia/cabina.jpg" alt="">

							<div class="the-content">
								<h3>Dormitorios</h3>
								<ul class="list">
									<li>Dormitorio de 48” 60” y 72”</li>
									<li>Versiones por techo medio y techo elevado (dependiendo del dormitorio).</li>
									<li>Puerta derecha de acceso a dormitorio.</li>
									<li>Aislante acústico y térmico de serie.</li>
								</ul>

								<h3>Confort</h3>
								<p>Disponible en versiones de litera sencilla, doble o sala de conductor.</p>
								<p>Vestiduras en tela, mordura o vinil disponibles en distintos colores.</p>
								<p>Acabados en cromo, veteado o plástico disponibles.</p>
							</div>
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