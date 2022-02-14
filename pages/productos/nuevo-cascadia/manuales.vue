<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<h2 class="block-title">Manuales y Fichas</h2>
					<div class="row">

						<div class="col col-sm-4" v-for="ficha in fichas">
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
					title: 'Ficha Técnica Nueva Transmión DT12 (2021)',
					file: '2021_FICHA.pdf'
				},
				{
					title: 'Ficha Técnica Transmisión DT12',
					file: 'DT12-4-MARZO.pdf'
				},
				{
					title: 'Ficha Técnica Motor DD16',
					file: 'ficha-tecnicadd16-mayo13.pdf'
				},
				{
					title: 'Ficha Técnica Motor DD15',
					file: 'DD15_FT_1_V5_C.pdf'
				},
				{
					title: 'Ficha Técnica Motor DD13',
					file: 'Ficha-DD13.pdf'
				},
				{
					title: 'Ficha Técnica Cascadia',
					file: 'flfichatecnica-newcascadia-8abril.pdf'
				},
				{
					title: 'Tren Motriz Detroit Powertrain i',
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

</style>