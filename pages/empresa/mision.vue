<template>
	<div>
		<div class="block block-mision">
			<div class="inner">
				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-6">
							<h2 class="block-title">Misión</h2>
							<div class="the-content mb-default">
								<p>Ser una empresa enfocada a resultados, al crecimiento y satisfacción de nuestros clientes.</p>
								<p>Ser y ofrecer una solución en transporte para nuestros clientes asegurando su confianza y lealtad.</p>
								<p>Ser la marca líder en el segmento de camiones y tractocamiones en México.</p>
								<p>Ser una empresa rentable para nuestros accionistas y concesionarios.</p>
								<p>Ser una empresa eficiente basada en la mejora continua.</p>
							</div>
						</div>

						<div class="col-xs-12 col-sm-6">
							<h2 class="block-title">Visión</h2>
							<div class="the-content mb-default">
								<p>Ser la marca número uno en el mercado de camiones y tractocamiones, en la producción y comercialización de productos de la más alta calidad en todos los segmentos.</p>
							</div>

							<h2 class="block-title">Valores</h2>

							<div class="row valores">
								<div class="col col-6">
									<p><i class="fa fa-fw fa-check" />Pasión</p>
								</div>
								<div class="col col-6">
									<p><i class="fa fa-fw fa-check" />Entrega</p>
								</div>
								<div class="col col-6">
									<p><i class="fa fa-fw fa-check" />Respeto</p>
								</div>
								<div class="col col-6">
									<p><i class="fa fa-fw fa-check" />Integridad</p>
								</div>
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
		name: 'Mision',
		layout: 'site',
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.block {

		padding: @margin-double 0;
	}

	.valores {

		p {

			font-size: 1.5rem;
			margin-bottom: @margin-default;
		}
	}

</style>