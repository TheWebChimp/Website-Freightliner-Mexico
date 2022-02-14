<template>
	<div>
		<div class="block block-terminos">
			<div class="inner">
				<h2 class="block-title">Aviso de Privacidad</h2>

				<div class="the-content">
					<h3>Identidad y domicilio del responsable.</h3>
					<p>Los datos personales que usted nos proporcione serán tratados por Daimler Vehículos Comerciales México S. de R.L. de C.V. (en lo sucesivo, “Daimler”), con domicilio en Avenida Santa Fe, número 428, Torre 3, Piso 7, Colonia Santa Fe Cuajimalpa, Alcaldía Cuajimalpa de Morelos, Ciudad de México. Código Postal 05348.</p>

					<h3>Datos personales que se recaban.</h3>
					<p>Daimler para cumplir con las finalidades señaladas en el presente Aviso recabará y tratará datos personales de identificación, datos personales laborales, datos personales académicos, datos personales de contacto y datos personales patrimoniales y/o financieros. Daimler no recabará ni tratará datos personales sensibles.</p>

					<h3>Finalidades primarias del tratamiento.</h3>
					<p>Los datos personales que nos ha proporcionado serán utilizados para las siguientes actividades primarias y necesarias:</p>

					<ul class="list">
						<li>Verificar y confirmar su identidad;</li>
						<li>Contactarle y ofrecerle nuestros servicios;</li>
						<li>Identificarle como cliente de Daimler;</li>
						<li>Servicios de extensión de garantía;</li>
						<li>Servicios de mantenimiento;</li>
						<li>Prestación de Servicios de Información y Asistencia;</li>
						<li>Reposición de llaves electrónicas;</li>
						<li>Realización de estudios de mercado;</li>
						<li>Atención sus solicitudes, quejas, dudas y/o comentarios relacionados con nuestros servicios.;</li>
						<li>Realización de encuestas de satisfacción;</li>
						<li>Cálculo de incentivos en caso de que usted sea acreedor a los mismos;</li>
						<li>Realizar reporte de robo, en el caso de que sea necesario;</li>
						<li>En su caso cumplimiento de la obligación legal de suministrar datos a la autoridad para integrar el REPUVE;</li>
						<li>Registrar su participación en demostraciones de vehículos;</li>
						<li>Realización de concursos y eventos promocionales;</li>
						<li>Envío de revistas y material promocional;</li>
						<li>Las demás finalidades que resulten necesarias para la prestación de los servicios por usted requeridos.</li>
					</ul>

					<h3>Finalidades secundarias.</h3>
					<p>De manera adicional, si usted no se opone, Daimler utilizará su información personal para enviarle información promocional y publicidad relacionada con nuestros productos y servicios, así como para la aplicación de encuestas y evaluaciones sobre nuestros sitios web y/o uso de nuestros productos y servicios.</p>
					<p>En caso de que no desee que sus datos personales sean tratados para alguna o todas las finalidades adicionales, usted nos puede comunicar lo anterior al correo <a href="mailto:proteccion_datos@daimler.com">proteccion_datos@daimler.com</a>.</p>
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