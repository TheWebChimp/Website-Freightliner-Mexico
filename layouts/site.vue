<template>
	<div class="site">
		<header class="site-header">
			<div class="header-bar-1">
				<div class="inner">
					<div class="px-default py-half">
						<nuxt-link to="/">
							<img class="logo" src="~/assets/images/template/logo.png" alt="Freightliner">
						</nuxt-link>

						<nav class="site-navigation">
							<ul class="menu">
								<li class="menu-item"><nuxt-link to="/por-que-freightliner">¿Por qué Freightliner?</nuxt-link></li>
								<li class="menu-item"><nuxt-link to="/empresa">Empresa</nuxt-link></li>
								<li class="menu-item"><a href="#">Multimedia</a></li>
								<li class="menu-item"><a href="#">Contacto</a></li>
								<li class="menu-item"><a href="#">Noticias</a></li>
								<li class="menu-item"><a href="#">Motorsport</a></li>
							</ul>
						</nav>

						<div class="social">
							<div class="phone">
								<a href="tel:8005902000"><i class="fa fa-fw fa-phone" /> 800 590 2000</a>
							</div>

							<ul class="media hide-mobile">
								<li><a target="_blank" href="https://www.facebook.com/freightlinermex"><i class="fa fa-facebook"></i></a></li>
								<li><a target="_blank" href="https://twitter.com/FreightlinerMex"><i class="fa fa-twitter"></i></a></li>
								<li><a target="_blank" href="https://goo.gl/T8K915"><i class="fa fa-youtube-play"></i></a></li>
								<li><a target="_blank" href="https://www.instagram.com/freightlinermex/"><i class="fa fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="header-bar-2">
				<div class="inner boxfix-vert">
					<div class="m-default">
						<ul class="menu">
							<li
								class="menu-item"
							>
								<a href="#">Productos</a>
							</li>
							<li class="menu-item"><nuxt-link to="/distribuidores">Distribuidores</nuxt-link></li>
							<li class="menu-item"><a href="https://postventa-freightliner.com/" target="_blank">Postventa</a></li>
							<li class="menu-item"><nuxt-link to="/financiamiento">Financiamiento</nuxt-link></li>
							<li class="menu-item"><a href="https://www.selectrucksmexico.com/" target="_blank">Seminuevo</a></li>
							<li class="menu-item"><a href="https://www.mercedes-benz.com.mx/vans/es/sprinter" target="_blank">Vans</a></li>
							<li class="menu-item"><a href="https://careersdaimler.com.mx/" target="_blank">Careers</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div
				class="header-productos"
				:class="{ active: products }"
			>
				<div class="inner">
					<div class="row">
						<div class="col">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-nuevo-cascadia.jpg" alt="Cascadia"></div>
								<h3>Cascadia</h3>
							</article>
						</div>

						<div class="col">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-114.jpg" alt="114SD"></div>
								<h3>114SD</h3>
							</article>
						</div>

						<div class="col">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-cascadia.jpg" alt="Cascadia Clásico"></div>
								<h3>Cascadia Clásico</h3>
							</article>
						</div>

						<div class="col">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-m2.jpg" alt="M2"></div>
								<h3>M2</h3>
							</article>
						</div>

						<div class="col">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-360s.jpg" alt="Familia 360"></div>
								<h3>Familia 360</h3>
							</article>
						</div>
					</div>
				</div>
			</div>
		</header>

		<section>
			<Nuxt />
		</section>
		<footer class="site-footer">
			<div class="footer-bar-1">
				<div class="inner boxfix-vert">
					<div class="m-default">
						<ul class="menu">
							<li class="menu-item"><nuxt-link to="/distribuidores">Distribuidores</nuxt-link></li>
							<li class="menu-item"><a href="https://postventa-freightliner.com/" target="_blank">Postventa</a></li>
							<li class="menu-item"><nuxt-link to="/financiamiento">Financiamiento</nuxt-link></li>
							<li class="menu-item"><a href="https://www.selectrucksmexico.com/" target="_blank">Seminuevo</a></li>
							<li class="menu-item"><a href="https://www.mercedes-benz.com.mx/vans/es/sprinter" target="_blank">Vans</a></li>
							<li class="menu-item"><a href="https://careersdaimler.com.mx/" target="_blank">Careers</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-bar-2">
				<div class="inner">
					<div class="px-default py-half">
						<div class="logos">
							<img class="logo" src="~/assets/images/template/logo.png" alt="Freightliner">
							<img class="esr" src="~/assets/images/template/esr.png" alt="Empresa Socialmente Responsable">
						</div>

						<p class="legal">DAIMLER VEHÍCULOS COMERCIALES MÉXICO S. DE R.L. DE C.V con domicilio en Avenida Santa Fe, número 428, Torre 3, Piso 7, Colonia Santa Fe Cuajimalpa, Alcaldía Cuajimalpa de Morelos, Ciudad de México. Código Postal 05348, es responsable del tratamiento de sus datos personales para proveer los servicios y productos requeridos por usted; Dar cumplimiento a obligaciones contraídas con nuestros clientes; Evaluar la calidad del servicio, y para fines de identificación, operación y administración.</p>

						<ul class="media">
							<li><a target="_blank" href="https://www.facebook.com/freightlinermex"><i class="fa fa-facebook"></i></a></li>
							<li><a target="_blank" href="https://twitter.com/FreightlinerMex"><i class="fa fa-twitter"></i></a></li>
							<li><a target="_blank" href="https://goo.gl/T8K915"><i class="fa fa-youtube-play"></i></a></li>
							<li><a target="_blank" href="https://www.instagram.com/freightlinermex/"><i class="fa fa-instagram"></i></a></li>
						</ul>

					</div>
				</div>
			</div>
			<div class="footer-bar-3">
				<div class="inner boxfix-vert">
					<div class="m-half">
						<ul class="menu">
							<li class="menu-item"><nuxt-link to="/aviso-de-privacidad">Aviso de Privacidad</nuxt-link></li>
							<li class="menu-item"><nuxt-link to="/uso-de-cookies">Uso de Cookies</nuxt-link></li>
							<li class="menu-item"><nuxt-link to="/terminos-legales">Términos Legales</nuxt-link></li>
							<li class="menu-item"><nuxt-link to="/formato-unico-de-ejercicio-de-derechos">Formato Único de Ejercicio de Derechos</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>

	export default {
		data: () => ({
			menuActive: false,
			products: false
		}),
		methods: {
		}
	}
