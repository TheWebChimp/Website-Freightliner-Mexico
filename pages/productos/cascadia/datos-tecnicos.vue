<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Datos Técnicos</h2>
							<div class="the-content">
								<p>Freightliner cuenta con cientos de opciones para configurar un camión de acuerdo con las necesidades del transportista y hacer así un traje a la medida.</p>
								<p>Peso bruto combinado: hasta 80 toneladas de acuerdo con la NOM-012 de pesos y dimensiones; otras especificaciones disponibles</p>

								<h3>Motor</h3>
								<ul class="list">
									<li>DD15 Euro IV de 4 opciones de potencia y torque</li>
									<li>Cummins ISX (Opcional)</li>
									<li>Ventilador de velocidad variable exclusivo para DD15.</li>
									<li>Diferentes alternadores disponibles.</li>
									<li>4 baterías de libre mantenimiento en diferentes capacidades.</li>
									<li>Depósitos transparentes de fluidos que permiten revisiones instantáneas.</li>
									<li>Válvula cebadora manual</li>
									<li>Doble filtro de combustible</li>
									<li>Motor de arranque con protección térmica.</li>
									<li>Freno de motor Jacobs integrado</li>
									<li>Escape individual configuración horizontal o vertical.</li>
								</ul>

								<h3>Embrague</h3>
								<p>Eaton Advantage 15-1 / 2" autoajustable.</p>

								<h3>Transmisión</h3>
								<ul class="list">
									<li>Eaton Fuller RTL016918B de 18 velocidades de 1650 lb-ft de capacidad. Otras transmisiones disponibles</li>
									<li>Enfriador de aceite de transmisión (opcional).</li>
									<li>Soporte trasero de hoja para transmisión (Opcional).</li>
								</ul>

								<h3>Ejes y suspensión</h3>
								<ul class="list">
									<li>Eje delantero: Propietario Modelo AF-12.0-3 de 12,000 lb (5,443 Kg) de capacidad. Opcional: Meritor o Hendrickson Steertek de diferentes capacidades</li>
									<li>Suspensión delantera: Freightliner, tipo Taperleaf de 12,000 lb (5,443 Kg) de capacidad. Opcional: Neumática Airliner de 12,000 lb (5,443 Kg); otras capacidades disponibles.</li>
									<li>Eje trasero: Meritor RT-46-160 46,000 lb (20,865 Kg)</li>
									<li>Paso diferencial configurable</li>
									<li>Suspensión trasera: Freightliner neumática, Airliner de 46,000 lb (20,865 Kg) de capacidad. Opcional: Neumática Hendrickson PRIMAAX de 46,000 lb (20,865 Kg) de capacidad; otras capacidades disponibles.</li>
									<li>Frenos delanteros: Meritor 15"x 4" Q+.</li>
									<li>Frenos traseros: Meritor 16.5"x 7" Q+.</li>
									<li>Frenos ABS: Wabco 4S / 4M (6S / 6M opcional).</li>
									<li>Secador de aire BW AD-IS (DRM).</li>
									<li>Válvulas de drenaje Petcock.</li>
									<li>Dirección: TRW THP-60.</li>
									<li>Enfriador de dirección</li>
								</ul>

								<h3>Equipamiento de chasis</h3>
								<ul class="list">
									<li>Largueros tipo "C" 11/32" x 3-1 / 2" x 10-3 / 16" (8.73mm x 88.9mm x 258.8mm); otros largueros disponibles.</li>
									<li>Esfuerzo de Cedencia: 120KPSI.</li>
									<li>Distancia entre ejes configurable</li>
									<li>Volado trasero configurable</li>
									<li>Ganchos de arrastre removibles.</li>
								</ul>

								<h3>Quinta Rueda</h3>
								<p>Holland Estacionaria FW35 con montaje de placa acanalada; otras quintas ruedas disponibles.</p>

								<h3>Combustible</h3>
								<ul class="list">
									<li>Tanque de combustible: 2 tanques cilíndricos de 25" de diámetro con capacidad combinada de 290 Galones (140 l + 150 D).</li>
									<li>Separador de agua / combustible con luz indicadora.</li>
									<li>Sistema de Combustible Equiflo para balance de combustible.</li>
								</ul>

								<h3>LLantas</h3>
								<ul class="list">
									<li>Llantas Delanteras: Michelin XZA3, 11R x 24.5 de 14 capas; otras especificaciones y marcas disponibles.</li>
									<li>Llantas Traseras: Michelin XDA5, 11R x 24.5 de 14 capas; otras especificaciones y marcas disponibles.</li>
								</ul>

							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/nuevo-cascadia/cascadia-nuevo.png" alt="">
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

	.block-producto {

		padding: @margin-double 0;
	}


</style>