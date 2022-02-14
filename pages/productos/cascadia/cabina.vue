<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<h2 class="block-title">Cabina</h2>

					<div class="row">
						<div class="col-xs-12 col-sm-6">
							<div class="the-content">
								<h3>Confort</h3>
								<ul class="list">
									<li>Cortinas de privacidad para dormitorio de línea</li>
									<li>Cabina con suspensión neumática (opcional)</li>
									<li>Colchón memory foam (opcional)</li>
									<li>Preparación para refrigerador y televisión</li>
									<li>Vestidura vinílica Graphite black.</li>
									<li>Cenicero y encendedor en tablero.</li>
									<li>Consola delantera en techo.</li>
									<li>Porta objetos en páneles de puertas.</li>
									<li>Litera inferior alzable de 35" de ancho.</li>
									<li>2 portavasos en tablero.</li>
									<li>Extintor de 5 lb.</li>
									<li>Aire acondicionado y calefacción con control de temperatura constante.</li>
									<li>Compresor de A/C Sanden de alta resistencia.</li>
									<li>Aislante acústico y térmico en piso, parte superior de cabina y dormitorio.</li>
									<li>Asiento de conductor con suspensión neumática y ajuste lumbar Ezyrider.</li>
									<li>Columna de dirección con ajuste de profundidad e inclinación.</li>
								</ul>

								<h3>Visibilidad</h3>
								<ul class="list">
									<li>Tablero de perfil bajo.</li>
									<li>Parabrisas dividido en dos opcional para reducir los gastos de reparación.</li>
									<li>Cofre aerodinámico.</li>
									<li>Espejos retrovisores tipo West Coast.</li>
								</ul>

								<h3>Tablero</h3>
								<ul class="list">
									<li>Tablero envolvente.</li>
									<li>Indicadores retroiluminados, fáciles de leer y con LEDs de larga vida y fácil reemplazo.</li>
									<li>Interruptores iluminados por LEDs.</li>
									<li>Portavasos doble.</li>
									<li>Consola superior para un cómodo almacenaje.</li>
									<li>Toma de corriente de 12V</li>
									<li>Acabado tipo madera (Opcional)</li>
									<li>Viseles cromados para medidores (Opcional)</li>
									<li>Volante de piel (Opcional)</li>
								</ul>

								<h3>Asientos</h3>
								<ul class="list">
									<li>Diseñados para máxima comodidad del operador y pasajero.</li>
									<li>Suspensión neumática en el asiento del operador de línea y en el de pasajero (opcional).</li>
									<li>Bolsa de aire para conductor (opcional).</li>
									<li>Asiento para conductor sumergible en caso de volcadura (opcional).</li>
								</ul>

								<h3>Dormitorios</h3>
								<ul class="list">
									<li>Dormitorio de 48” 60” y 72”</li>
									<li>Versiones midroof y raised roof (dependiendo del dormitorio).</li>
									<li>Extensiones laterales para dormitorio.</li>
									<li>Puerta derecha de acceso a dormitorio.</li>
									<li>Aislante acústico y térmico de serie.</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/cascadia/cabina.png" alt="">
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