</script>

<style lang="less">

	html {

		min-height: 100vh;
	}

	body {

		min-height: 100vh;
		display: flex;
		flex-direction: column;
		font-family: 'Inter', sans-serif;
	}

	#__nuxt, #__layout {

		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
	}

	.site {

		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
		overflow-x: hidden;
	}

	.media {

		text-align: center;

		li {

			display: inline-block;

			a {

				background: @brand-2;
				color: white;
				border-radius: @radius-round;
				width: 32px;
				height: 32px;
				line-height: 32px;
				margin: @margin-third;
				display: block;
			}
		}
	}

	.site-header {

		.cf;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1000;
		width: 100%;
		color: white;

		.header-bar-1 {

			background: @brand-1;
			color: white;
			width: 100%;

			.inner {


				& > div {

					display: flex;
					width: 100%;
					align-items: center;
					justify-content: space-between;
				}
			}

			.logo {

				width: 196px;
				height: auto;
			}

			.menu {

				font-size: 0.8rem;
				display: none;

				@media @md-n-above {

					display: block;
				}

				.menu-item {

					display: inline-block;

					a {

						margin: @margin-half;
						color: white;
						text-decoration: none;
					}
				}
			}

			.social {

				display: none;
				@media @lg-n-above {

					display: block;
				}

				.phone {

					background: @brand-2;
					border-radius: @radius-round;
					font-size: 0.8rem;
					padding: @margin-half @margin-default;
					margin-bottom: @margin-third;
					text-align: center;

					a {

						text-decoration: none;
						color: white;
					}
				}
			}
		}

		.header-bar-2 {

			background: @brand-2;
			display: none;

			@media @md-n-above {

				display: block;
			}

			.menu {

				display: flex;
				justify-content: space-between;

				.menu-item {

					a {

						font-size: 0.8rem;
						text-decoration: none;
						text-transform: uppercase;
						font-weight: bold;
						display: block;
						margin: @margin-half;
						color: white;
					}
				}
			}
		}

		.header-productos {

			background: @brand-3;
			padding: @margin-default 0;
			color: black;
			z-index: -1;
			transition: margin-top 500ms;
			margin-top: -100vh;

			&.active {

				margin-top: 0;
			}
		}
	}

	section {

		width: 100%;
		min-width: 100%;
		display: flex !important;
		flex: 1 0 auto;
		padding-top: 56px;

		@media @md-n-above {

			padding-top: 121px;
		}

		@media @lg-n-above {

			padding-top: 159px;
		}

		& > div {

			width: 100%;
		}
	}

	.site-footer {

		.footer-bar-1 {

			background: @brand-2;
			display: none;

			@media @md-n-above {

				display: block;
			}

			.menu {

				display: flex;
				justify-content: space-between;

				.menu-item {

					a {

						font-size: 0.8rem;
						text-decoration: none;
						text-transform: uppercase;
						font-weight: bold;
						display: block;
						margin: @margin-half;
						color: white;
					}
				}
			}
		}

		.footer-bar-2 {

			background: @brand-1;

			.inner {


				& > div {

					display: flex;
					width: 100%;
					align-items: center;
					justify-content: space-between;
					flex-direction: column;

					@media @md-n-above {

						flex-direction: row;
					}
				}

				.logos {


					padding: @margin-half;

					@media @md-n-above {

						padding: 0;
						min-width: 123px;

						img {

							width: 100%;
							margin: @margin-third;
						}
					}
				}

				.legal {

					font-size: 0.6rem;
					color: white;
					text-align: justify;

					padding: @margin-default 0;

					@media @md-n-above {

						padding: 0 @margin-default;
						padding-left: @margin-double;
					}
				}

				.media {

					min-width: 190px;
				}
			}
		}

		.footer-bar-3 {

			background: @brand-2;
			display: none;

			@media @md-n-above {

				display: block;
			}

			.menu {

				display: flex;
				justify-content: space-between;
				align-items: center;

				.menu-item {

					a {

						text-align: center;
						font-size: 0.75rem;
						text-decoration: none;
						display: block;
						margin: @margin-half;
						color: white;
					}
				}
			}
		}
	}

</style>