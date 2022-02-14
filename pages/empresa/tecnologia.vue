<template>
	<div>
		<div class="block block-instalaciones">
			<div class="inner">
				<div class="mx-default">
					<h2 class="block-title">Tecnología</h2>

					<div class="the-content">
						<h2>EMPRESA VERDE</h2>

						<h3>Nuestras metas</h3>

						<ul class="list">
							<li>Disminuir y controlar la generación de residuos y facilitar su reutilización y reciclaje.</li>
							<li>Ahorrar en el consumo de agua, materias primas y energéticos.</li>
							<li>Mejorar el control de los procesos y aumentar la eficiencia.</li>
							<li>Cumplir con la legislación ambiental vigente.</li>
							<li>Controlar los riesgos y disminuir los índices de accidentes.</li>
						</ul>


						<h3>Nuestras acciones</h3>

						<h4>En Planta Santiago</h4>

						<ul class="list">
							<li>97% de los residuos se reciclan efectivamente.</li>
							<li>17.5% de disminución en consumo de solvente limpio.</li>
							<li>97% de reducción en derrames por transporte de material, gracias a una sola central de distribución.</li>
							<li>Disminución de desperdicios de pintura y su entrega a plantas tratadoras.</li>
							<li>5% de reducción en la generación de residuos peligrosos (disminución del riesgo al personal).</li>
							<li>Ahorro diario de 100 mil litros de agua, por la planta de tratamiento biológico de aguas residuales.</li>
							<li>Cero descargas de agua contaminada a red municipal.</li>
						</ul>


						<h4>En CIDP San Luis Potosí</h4>

						<ul class="list">
							<li>En el Centro Internacional de Partes de San Luis Potosí, se están realizando esfuerzos significativos en materia ambiental, dentro de los que se encuentran:</li>
							<li>Reducción de consumo de energía eléctrica</li>
							<li>Cambio de luminarias fluorescentes por tecnología Led y solar</li>
							<li>Reducción de consumo de agua</li>
							<ul class="list">
								<li>Instalación de fluxómetros ecológicos</li>
								<li>Instalación de llaves con sensor</li>
							</ul>
							<li>Aprovechamiento efectivo de recursos</li>
							<ul class="list">
								<li>Trituradora de madera para elaboración de compostaje</li>
								<li>Trituradora de papel para reuso de papel en proceso de embalaje</li>
								<li>Máquina de reciclaje de papel triturado, para embalaje de partes</li>
							</ul>
						</ul>

						<p>Éste esfuerzo es parte de un proyecto a cuatro años, iniciado en 2011, en el que se busca la autosustentabilidad de la empresa mediante la reducción de consumos, el uso de energías alternas y de los desperdicios.</p>
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

	.block {

		padding: @margin-double 0;
	}

</style>