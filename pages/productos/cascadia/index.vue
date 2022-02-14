<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Tractocamión Cascadia Clásico</h2>
							<div class="the-content">
								<p>Freightliner Cascadia Clásico da el mejor servicio al transportista mexicano.</p>
								<p>En su diseño se invirtieron más de 1,000,000 de horas-hombre de ingeniería, lo que garantiza un producto que sobrepasa las expectativas de servicio y durabilidad que los transportistas demandan. Más de 2,500 horas en el túnel de viento de Freightliner dieron como resultado la forma que mejor reduce la resistencia al avance, dando consigo una reducción en el consumo de combustible.</p>
								<p>Cuenta con una ligera cabina de aluminio estampado, lo que da rigidez y ligereza inigualables. Esta cabina cuenta con aislamiento térmico y acústico en todas las versiones. Al ser la más amplia del mercado, la comodidad en el camino está garantizada y gracias a su ergonomía, el operador siempre tendrá los controles del tractocamión a la vista y al alcance de sus brazos, dando mayor seguridad y menor estrés al operador.</p>
								<p>Freightliner Cascadia Clásico, es el tractocamión que ofrece más opciones de configuración en el mercado, lo cual garantiza que sea la especificación adecuada para su negocio; es el único en el mercado mexicano, que cuenta con el motor DD15, haciéndolo el tractocamión con mayor rendimiento de combustible.</p>
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

		.the-content {
		}
	}


</style>