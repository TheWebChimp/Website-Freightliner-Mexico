import { resolve } from 'path';

export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Freightliner',
		htmlAttrs: {
			lang: 'es'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css' },
		],
		script: [
			{ type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' },
			{ type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js' },
			{ type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.ui.min.js' },
			{ type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js' },
			{ type: 'text/javascript', src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js' },
			{ type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.hoverintent/1.10.2/jquery.hoverIntent.min.js' },
			//{ type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBC0yZG8rn2gzejl9UvTgl_xTqT3Z4XhFI' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [ '~assets/styles/chimplate/chimplate.less' ],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/globals.js' },
	],

	// Shared style resources across project
	// Components CSS
	styleResources: {
		less: [
			'~assets/styles/chimplate/variables/animations.less',
			'~assets/styles/chimplate/variables/aspects.less',
			'~assets/styles/chimplate/variables/borders.less',
			'~assets/styles/chimplate/variables/spacing.less',
			'~assets/styles/chimplate/variables/easings.less',
			'~assets/styles/chimplate/variables/fonts.less',
			'~assets/styles/chimplate/variables/gradients.less',
			'~assets/styles/chimplate/variables/media.less',
			'~assets/styles/chimplate/variables/shadows.less',
			'~assets/styles/chimplate/variables/sizes.less',
			'~assets/styles/chimplate/variables/z-index.less',
			'~assets/styles/chimplate/project-variables.less',
			'~assets/styles/chimplate/variables/semantics.less',
			'~assets/styles/chimplate/base/mixins.less',
			'~assets/styles/chimplate/utilities/typography.less',
			'~assets/styles/chimplate/base/helpers.less'
		]
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/google-fonts',
		'@nuxtjs/svg',
		'@nuxtjs/composition-api/module',
		'@nuxtjs/style-resources',
		'@nuxtjs/color-mode'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		['nuxt-gmaps', {
			key: 'AIzaSyBC0yZG8rn2gzejl9UvTgl_xTqT3Z4XhFI'
		}]
	],

	/*colorMode: {
		preference: 'system', // default value of $colorMode.preference
		fallback: 'dark', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '-mode',
		storageKey: 'nuxt-color-mode'
	},*/

	/*i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en.js' },
			{ code: 'es', iso: 'es-MX', file: 'es.js' },
		],
		langDir: '~/locale/',
		defaultLocale: 'en',
		vueI18n: { fallbackLocale: 'en' }
	},*/

	googleFonts: {
		families: {
			'Open Sans': [300, 400, 500, 700, 900],
			Inter: [300, 400, 500, 700, 900],
		},
	},

	/*publicRuntimeConfig: {
		apiUrl: process.env.API_URL || 'http://sensei.test'
	},*/

	/*axios: {
		baseURL: process.env.API_URL || 'http://sensei.test'
	},??*/

	auth: {
		strategies: {
			local: {
				token: {
					property: 'jwt',
					required: true,
					type: 'Bearer'
				},
				endpoints: {
					login: { url: 'users/login', method: 'post', propertyName: 'jwt' },
					user: { url: 'users/me?fetch_metas=1', method: 'get', propertyName: 'data' },
					logout: false
				}
			}
		}
	},

	/*router: {
		base: '/campo-roble/'
	},*/

	alias: {
		'@chimplate': resolve(__dirname, './assets/styles/chimplate'),
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			less: {
				lessOptions: {
					math: 'always'
				}
			}
		},
	}
}
