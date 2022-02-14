<template>
	<div>
		<div class="block block-producto">
			<div class="inner">

				<div class="mx-default">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<h2 class="block-title">Seguridad</h2>
							<div class="the-content">
								<p>El Cascadia cuenta con sistemas de seguridad activos a través de radar y un sistema de cámara para proporcionar óptima seguridad. Detroit Assurance se integra a la perfección al  Nuevo Cascadia.</p>

								<h3>Detroit Assurance</h3>
								<p>Haz de la seguridad, tu prioridad con los sistemas de seguridad de Detroit Assurance. A través de un radar y un sistema de cámara opcional, Detroit Assurance proporciona seguridad  óptima en carretera, y se integra a la perfección al Cascadia. Como requisito para el Detroit Assurance, todos los modelos deben estar equipados con  motor Detroit ™ y transmisión DT12 ™o manual. La suite de sistemas de Detroit Assurance incluye:</p>
								<ul>
									<li>Sistema de frenado activo (Active Brake Assist/ ABA)</li>
									<li>Control Crucero Adaptativo (Adaptive Cruise Control/ACC)</li>
									<li>Alerta de peatones en movimiento (Moving Pedestrian Warning)</li>
									<li>Alerta de distancia (Tailgate Warning)</li>
									<li>Alerta de abandono de carril (Lane Departure Warning/LDW)</li>
								</ul>

							</div>
						</div>
						<div class="col-xs-12 col-sm-4 first-xs last-sm">
							<img src="~/assets/images/template/productos/nuevo-cascadia/detroit-assurance.jpg" alt="">
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