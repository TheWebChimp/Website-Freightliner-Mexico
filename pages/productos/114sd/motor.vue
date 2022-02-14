<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Motor</h2>
							<div class="the-content">
								<table cellpadding="0" cellspacing="0" class="table">
									<tbody>
										<tr>
											<td>Modelo</td>
											<td>DD8</td>
											<td>DD13</td>
											<td>ISL</td>
										</tr>
										<tr>
											<td>Tipo</td>
											<td>Detroit</td>
											<td>Detroit</td>
											<td>Cummins</td>
										</tr>
										<tr>
											<td>No. de Cilindros</td>
											<td>6 en línea</td>
											<td>6 en línea</td>
											<td>6 en línea</td>
										</tr>
										<tr>
											<td>Desplazamiento</td>
											<td>7.7 L</td>
											<td>12.8 L</td>
											<td>8.9 L</td>
										</tr>
										<tr>
											<td>Nivel de emisiones</td>
											<td>EPA 10</td>
											<td>EURO V &amp; EPA10</td>
											<td>EURO V</td>
										</tr>
										<tr>
											<td>Potencia máxima</td>
											<td>(330 - 375) HP</td>
											<td>(350 - 505) HP</td>
											<td>(335 - 400) HP</td>
										</tr>
										<tr>
											<td>Torque máximo</td>
											<td>1,000 - 1,050 lb-ft</td>
											<td>1,250 - 1,850 lb-ft</td>
											<td>1,180 lb-ft</td>
										</tr>
									</tbody>
								</table>

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

	.block-producto {

		padding: @margin-double 0;
	}


</style>