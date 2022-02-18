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
								<li class="menu-item"><nuxt-link to="/multimedia">Multimedia</nuxt-link></li>
								<li class="menu-item"><nuxt-link to="/contacto">Contacto</nuxt-link></li>
								<li class="menu-item"><nuxt-link to="/noticias/2019">Noticias</nuxt-link></li>
								<!-- <li class="menu-item"><a href="#">Motorsport</a></li> -->
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
							<li class="menu-item menu-item-productos"><a href="#">Productos</a></li>
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
							<nuxt-link tag="article" to="/productos/nuevo-cascadia" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-nuevo-cascadia.jpg" alt="Cascadia"></div>
								<h3>Cascadia</h3>
							</nuxt-link>
						</div>

						<div class="col">
							<nuxt-link tag="article" to="/productos/114sd" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-114.jpg" alt="114SD"></div>
								<h3>114SD</h3>
							</nuxt-link>
						</div>

						<div class="col">
							<nuxt-link tag="article" to="/productos/cascadia" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-cascadia.jpg" alt="Cascadia Clásico"></div>
								<h3>Cascadia Clásico</h3>
							</nuxt-link>
						</div>

						<div class="col">
							<nuxt-link tag="article" to="/productos/m2" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-m2.jpg" alt="M2"></div>
								<h3>M2</h3>
							</nuxt-link>
						</div>

						<div class="col">
							<nuxt-link tag="article" to="/productos/fl-360/camion-715" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-360s.jpg" alt="Familia 360"></div>
								<h3>Familia 360</h3>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</header>

		<a class="contact-button" @click.prevent="contactModal = true">
			<i class="fa fa-envelope" />
			CONTÁCTANOS AHORA
		</a>

		<div class="contact-modal-wrapper" v-show="contactModal">
			<div class="contact-modal">
				<div class="m-default">
					<h2 class="block-title">CONTACTO</h2>
					<div class="the-content mb-default">
						<p>Apreciamos tus comentarios. Por favor llena el formulario y un ejecutivo de Freightliner se pondrá en contacto contigo.</p>
					</div>
					<form data-form="Uso de Formulario de contacto Popup" action="https://www.freightliner.com.mx/wp-admin/admin-ajax.php" method="post" data-submit="ajax">
						<input type="hidden" name="action" value="contacto_producto">

						<div class="row row-md">

							<div class="col col-6 col-md-6">
								<div class="form-group">
									<label for="nombre" class="control-label">Nombre <span class="required">*</span></label>
									<input type="text" name="nombre" id="nombre" value="" class="input-block form-control" data-validate="required">
								</div>
							</div>

							<div class="col col-6 col-md-6">
								<div class="form-group">
									<label for="apellidos" class="control-label">Apellidos <span class="required">*</span></label>
									<input type="text" name="apellidos" id="apellidos" value="" class="input-block form-control" data-validate="required">
								</div>
							</div>

						</div>

						<div class="row row-md">

							<div class="col col-6 col-md-6">
								<div class="form-group">
									<label for="correo" class="control-label">Correo electrónico <span class="required">*</span></label>
									<input type="text" name="correo" id="correo" value="" class="input-block form-control" data-validate="required">
								</div>
							</div>

							<div class="col col-6 col-md-6">
								<div class="form-group">
									<label for="telefono" class="control-label">Teléfono </label>
									<input type="text" name="telefono" id="telefono" value="" class="input-block form-control">
								</div>
							</div>

						</div>

						<div class="row row-md">
							<div class="col col-12 col-md-12">
								<div class="form-group">
									<label for="ciudad" class="control-label">Ciudad <span class="required">*</span></label>
									<select name="ciudad" id="ciudad" data-validate="required" class="form-control input-block">
										<option value="">Ciudad</option>
										<option value="Baja California">Baja California</option>
										<option value="Baja California Sur">Baja California Sur</option>
										<option value="Campeche">Campeche</option>
										<option value="Coahuila de Zaragoza">Coahuila de Zaragoza</option>
										<option value="Colima">Colima</option>
										<option value="Chiapas">Chiapas</option>
										<option value="Chihuahua">Chihuahua</option>
										<option value="Distrito Federal">Distrito Federal</option>
										<option value="Durango">Durango</option>
										<option value="Guanajuato">Guanajuato</option>
										<option value="Guerrero">Guerrero</option>
										<option value="Hidalgo">Hidalgo</option>
										<option value="Jalisco">Jalisco</option>
										<option value="México">México</option>
										<option value="Michoacán de Ocampo">Michoacán de Ocampo</option>
										<option value="Morelos">Morelos</option>
										<option value="Nayarit">Nayarit</option>
										<option value="Nuevo León">Nuevo León</option>
										<option value="Oaxaca">Oaxaca</option>
										<option value="Puebla">Puebla</option>
										<option value="Querétaro">Querétaro</option>
										<option value="Quintana Roo">Quintana Roo</option>
										<option value="San Luis Potosí">San Luis Potosí</option>
										<option value="Sinaloa">Sinaloa</option>
										<option value="Sonora">Sonora</option>
										<option value="Tabasco">Tabasco</option>
										<option value="Tamaulipas">Tamaulipas</option>
										<option value="Tlaxcala">Tlaxcala</option>
										<option value="Veracruz de Ignacio de la Llave">Veracruz de Ignacio de la Llave</option>
										<option value="Yucatán">Yucatán</option>
										<option value="Zacatecas">Zacatecas</option>
									</select>
								</div>
							</div>
						</div>

						<div class="row row-md">
							<div class="col col-12 col-md-12">
								<div class="form-group">
									<label for="descripcion" class="control-label">¿Como podremos ayudarte?</label>
									<textarea rows="4" cols="50" name="descripcion" id="descripcion" value="" class="input-block form-control"></textarea>
								</div>
							</div>
						</div>

						<div class="row row-md">
							<div class="col col-12 col-md-12">
								<div class="form-group">
									<label class="checkbox">
										<input type="checkbox" data-validate="required" class="datos" id="datos" name="datos">
										<span>Autoriza el uso de sus datos personales</span>
									</label>
								</div>
							</div>
						</div>

						<div class="form-actions text-right">
							<a href="#" @click.prevent="contactModal = false" class="button button-link">Cerrar</a>
							<input type="submit" class="button button-primary" value="Enviar">
						</div>
					</form>
				</div>
			</div>
		</div>

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
			products: false,
			contactModal: false,
		}),
		mounted() {

			const obj = this;

			$(".menu-item-productos").hoverIntent(
				function() {
					obj.products = true;
				},
				function() {}
			);

			$('.header-productos').hoverIntent(
				function() {},
				function() {
					obj.products = false;
				}
			);
		},
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

	.contact-button {

		position: fixed;
		cursor: pointer;
		padding: @margin-half;
		top: 50%;
		right: -1px;
		margin-top: -239px/2;
		z-index: 10;
		font-weight: bolder;
		transform-origin: 100% 100%;
		transform: rotate(-90deg);
		background: #FFDA00;
		border-color: #FFDA00;
		color: @brand-1;

		@media @md-n-above {

			padding: @margin-default;
		}
	}

	.contact-modal-wrapper {

		z-index: 10000;
		.overlay-element();
		position: fixed;
		overflow-y: auto;
		background: fade(black, 50%);
		display: flex;
		align-items: center;
		justify-content: center;

		.contact-modal {

			max-width: 90%;
			width: 400px;
			background: white;

			.control-label {

				font-size: 0.8rem;
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