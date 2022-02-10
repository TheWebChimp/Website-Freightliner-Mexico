<template>
	<div>
		<div class="block block-splash">
			<slick class="splash-carrousel">
				<div><img src="~/assets/images/template/slide1.jpg" alt=""></div>
				<div><img src="~/assets/images/template/slide2.jpg" alt=""></div>
				<div><img src="~/assets/images/template/slide3.jpg" alt=""></div>
				<div><img src="~/assets/images/template/slide4.jpg" alt=""></div>

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
						<div class="col col-4 col-xs-12">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-nuevo-cascadia.jpg" alt="Cascadia"></div>
								<h3>Cascadia</h3>
							</article>
						</div>

						<div class="col col-4 col-xs-12">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-114.jpg" alt="114SD"></div>
								<h3>114SD</h3>
							</article>
						</div>

						<div class="col col-4 col-xs-12">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-cascadia.jpg" alt="Cascadia Clásico"></div>
								<h3>Cascadia Clásico</h3>
							</article>
						</div>

						<div class="col col-4 col-xs-12">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-m2.jpg" alt="M2"></div>
								<h3>M2</h3>
							</article>
						</div>

						<div class="col col-4 col-xs-12">
							<article class="producto">
								<div class="producto-image"><img src="~/assets/images/template/home/menu-360s.jpg" alt="Familia 360"></div>
								<h3>Familia 360</h3>
							</article>
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
		methods: {}
	}
</script>

<style scoped lang="less">

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
			z-index: 100;

			&.slick-prev { left: @margin-double; }
			&.slick-next { right: @margin-double; }
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