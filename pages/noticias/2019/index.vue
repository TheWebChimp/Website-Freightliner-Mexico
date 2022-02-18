<template>
	<div>
		<div class="block block-news">
			<div class="inner">
				<div class="m-default">
					<h2 class="block-title">Noticias</h2>

					<div class="news-wrapper">
						<article tag="article" class="news" v-for="article in news">
							<nuxt-link :to="`/noticias/2019/${ article.slug }`" class="news-image">
								<img :src="require(`/assets/images/template/news/${ article.image }`)" :alt="article.title">
							</nuxt-link>
							<div class="news-content">
								<h3 class="news-title">{{ article.title }}</h3>
								<p class="news-excerpt">{{ article.excerpt }}</p>
								<p class="news-more">
									<nuxt-link class="button button-primary" :to="`/noticias/2019/${ article.slug }`">Seguir Leyendo</nuxt-link>
								</p>
							</div>
						</article>
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
		name: 'Empresa',
		layout: 'site',
		data: () => ({
			news: [
				{
					title: 'Integra Grupo Santana Vega, 50 Nuevos Cascadia a su Parque Vehicular',
					image: 'news1.jpg',
					slug: 'integra-grupo-santana-vega-50-nuevos-cascadia-a-su-parque-vehicular',
					excerpt: '180 vehículos100% Freightliner integran la flota del grupo transportista Las 50 unidades cuentan con motor DD16 y la suite de seguridad Detroit Assurance Tampico, Tamaulipas, 29 de agosto de 2019.'
				},
				{
					title: 'Freightliner Presenta Nueva Línea de Motores',
					image: 'news2.jpg',
					slug: 'freightliner-presenta-nueva-linea-de-motores',
					excerpt: 'Los modelos DD5, DD8, MBE924 y MBE926 con GHG17 equiparán vehículos M2 de la marca Freightliner Estas soluciones son presentadas en México a menos de un año de su lanzamiento en la región norteamericana Ciudad de México, a 24 de julio de 2019.'
				},
				{
					title: 'Daimler Trucks Construye una Robusta Estrategia de Postventa',
					image: 'news3.jpg',
					slug: 'daimler-trucks-construye-una-robusta-estrategia-de-postventa',
					excerpt: 'Su plan está soportado por un stock de partes valorado en 700 millones de pesos La compañía anuncia su más reciente convenio de proveeduría con la empresa Accuride para impulsar Value Parts Ciudad de México, a 11 de julio de 2019.'
				}
			]
		}),
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.news {

		.cf;
		margin-bottom: @margin-default;
		display: flex;
		align-items: center;

		@media @md-n-below {

			flex-direction: column;
		}

		.news-image {

			border: 1px solid @brand-3;
			margin-bottom: @margin-default;
			width: 100%;

			@media @md-n-above {

				min-width: 300px;
				max-width: 300px;
				margin-bottom: 0;
				margin-right: @margin-default;
			}

			img {

				width: 100%;
			}
		}

		.news-title {

			font-size: 1.2em;
			font-weight: 600;
			margin-bottom: @margin-half;
		}

		.news-excerpt {

			margin-bottom: @margin-half;
		}
	}

</style>