<template>
	<div>
		<div class="block block-quienes">
			<div class="inner">
				<div class="mx-default">
					<h2 class="block-title">Quiénes Somos</h2>

					<div class="the-content">
						<p><strong>Somos Freightliner</strong>, el fabricante de camiones y tractocamiones más grande de Norteamérica, producimos y comercializamos en los segmentos de ligeros, medianos y pesados.</p>
						<p>Somos parte del grupo Daimler , en conjunto con otras marcas de automóviles, autobuses, vanes y servicios financieros que están presentes en los cinco continentes.</p>
						<p>En Freightliner ofrecemos componentes propios, como motores, transmisiones y ejes, que ningún otro fabricante brinda.</p>
						<p>Freightliner ensambla camiones y tractocamiones en dos plantas, ubicadas en: Santiago Tianguistenco, Estado de México y Saltillo, Coahuila. Además contamos con un Centro Internacional de Partes (CIDP) en San Luis Potosí, un patio de ventas de camiones seminuevos en el Edo de México y oficinas corporativas en el Distrito Federal.</p>
						<p>En Freightliner nos dedicamos con esfuerzo y pasión al diseño, calidad, seguridad y eficiencia de cada camión y tractocamión que producimos. Nuestra meta es estar muy cerca del cliente por lo que contamos con una red de concesionarios que ofrece más de 90 puntos de venta y postventa en la República Mexicana. Ellos se esfuerzan continuamente para proveer a nuestros clientes con unidades, refacciones y servicio de manera rápida, segura y confiable.</p>
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
		name: 'IndexPage',
		layout: 'site',
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.block-quienes {

		padding: @margin-double 0;
	}

</style>