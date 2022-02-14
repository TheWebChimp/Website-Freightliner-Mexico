<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<div class="title-wrapper">
								<h2 class="block-title">Camión 114SD</h2>
							</div>
							<div class="the-content">
								<p>El camión 114SD de Freightliner está diseñado y construido para satisfacer las necesidades más demandantes en aplicaciones vocacionales y de uso severo.</p>
								<p>Cuenta con opciones de motorización Detroit DD13 o Cummins ISL, ambos Euro V que ofrecen potencias desde 335hp 1106 lb-ft hasta 505 hp 1845 lb-ft. También se ofrece en niveles de emisión EPA 10 con opciones de motorización Detroit DD8 y DD13 que van desde 330 hp 1000 lb-ft hasta 505 hp 1850 lb-ft. La gama de motores disponibles cuenta con la tecnología más avanzada, permitiendo máximo rendimiento al tiempo que cuida el medio ambiente.</p>
								<p>Las configuraciones del camión 114SD están optimizadas para ofrecer un tren motriz balanceado y un bastidor versátil con opciones de componentes de mayor capacidad para asegurar el mejor desempeño y mayor productividad en los trabajos más rudos.</p>
								<p>El diseño de chasis simplifica el ensamble para los fabricantes de equipos y carrocerías. El Sistema eléctrico SmartPlex™ de Freightliner ofrece una flexibilidad sin igual al configurar un camión para adaptarse a las instalaciones específicas del chasis y carrocería. El Freightliner 114SD además ofrece una increíble combinación de durabilidad y comodidad.</p>
								<p>Ha sido sometido a rigurosas pruebas para garantizar rendimiento y confiabilidad en las situaciones más exigentes. Los interiores de uso pesado están diseñados para mantener a los operadores seguros y productivos. En pocas palabras, el camión 114SD establece un nuevo estándar de ingeniería en rendimiento y eficiencia.</p>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/114sd/imagen-interior-114.png" alt="">
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

		.the-content {
		}
	}


</style>