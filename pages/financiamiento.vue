<template>
	<div>
		<div class="block block-financiamiento">
			<div class="inner">
				<div class="mx-default">
					<h2 class="block-title">Financiamiento</h2>

					<div class="calculadora">
						<h4>Daimler Financial Services, financiamientos diseñados a la medida.</h4>
						<p>Más de 25 años apoyando al autotransporte en México a través de accesibles planes financieros nos respaldan. ¡Calcula tus mensualidades en nuestra calculadora aquí!</p>

						<p class="text-right"><a href="https://www.daimlerfinancialservices.com.mx/calculator/step-1" class="button button-primary">Accede a nuestra calculadora <i class="fa fa-fw fa-angle-right" /></a></p>
					</div>

					<div class="tipos">
						<div class="row">

							<div class="col col-xs-12 col-sm-6">
								<article class="tipo">
									<img src="~/assets/images/template/credito-directo.jpg" alt="Crédito Directo">
									<div class="the-content mb-default">
										<h3>Crédito Directo</h3>
										<p>Adquiere tu Freightliner asegurando pagos fijos con enganches atractivos y plazos flexibles. Aprovecha la ventaja de adquirir tu unidad y financiamiento en el mismo lugar y con los mejores beneficios.</p>
										<ul class="list">
											<li>Plazos flexibles hasta de 72 meses</li>
											<li>Taza fija durante la vigencia del contrato</li>
											<li>Enganches atractivos</li>
										</ul>
									</div>

									<a href="https://www.daimlerfinancialservices.com.mx/financing_plans/credit" class="button button-primary button-block">Más información</a>
								</article>
							</div>

							<div class="col col-xs-12 col-sm-6">
								<article class="tipo">
									<img src="~/assets/images/template/arrendamiento-puro.jpg" alt="Arrendamiento Puro">
									<div class="the-content mb-default">
										<h3>Arrendamiento Puro</h3>
										<p>Es el producto financiero diseñado principalmente para personas físicas con actividad empresarial o morales, a través del cual se otorga el uso o goce de tu camión por un periodo de tiempo, pagando una renta mensual.</p>
										<ul class="list">
											<li>Plazos de 12 hasta 60 meses dependiendo la unidad</li>
											<li>Rentas vencidas</li>
											<li>Mínima inversión inicial</li>
										</ul>
									</div>

									<a href="https://www.daimlerfinancialservices.com.mx/financing_plans/pure_lease" class="button button-primary button-block">Más información</a>
								</article>
							</div>
						</div>

						<div class="row">
							<div class="col col-xs-12 col-sm-6">
								<article class="tipo">
									<img src="~/assets/images/template/arrendamiento-financiero.jpg" alt="Arrendamiento Financiero">
									<div class="the-content mb-default">
										<h3>Arrendamiento Financiero</h3>
										<p>Con este producto te otorgamos la posibilidad de adquirir tu camión con beneficios fiscales, el cual consiste en liquidar pagos parciales hasta cubrir el valor de adquisición de la unidad.</p>
										<p>Al término del plazo tendrás la opción de adquirir el vehículo a través de un pago denominado "Opción de compra", el cual se estipula en tu contrato con Daimler Financial Services.</p>
										<ul class="list">
											<li>Plazos de hasta 72 meses</li>
											<li>Rentas vencidas</li>
											<li>Mínima inversión inicial</li>
										</ul>
									</div>

									<a href="https://www.daimlerfinancialservices.com.mx/financing_plans/financial_lease" class="button button-primary button-block">Más información</a>
								</article>
							</div>

							<div class="col col-xs-12 col-sm-6">
								<article class="tipo">
									<img src="~/assets/images/template/mercedes-insurance.jpg" alt="Mercedes-Benz Insurance">
									<div class="the-content mb-default">
										<h3>Mercedes-Benz Insurance</h3>
										<p>Porque sabemos que tu vehículo merece una cobertura excepcional, contamos con una amplia gama de opciones de aseguramiento, así como un seguro de vida para proteger tu patrimonio, ya que hemos diseñado en conjunto con las compañías líderes en el mercado un programa acorde a tus necesidades, ya sea de financiamiento o de contado, ofreciendo beneficios exclusivos como:</p>
										<ul class="list">
											<li>Diferentes opciones de cobertura y deducibles de acuerdo a tus necesidades.</li>
											<li>Tabla de depreciación especial, por encima de los valores comerciales del mercado.</li>
											<li>Reparaciones realizadas en distribuidores autorizados y certificados</li>
										</ul>
										<p>Conoce más sobre nuestras coberturas, aseguradoras y condiciones de contratación</p>
									</div>

									<a href="https://www.daimlerfinancialservices.com.mx/financing_plans/insurance" class="button button-primary button-block">Más información</a>
								</article>
							</div>
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
		name: 'Términos Legales',
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

		.calculadora {

			line-height: 1.5;

			h4 {

				font-size: 1.5rem;
				margin-bottom: @margin-default;
			}

			p {

				font-size: 1.2rem;
				margin-bottom: @margin-default;
			}
		}

		.tipos {

			.col {

				display: flex;
			}

			.tipo {

				display: flex;
				flex-direction: column;

				background: lighten(@brand-3, 20%);
				margin-bottom: @margin-default;

				.the-content {

					padding: @margin-default;
					flex: 1 0 auto;
				}
			}
		}
	}
</style>