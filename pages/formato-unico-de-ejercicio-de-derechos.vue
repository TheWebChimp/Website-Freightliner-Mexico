<template>
	<div>
		<div class="block block-terminos">
			<div class="inner">
				<div class="text-center">
					<h2 class="block-title">Formato Único de Ejercicio de Derechos</h2>
				</div>

				<div class="formato">
					<p>En caso de que no desee que sus datos personales sean tratados para alguna o todas las finalidades adicionales, usted nos puede comunicar lo anterior por correo haciendo uso de sus derechos ARCO junto con la solicitud que para ello ponemos a su disposición en esta página.</p>
					<p><a href="/solicitud-de-derechos-arco-dvcm-2019.docx" class="button button-primary button-large">Descargar Formato</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export default {
		name: 'Términos Legales',
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

		.formato {

			text-align: center;

			p {

				font-size: 1.5rem;
				margin-bottom: @margin-default;
			}
		}
	}
</style>