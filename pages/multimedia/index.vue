<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<h2 class="block-title">Catálogos</h2>
					<div class="row">

						<div class="col-xs-12 col-sm-4" v-for="ficha in fichas">
							<article class="ficha">
								<h4 class="ficha-title">{{ ficha.title }}</h4>
								<a download :href="`/fichas/${ ficha.file }`" class="button button-small button-primary ficha-link">Descargar PDF</a>
							</article>
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
		data: () => ({
			fichas: [
				{
					title: 'Catálogo de Productos',
					file: 'Catalogo-Daimler.pdf'
				},
				{
					title: 'Detroit DD15',
					file: 'DD15_FT_1_V5_C.pdf'
				},
				{
					title: 'Detroit Tren Motriz Powertrain i',
					file: 'Tren-Motriz-V6.pdf'
				}
			]
		}),
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

	.ficha {

		background: url('~@/assets/images/template/document.png') left top no-repeat;
		padding-left: 64px;
		min-height: 64px;
		padding-top: 6px;
		margin-bottom: @margin-default;

		.ficha-title {

			font-size: 1rem;
			font-weight: bold;
			margin-bottom: @margin-third;
		}
	}


</style>