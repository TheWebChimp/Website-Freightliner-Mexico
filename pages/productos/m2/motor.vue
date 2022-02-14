<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<h2 class="block-title">Motor</h2>
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<div class="the-content">
								<div class="table-wrapper">
									<table class="table table-360" width="100%">
										<tbody>
											<tr>
												<th><div class="text-center">Modelo</div></th>
												<td>DD5</td>
												<td>DD8</td>
												<td>MBE 924</td>
												<td>MBE 926</td>
											</tr>
											<tr>
												<th><div class="text-center">Tipo</div></th>
												<td colspan="4">4 tiempos, motor a diesel por inyección directa enfriado por agua</td>
											</tr>
											<tr>
												<th><div class="text-center">No. de cilindros</div></th>
												<td>4</td>
												<td>6</td>
												<td>4</td>
												<td>6</td>
											</tr>
											<tr>
												<th><div class="text-center">Desplazamiento</div></th>
												<td>5.1</td>
												<td>7.7</td>
												<td>4.8</td>
												<td>7.2</td>
											</tr>
											<tr>
												<th><div class="text-center">Nivel de emisiones</div></th>
												<td>EPA 10</td>
												<td>EPA 10</td>
												<td>Euro V</td>
												<td>Euro V</td>
											</tr>
											<tr>
												<th><div class="text-center">Potencia máxima</div></th>
												<td>240 Hp</td>
												<td>330 Hp</td>
												<td>214 Hp</td>
												<td>322 Hp</td>
											</tr>
											<tr>
												<th><div class="text-center">Torque máximo</div></th>
												<td>660 Lb-ft</td>
												<td>1,000 Lb-ft</td>
												<td>597 Lb-ft</td>
												<td>959 Lb-ft</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/m2/m2.jpg" alt="">
						</div>
					</div>
				</div></div>
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