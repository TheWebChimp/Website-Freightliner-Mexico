<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Aplicaciones</h2>
							<div class="the-content">
								<p>El camión Freightliner M2 es un camión muy versátil que puede ser configurado para varias aplicaciones entre las cuales están las siguientes:</p>
								<ul class="list">
									<li>Caja seca</li>
									<li>Refresquero</li>
									<li>Caja refrigerada</li>
									<li>Grúa</li>
									<li>Tanque</li>
									<li>Redilas</li>
									<li>Gasero</li>
									<li>Blindado</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img class="mb-default" src="~/assets/images/template/productos/m2/m2.jpg" alt="">
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