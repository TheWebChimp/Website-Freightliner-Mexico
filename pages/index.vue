<template>
	<div>
		<div class="block block-splash">
			<slick class="splash-carrousel">
				<div>
					<img class="show-desktop" src="~/assets/images/template/slide5.jpg" alt="">
					<img class="show-mobile" src="~/assets/images/template/slide5-mobile.jpg" alt="">
				</div>
				<div>
					<img class="show-desktop" src="~/assets/images/template/slide1.jpg" alt="">
					<img class="show-mobile" src="~/assets/images/template/slide1-mobile.jpg" alt="">
				</div>
				<div>
					<img class="show-desktop" src="~/assets/images/template/slide2.jpg" alt="">
					<img class="show-mobile" src="~/assets/images/template/slide2-mobile.jpg" alt="">
				</div>
				<div>
					<img class="show-desktop" src="~/assets/images/template/slide3.jpg" alt="">
					<img class="show-mobile" src="~/assets/images/template/slide3-mobile.jpg" alt="">
				</div>
				<div>
					<img class="show-desktop" src="~/assets/images/template/slide4.jpg" alt="">
					<img class="show-mobile" src="~/assets/images/template/slide4-mobile.jpg" alt="">
				</div>

				<template #prevArrow="arrowOption">
					<a><i class="fa fa-fw fa-angle-left" /></a>
				</template>

				<template #nextArrow="arrowOption">
					<a><i class="fa fa-fw fa-angle-right" /></a>
				</template>
			</slick>
		</div>

		<div class="block block-productos">
			<div class="inner boxfix-vert">
				<div class="my-quad mx-default">

					<h2 class="block-title">Productos</h2>

					<div class="row">
						<div class="col col-lg-4 col-xs-12">
							<nuxt-link tag="article" to="/productos/nuevo-cascadia" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-nuevo-cascadia.jpg" alt="Cascadia"></div>
								<h3>Cascadia</h3>
							</nuxt-link>
						</div>

						<div class="col col-lg-4 col-xs-12">
							<nuxt-link tag="article" to="/productos/114sd" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-114.jpg" alt="114SD"></div>
								<h3>114SD</h3>
							</nuxt-link>
						</div>

						<div class="col col-lg-4 col-xs-12">
							<nuxt-link tag="article" to="/productos/cascadia" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-cascadia.jpg" alt="Cascadia Clásico"></div>
								<h3>Cascadia Clásico</h3>
							</nuxt-link>
						</div>

						<div class="col col-lg-4 col-xs-12">
							<nuxt-link tag="article" to="/productos/m2" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-m2.jpg" alt="M2"></div>
								<h3>M2</h3>
							</nuxt-link>
						</div>

						<div class="col col-lg-4 col-xs-12">
							<nuxt-link tag="article" to="/productos/fl-360/camion-715" class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-360s.jpg" alt="Familia 360"></div>
								<h3>Familia 360</h3>
							</nuxt-link>
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
	import VueSlickCarousel from 'vue-slick-carousel';
	import 'vue-slick-carousel/dist/vue-slick-carousel.css';

	export default {
		name: 'IndexPage',
		layout: 'site',
		components: { 'slick': VueSlickCarousel },
		mounted() {

			//AOS.init();
		},
	}
</script>

<style scoped lang="less">

	.show-mobile {

		display: block !important;

		@media @md-n-above {

			display: none !important;
		}
	}

	.show-desktop {

		display: none !important;

		@media @md-n-above {

			display: block !important;
		}
	}

	.splash-carrousel {

		img {

			width: 100%;
		}

		.slick-arrow {

			width: 40px;
			height: 40px;
			color: white;
			cursor: pointer;
			text-align: center;
			line-height: 40px;
			background: fade(black, 50%);
			border-radius: @radius-round;
			font-size: 1.5rem;
			position: absolute;
			top: 50%;
			margin-top: -40/2px;
			z-index: 10;

			&.slick-prev { left: @margin-double; }
			&.slick-next { right: @margin-double; }

			@media @md-n-above {

				&.slick-prev { left: @margin-quad; }
				&.slick-next { right: @margin-quad; }
			}
		}
	}

	.block-productos {

		.block-title {

			text-align: center;
			font-size: 1.5rem;
			text-transform: uppercase;
			font-weight: bold;
			margin-bottom: @margin-double;
		}

		.producto {

			margin: 0 auto;
			cursor: pointer;
			margin-bottom: @margin-default;
			max-width: 300px;

			.producto-image {

				overflow: hidden;
				margin-bottom: @margin-half;

				img {

					transition: all 500ms;
				}
			}

			h3 {

				text-transform: uppercase;
				font-size: 0.8rem;
				font-weight: bold;
			}

			&:hover {

				.producto-image {

					img {

						transform: scale(1.2);
					}
				}
			}
		}
	}

</style>W