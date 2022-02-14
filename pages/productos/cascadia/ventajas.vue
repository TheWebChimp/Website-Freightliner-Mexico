<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Ventajas</h2>
							<div class="the-content">
								<h3>Motor</h3>
								<ul class="list">
									<li>DD15 de mayor rendimiento y eficiencia</li>
									<li>Intervalos de mantenimiento largos (*De hasta 40,000 km)</li>
									<li>Conducción extremadamente silenciosa y limpia</li>
								</ul>

								<h3>Diseño</h3>
								<ul class="list">
									<li>Ligero por naturaleza, para aumentar la capacidad de carga</li>
									<li>El más aerodinámico, para reducir la resistencia al viento y optimizar el consumo de combustible.</li>
									<li>Defensa de tres partes para facilitar su reemplazo</li>
									<li>Parrilla de gran tamaño, para mejor enfriamiento</li>
									<li>Eficiente, durable y confiable</li>
									<li>La mejor visibilidad</li>
									<li>Maniobrabilidad excepcional con hasta 50° de ángulo de giro</li>
								</ul>

								<h3>Seguridad</h3>
								<ul class="list">
									<li>Cumple con la normatividad internacional ECE R29, brindando un habitáculo seguro para sus ocupantes.</li>
									<li>Puede ser configurado con bolsa de aire para conductor y con asientos que se sumergen en caso de volcadura.</li>
								</ul>

								<h3>Mantenimiento</h3>
								<ul class="list">
									<li>Construido para estar siempre en las carreteras, ya que es fácil de reparar y mantener.</li>
									<li>Cabina con 2 soportes de aire.</li>
									<li>Páneles del tablero sujetos con tornillos que garantizan su fácil remoción e instalación.</li>
									<li>Indicadores e interruptores con acceso inmediato para ahorrar tiempo de compostura.</li>
									<li>Tornillos tipo Huckbolt libres de mantenimiento.</li>
									<li>Fácil acceso al motor, ya que el cofre abre hasta 90°.</li>
									<li>Depósitos transparentes de fluidos permiten revisiones instantáneas</li>
									<li>Tolvas debajo del cofre para proteger al motor contra salpicaduras, piedras y basuras de los caminos.</li>
									<li>Bujes libres de mantenimiento que no requieren lubricación.</li>
									<li>Bisagras cubiertas con teflón, que no requieren lubricación.</li>
									<li>Módulo de distribución y caja de fusibles, localizados en el tablero.</li>
									<li>Tablero integral con instrumentos de fácil lectura.</li>
									<li>Focos / lentes durables y fáciles de reemplazar.</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/cascadia/cascadia.jpg" alt="">
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