<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<h2 class="block-title">Manuales y Fichas</h2>
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
					title: 'Ficha Técnica M2',
					file: 'Ficha-M2-Viernes19-1-1.pdf'
				},
				{
					title: 'Ficha Técnica DD5',
					file: 'FICHA_DD5-1.pdf'
				},
				{
					title: 'Ficha Técnica DD8',
					file: 'FICHA-DD8-FIX3.pdf'
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