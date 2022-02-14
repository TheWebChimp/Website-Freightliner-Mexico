<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<div class="title-wrapper">
								<h2 class="block-title">Cascadia</h2>
							</div>
							<div class="the-content">
								<p>El Cascadia de Freightliner es el tractocamión más revolucionario de la industria y es resultado de la mayor inversión en horas de investigación y desarrollo de Freightliner.</p>
								<p>Rendimiento, seguridad, confiabilidad, uptime, conectividad y comodidad, son características clave del Cascadia.</p>
								<p>Al crear este camión, nuestro objetivo es bajar el costo total de operación. Como resultado, el Cascadia es el tractocamión con mayor tecnología, el más rentable, el más seguro y el más cómodo en el mercado mexicano.</p>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 hide-mobile first-xs last-sm">
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