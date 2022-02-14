<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-7">
							<h2 class="block-title">Cabina</h2>
							<div class="the-content">
								<h3>Cabina Exterior</h3>
								<p>Moderna cabina aerodinámica de gran visibilidad</p>
								<ul class="list">
									<li>Hecha de alumino</li>
									<li>Tamaño de cabina disponible (BBCs): 106 pulgadas</li>
									<li>Puertas reforzadas</li>
									<li>Parabrisas aerodinámico de gran tamaño para mejorar la visibilidad</li>
									<li>Gran espacio interior</li>
									<li>Diseño aerodinámico de cabina para reducir el consumo de diesel</li>
								</ul>

								<h3>Cabina Interior</h3>
								<ul class="list">
									<li>Las diferentes configuraciones de depósitos superiores para almacenaje mantienen la información a la mano.</li>
									<li>Las luces interiores alumbran la cabina sin deslumbrar al conductor.</li>
									<li>Paquete de lectura de mapas.</li>
									<li>Luz trasera de techo(opcional).</li>
									<li>El aire acondicionado mantiene cómodo al operador, aumentando su productividad.</li>
									<li>Ventilador de 9 velocidades que proporciona flujo mejorado de aire, su motor es silencioso sin escobillas ni carbones. Además es completamente electrónico, por lo que brinda temperaturas más consistentes.</li>
									<li>Tablero iluminado por LEDs por lo que evita deslumbramiento para el operador.</li>
								</ul>

								<h3>Puertas y Espejos</h3>
								<p>Puertas rediseñadas que brindan accesos más cómodos</p>
								<ul class="list">
									<li>Altas, anchas y fuertes.</li>
									<li>Herméticamente selladas lo cual aisla la mugre, humedad y reduce el ruido interior.</li>
								</ul>

								<h3>Manijas que facilitan su apertura</h3>
								<ul class="list">
									<li>Moderno y ergonómico diseño.</li>
									<li>De gran tamaño.</li>
									<li>Fácil de manejar con y sin guantes.</li>
									<li>Eficiente mecanismo.</li>
									<li>Sólida operación.</li>
								</ul>

								<h3>Espejos retrovisores</h3>
								<ul class="list">
									<li>Su diseño permite un amplio rango de visibilidad.</li>
									<li>Manual o eléctrico.</li>
									<li>Negros o cromados.</li>
									<li>Principal térmico (opcional).</li>
									<li>Espejo convexo (opcional).</li>
								</ul>

								<h3>Interior</h3>
								<ul class="list">
									<li>Tablero Ergonómico con los controles al alcance del conductor.</li>
									<li>Interruptores auxiliares.</li>
									<li>Compartimientos para guardar objetos .</li>
									<li>Portavasos.</li>
									<li>Salidas redondeadas de aire.</li>
									<li>Muestra toda la información necesaria de manera fácil e inmediata.</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-5 last-sm first-xs">
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