<template>
	<div>
		<div class="block block-distribuidores">
			<div class="inner">
				<div class="m-default">
					<h2 class="block-title">Distribuidores</h2>

					<div class="controls">
						<div class="form-group">
							<select v-model="state" class="input-block form-control">
								<option value="">Todos los estados</option>
								<option value="aguascalientes">Aguascalientes</option>
								<option value="baja-california">Baja California</option>
								<option value="baja-california-sur">Baja California Sur</option>
								<option value="campeche">Campeche</option>
								<option value="chiapas">Chiapas</option>
								<option value="chihuahua">Chihuahua</option>
								<option value="coahuila">Coahuila</option>
								<option value="colima">Colima</option>
								<option value="durango">Durango</option>
								<option value="estado-de-mexico">Estado de México</option>
								<option value="guanajuato">Guanajuato</option>
								<option value="jalisco">Jalisco</option>
								<option value="mexico">Mexico</option>
								<option value="michoacan">Michoacán</option>
								<option value="morelos">Morelos</option>
								<option value="nayarit">Nayarit</option>
								<option value="nuevo-leon">Nuevo León</option>
								<option value="oaxaca">Oaxaca</option>
								<option value="puebla">Puebla</option>
								<option value="queretaro">Querétaro</option>
								<option value="quintana-roo">Quintana Roo</option>
								<option value="san-luis-potosi">San Luis Potosí</option>
								<option value="sinaloa">Sinaloa</option>
								<option value="sonora">Sonora</option>
								<option value="tabasco">Tabasco</option>
								<option value="tamaulipas">Tamaulipas</option>
								<option value="tlaxcala">Tlaxcala</option>
								<option value="veracruz">Veracruz</option>
								<option value="yucatan">Yucatán</option>
								<option value="zacatecas">Zacatecas</option>
							</select>
						</div>
					</div>

					<div class="block-wrapper">
						<aside>
							<article
								v-for="distribuidor in distribuidores"
								class="distribuidor"
								v-if="!state || distribuidor.category == state"
							>
								<h2>{{ distribuidor.title }}</h2>
								<p class="mb-default" v-html="distribuidor.content.replace(/(?:\r\n|\r|\n)/g, '<br>')"></p>

								<p><a :href="`https://maps.google.com/?q=${ distribuidor.lat || 0 },${ distribuidor.lng || 0 }`" target="_blank" class="button button-primary button-block button-small"><i class="fa fa-fw fa-map-marker" /> Abrir en Google Maps</a></p>
							</article>

						</aside>

						<div class="map-wrapper">
							<g-map
								ref="distMap"
								:center="{ lat: 19.45215674715439, lng: -99.15154244558782 }"
								:zoom="6"
							>
								<g-map-marker
									v-for="(distribuidor, index) in distribuidores"
									:key="`dist${ index }`"
									:position="{lat: distribuidor.lat || 0, lng: distribuidor.lng || 0}"
									v-if="!state || distribuidor.category == state"
								>
									<g-map-info-window :options="{ maxWidth: 200 }">
										<h2>{{ distribuidor.title }}</h2>
										<p class="mb-default" v-html="distribuidor.content.replace(/(?:\r\n|\r|\n)/g, '<br>')"></p>

										<p><a :href="`https://maps.google.com/?q=${ distribuidor.lat || 0 },${ distribuidor.lng || 0 }`" target="_blank" class="button button-primary button-block button-small"><i class="fa fa-fw fa-map-marker" /> Abrir en Google Maps</a></p>
									</g-map-info-window>
								</g-map-marker>
							</g-map>
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
	import distribuidores from '~/assets/distribuidores.json';

	export default {
		name: 'Empresa',
		layout: 'site',
		data: () => ({
			distribuidores,
			state: ''
		}),
		mounted() {
			this.checkForMarkers();
		},
		methods: {
			checkForMarkers() {
			},
		}
	}
</script>

<style scoped lang="less">

	.block-wrapper {

		display: flex;

		@media @md-n-below {

			flex-direction: column-reverse;
		}
	}

	aside {

		background: lighten(@brand-3, 25%);
		width: 350px;
		height: 500px;
		overflow-y: scroll;
		font-size: 0.8rem;

		.distribuidor {

			border-bottom: 1px solid @brand-3;
			padding: @margin-default;

			h2 {

				font-size: 1.2rem;
				margin-bottom: @margin-half;
			}

			p {

				text-overflow: ellipsis;
			}
		}
	}

	.map-wrapper {

		flex: 1 0 auto;
		height: 500px;

		@media @md-n-below {

			height: 0;
			padding-top: 100%;
		}

		& > div,
		.GMap__Wrapper {

			.overlay-element;
			height: 100% !important;
		}
	}

	/deep/ .GMap__Wrapper {

		.overlay-element;
		height: 100% !important;
	}

</style>