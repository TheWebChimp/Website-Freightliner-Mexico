<template>
	<div>
		<div class="block block-terminos">
			<div class="inner">
				<h2 class="block-title">Uso de Cookies</h2>

				<div class="the-content">
					<h3>Uso de cookies y/o web beacons.</h3>
					<p>En Daimler utilizamos cookies y/o web beacons para facilitar el uso de nuestras páginas web y adaptar su contenido para que te resulte más útil. Ninguna información que recopilamos te identifica personalmente. Al navegar por esta página, aceptas el uso de cookies.</p>
					<h3>Desactivación de cookies.</h3>
					<p>El usuario puede decidir si mantiene o no activadas las cookies en su ordenador. El sitio funciona de forma óptima con todas las cookies activadas. Los ajustes de cookies pueden controlarse y modificarse desde la sección de preferencias de su navegador de Internet.</p>
					<p>Seleccione en la lista de abajo su navegador actual para obtener información sobre cómo modificar la configuración de cookies.</p>
					<h4>Chrome</h4>
					<p><a href="https://support.google.com/chrome/bin/answer.py?hl=es&amp;hlrm=en-GB&amp;p=cpn_cookies&amp;answer=95647" target="_blank">https://support.google.com/chrome/bin/answer.py?hl=es&amp;hlrm=en-GB&amp;p=cpn_cookies&amp;answer=95647 </a></p>
					<h4>Firefox</h4>
					<p><a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank">http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we </a></p>
					<h4>Internet Explorer</h4>
					<p><a href="http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies" target="_blank">http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies </a></p>
					<h4>Opera (ingles)</h4>
					<p><a href="http://www.opera.com/help/tutorials/security/" target="_blank">http://www.opera.com/help/tutorials/security/</a></p>
					<h4>Safari</h4>
					<p><a href="http://www.apple.com/mx/support/safari/" target="_blank">http://www.apple.com/mx/support/safari/</a></p>
					<p>Si el usuario desactiva las cookies, algunas de las características del sitio web pueden quedar inhabilitadas. No obstante, incluso con todas las cookies desactivadas, el navegador web recoge una pequeña cantidad de información. Esta información es precisa para el funcionamiento básico de nuestro sitio web.</p>
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
	}
</style>