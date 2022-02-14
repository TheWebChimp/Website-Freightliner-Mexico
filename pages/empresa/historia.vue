<template>
	<div>
		<div class="block block-historia">
			<div class="inner text-center">
				<h2 class="block-title">Historia</h2>
			</div>

			<div class="history-wrapper">
				<slick class="splash-carrousel" v-bind="slickSettings">
					<article class="history-fact" :class="{ 'has-dot': !!fact.image }" v-for="fact in historia">

						<template v-if="fact.image">
							<img :src="require(`/assets/images/template/empresa/${ fact.image }`)" alt="Historia de Freightliner">
							<div class="fact-content" v-html="fact.html" />
						</template>

					</article>

					<template #prevArrow="arrowOption">
						<a><i class="fa fa-fw fa-angle-left" /></a>
					</template>

					<template #nextArrow="arrowOption">
						<a><i class="fa fa-fw fa-angle-right" /></a>
					</template>
				</slick>
			</div>
		</div>
	</div>
</template>

<script>

	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import VueSlickCarousel from 'vue-slick-carousel';
	import 'vue-slick-carousel/dist/vue-slick-carousel.css';

	export default {
		name: 'Historia',
		components: { 'slick': VueSlickCarousel },
		layout: 'site',
		data: () => ({
			slickSettings: {
				slidesToShow: 3,
				centerMode: true,
				slidesToScroll: 1,
				infinite: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1
						}
					}
				]
			},
			historia: [
				{
					image: 'historia1.png',
					html: '<p>Freightliner, la Compañía que hace las cosas bien. “Si haces las cosas suficientemente bien, obtendrás ganancias. Pero tendrás que hacer las cosas bien a la primera vez.” Leland James (1892 – 1964) Fundador de Freightliner Corporation.</p>'
				},
				{
					image: 'historia2.png',
					html: '<p>Este “Fageol”, el primer camión con cabina sobre motor (COE/Cab-Over-Engine) diseñado en los talleres de Consolidated Freightways, en Pórtland, Oregón, fue el predecesor del Freightliner COE.</p>'
				},
				{
					image: 'historia3.png',
					html: '<p>A finales de los años 30’s, los camiones convencionales reacondicionados por Consolidated en Pórtland, se diseñaban especialmente para operar en camiones de terracería y rutas difíciles del lejano Oeste. Las modificaciones que se les hacía contemplaban recientes desarrollos en componentes más ligeros.</p>'
				},
				{
					image: 'historia4.png',
					html: '<p>Trabajadores de Freightways construían tanto camiones como trailers de peso ligero en el taller anexo a las instalaciones de Salt Lake City, hacia 1941.</p>'
				},
				{
					image: 'historia5.png',
					html: '<p>Precursor del tractocamión convencional Freightliner, modificado en 1941 por Consolidated Freightways, este tractocamión no contaba con emblema por lo que se le apodó “Convencional sin nombre”.</p>'
				},
				{
					image: 'historia6.png',
					html: '<p>Hacia 1940, se rotula un camión con las palabras Freight-Liner, refiriéndose a la combinación del camión con caja. Para el verano de 1941, aparece por primera vez la placa de Freightliner. En agosto de 1942, Freightways Manufacturing Company Inc. cambia su nombre a Freightliner Corporation, teniendo como fundador y Presidente a Leland James.</p>'
				},
				{
					image: 'historia7.png',
					html: '<p>1942 – “El primer vehículo de Freightliner que se comercializo con cabina de aluminio fue el “Shovelnose” o Modelo 600.”</p>'
				},
				{
					image: 'historia8.png',
					html: '<p>1947 – La primera planta Freightliner abre sus puertas en Portland, Oregón</p>'
				},
				{
					image: 'historia9.png',
					html: '<p>Planta de la calle N.W. Quimby, en 1949:<br>a) Tom Taylor, Gerente General y Ken Self, Gerente de Producción, supervisando el ensamble de un camión Freightliner.</p>'
				},
				{
					image: 'historia10.png',
					html: '<p>Planta de la calle N.W. Quimby, en 1949:<br>b) Área de chasis. Dos caballeros en vestimenta blanca: Norm Chef ( a la izquierda ), quien se convertiría en Vicepresidente de Ingeniería, y Glen Watkins ( a la derecha ), posteriormente Vicepresidente de Ventas y Servicio de Freightliner.</p>'
				},
				{
					image: 'historia11.png',
					html: '<p>La primera cabina totalmente de aluminio, desarrollada en 1948, fue adquirida por Vince Graziano, cuya empresa prestaba servicio a Consolidated Freightways. Esta transacción representó la primera venta realizada por Freightliner a un autotransportista por fuera del negocio de Consolidated Freightways.</p>'
				},
				{
					image: 'historia12.png',
					html: '<p>En 1950, Hyster Company fue la primera compañía transportista privada en comprar un camión Freightliner. El camión incluía una serie de cambios en su diseño y tradicionalmente se le ha considerado el N° 1, tanto por Freightliner como por Hyster. Acumuló más de 4 millones de millas antes de que Freightliner lo adquiriera de su diseño, en 1976, y lo restaurara a sus condiciones originales. Actualmente se le exhibe en el museo Smithsonian. Ray Turpen (a la derecha), fue uno de sus operadores originales.</p>'
				},
				{
					image: 'historia13.png',
					html: '<p>En 1951 White Motor Corporation firma un acuerdo con Freightliner mediante el cual éste último fabricaría camiones y tractocamiones bajo el emblema White – Freightliner. En la fotografía aparecen (a la izquierda) Robert F. Black, Presidente de White Motor Corporation y (a la derecha) Ken Self, Director de Producción de Freightliner.</p>'
				},
				{
					image: 'historia14.png',
					html: '<p>La pipa de Catlay & Tanzola, construida en 1951, fue el primer vehículo White – Freightliner diseñado para el transporte de petróleo.</p>'
				},
				{
					image: 'historia15.png',
					html: '<p>En mayo de 1952, Freightliner muda su planta de producción a Swan Island, en Pórtland, la cual abarcaba un área de cinco acres, en donde se fabricaban los modelos WF-42, WF-64 y WF-4864, este último siendo el primer camión con frente plano “chato”.</p>'
				},
				{
					image: 'historia16.png',
					html: '<p>En 1953, White – Freightliner introduce la primera cabina con dormitorio sobre el techo, lo cual permitía 28 pies de espacio de carga útil en un camión con una longitud total de 52 pies (incluyendo la caja).</p>'
				},
				{
					image: 'historia17.png',
					html: '<p>En 1958 se fabrica el primer camión con cabina sobre motor (COE) modelo 8164T con 90° de abatimiento de la cabina, reduciendo así trabajos de mantenimiento de horas a minutos.</p>'
				},
				{
					image: 'historia18.png',
					html: '<p>A mediados de los 60’s, Freightliner – White diseñaron vehículos de media cabina principalmente para aplicaciones de revolvedora. Freightliner abrió una fábrica en Indianápolis para construirlos.</p>'
				},
				{
					image: 'historia19.png',
					html: '<p>1969 – Se inauguró la planta de Santiago Tianguistenco en México la cual actualmente produce camiones y tractocamiones Freightliner.</p>'
				},
				{
					image: 'historia20.png',
					html: '<p>El 9 de octubre de 1974, en una exhibición especial, Freightliner realiza la entrega de su tractocamión N° 100,000 desde la fundación de la compañía en 1942. El comprador, R.R. “Red” Baumgartner, de Inglewood CO, fue a Pórtland para participar en la entrega de este modelo COE que portaba un imaginativo y conmemorativo diseño en la pintura de la cabina.</p>'
				},
				{
					image: 'historia21.png',
					html: '<p>En 1975 Freightliner toma la decisión de terminar el contrato con White Motor Corporation, estableciendo su propia red de concesionarios al año siguiente. El 25 de febrero de 1976 Freightliner firma el contrato con su primer concesionario, Glasofer Motors Co, ubicado en Elizabeth, NJ.</p>'
				},
				{
					image: 'historia22.png',
					html: '<p>En abril de 1976, después de 25 años, Freightliner rediseña su emblema. En la foto (al centro) se encuentra Ken Self mostrando la placa, (a la izquierda) Hill Critzer, Presidente de la compañía y (a la derecha) Harry Joy, Vicepresidente de Ventas.</p>'
				},
				{
					image: 'historia23.png',
					html: '<p>En marzo de 1977, Freightliner participa por primera vez en la exhibición más grande de camiones y tractocamiones de E.E.U.U., denominada Mid-America Trucking Show. Participa con su modelo COE y su tractocamión convencional.</p>'
				},
				{
					image: 'historia24.png',
					html: '<p>El 17 de mayo de 1979, se produce el primer vehículo Freightliner en la nueva planta de Mt. Holly, NC. Ejecutivos de Freightliner (de la izquierda a la derecha): Hill Critzer, Presidente; Joe Hart, Vicepresidente de Manufactura; Martin Snowey, Director de Planta y Jim O’Connell, Gerente General de la planta.</p>'
				},
				{
					image: 'historia25.png',
					html: '<p>A principios de 1991, Freightliner inicia su expansión de producto a través de Mercedes-Benz México, arrancando con la producción del tractocamión FLD 120 con cabina dormitorio de 48″ y la exportación del FLD 112 SD.</p>'
				},
				{
					image: 'historia26.png',
					html: '<p>En marzo de 1991, Freightliner Corporation lanza al mercado su nueva línea de camiones de rango medio Business Class, con lo cual inicia su participación en los segmentos de clases 6 a 8.</p>'
				},
				{
					image: 'historia27.png',
					html: '<p>En 1995, Freightliner adquirió su primera compañía de camiones no tradicionales, American LaFrance, fabricante de vehículos de bomberos y emergencia.</p>'
				},
				{
					image: 'historia28.png',
					html: '<p>La nueva generación de tractocamiones Century Class revoluciona el mercado norteamericano, por su innovación tecnológica y sistemas de seguridad, en el año de 1995.</p>'
				},
				{
					image: 'historia29.png',
					html: '<p>Freightliner LLC adquiere en 1997 las licencias tecnológicas y el herramental de los camiones Ford, y constituye su filial Sterling Trucks, para fabricar camiones y tractocamiones, principalmente para atender el mercado de aplicaciones especiales.</p>'
				},
				{
					image: 'historia30.png',
					html: '<p>Un nuevo y moderno Centro de Distribución de Partes se pone en funcionamiento en la Cd. de San Luis Potosí, en el año 1997.</p>'
				},
				{
					image: 'historia31.png',
					html: '<p>Un revolucionario modelo de tractocamión Argosy marca el liderazgo en tecnología de punta dentro de los modelos cabina sobre motor (COE), en 1998.</p>'
				},
				{
					image: 'historia32.png',
					html: '<p>Freightliner adopta los motores Mercedes-Benz MBE900 dentro de sus camiones de rango medio, en 1999.</p>'
				},
				{
					image: 'historia33.png',
					html: '<p>Se lanza al mercado un nuevo tractocamión denominado Columbia, que lleva el nombre del río cercano a la planta de Pórtland, hacia el año 1999.</p>'
				},
				{
					image: 'historia34.png',
					html: '<p>Freightliner LLC renueva su familia de camiones de rango medio con la gama de modelo M2.</p>'
				},
				{
					image: 'historia35.png',
					html: '<p>En el año 2000 Freightliner LLC adquiere a la empresa de camiones Western Star; esta compañía fabrica camiones vocacionales y para uso extra pesado además de tractocamiones.</p>'
				},
				{
					image: 'historia36.png',
					html: '<p>2003 – Se lanzó la línea de camiones M2 en México.</p>'
				},
				{
					image: 'historia37.png',
					html: '<p>En el año 2004 Freightliner LLC abre un avanzado túnel de viento en Pórtland, Oregón.</p>'
				},
				{
					image: 'historia38.png',
					html: '<p>En 2009, Freightliner inaugura en Saltillo, Coahuila, su segunda planta de fabricación de vehículos comerciales en México.</p>'
				},
				{
					image: 'historia39.png',
					html: '<p>2010 – Se realizo en lanzamiento del tractocamión Cascadia en México, cuyo nombre hace referencia a una cordillera montañosa en USA. El Cascadia es tan imponente como una gran montaña.</p>'
				},
				{
					image: 'historia40.png',
					html: '<p>En el verano de 1991, Freightliner empieza a exportar camiones a México y Sudamérica. En la fotografía, el primer vehículo de exportación destinado a Chile.</p>'
				},
				{
					image: '',
					html: ''
				}
			]


		}),
		methods: {}
	}
