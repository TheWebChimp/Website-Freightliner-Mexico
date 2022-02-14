<template>
	<div>
		<div class="block block-producto">
			<div class="inner">
				<div class="mx-default">
					<h2 class="block-title">Dimensiones</h2>
					<div class="row">
						<div class="col-xs-12 col-sm-6">
							<div class="the-content">
								<p>Dimensiones, pesos y capacidades: M2 106 25K 4X2 Carga general</p>
								<table class="table table-360" width="100%">
									<thead class="gray-td">
										<tr>
											<th><div class="text-center">Dimensiones</div></th>
											<th><div class="text-center">Pulgadas/mm</div></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>a) Distancia entre ejes (WB)</td>
											<td>198 / 5,029</td>
										</tr>
										<tr>
											<td>b) Distancia cabina eje trasero (CA)</td>
											<td>129 / 3,277</td>
										</tr>
										<tr>
											<td>c) Volado trasero (AF)</td>
											<td>75 / 1900</td>
										</tr>
										<tr>
											<td>d) Volado delantero (BA)</td>
											<td>41 / 1,041</td>
										</tr>
										<tr>
											<td>e) Longitud total (OAL)</td>
											<td>314 / 7,976</td>
										</tr>
										<tr>
											<td>f) Distancia defensa a pared trasera de cabina (BBC)</td>
											<td>106 / 2,692</td>
										</tr>
										<tr>
											<td>g) Altura total (ATL)</td>
											<td>102.5 / 2,604</td>
										</tr>
										<tr>
											<td>h) Distancia atrás de cabina a final de chasis</td>
											<td>204 / 5,181</td>
										</tr>
										<tr>
											<td>i) Altura de chasis a techo cabina</td>
											<td>63.24 / 1,606</td>
										</tr>
									</tbody>
								</table>
								<table class="table table-360" width="100%">
									<thead class="gray-td">
										<tr>
											<td><div class="text-center">Pesos y capacidades</div></td>
											<td><div class="text-center">Lb/Kg</div></td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Peso vehicular</td>
											<td>9,319 / 4,227</td>
										</tr>
										<tr>
											<td>Peso bruto vehicular</td>
											<td>25,000 / 11,364</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/m2/plano-25k.png" alt="">
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