</script>

<style scoped lang="less">


	/deep/ .slick-track {

		display: flex !important;
	}

	/deep/ .slick-slide {

		display: flex !important;
		height: inherit !important;

		& > div {

			height: inherit !important;
		}
	}

	.slick {

		z-index: 10;
	}

	.slick-arrow {

		width: 40px;
		height: 40px;
		color: white;
		cursor: pointer;
		text-align: center;
		line-height: 40px;
		background: fade(black, 50%);
		border-radius: @radius-round;
		font-size: 1.5rem;
		position: absolute;
		top: 50%;
		margin-top: -40/2px;
		z-index: 100;

		@media @md-n-below {

			top: 0;
			margin-top: 0;
		}

		&.slick-prev { left: @margin-double; }
		&.slick-next { right: @margin-double; }
	}

	.block {

		padding: @margin-double 0;

		.history-wrapper {

			&:after {

				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				background: @brand-3;
				bottom: 5px;
				z-index: -1;
			}
		}

		.history-fact {

			text-align: center;
			display: flex !important;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-bottom: @margin-double;
			min-height: 100%;
			z-index: 10;

			&.has-dot:after {

				width: 12px;
				height: 12px;
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				margin-left: -6px;
				background: @brand-2;
				border-radius: @-radius-round;
			}

			img {

				display: block;
				margin: 0 auto;
				margin-bottom: @margin-default;
				width: 150px;
				border-radius: @-radius-round;
				height: 150px;
				object-fit: contain;
			}

			.fact-content {

				padding: 0 @margin-default;
			}
		}
	}

</style>