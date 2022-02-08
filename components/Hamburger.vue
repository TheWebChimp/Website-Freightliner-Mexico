<template>
	<a class="hamburger">
		<span class="line" />
		<span class="line" />
		<span class="line" />
		<span class="text">Menú</span>
	</a>
</template>

<script>
	export default {
		name: 'Hamburger',
		props: {
			classes: {
				type: Object,
				default: () => ({}),
			},
		},
	}
</script>

<style scoped lang="less">

	.hamburger {

		cursor: pointer;
		font-size: 1.2rem;
		display: block;
		color: white;
		text-shadow: 0 1px 3px fade(black, 10%);
		height: 23px;
		text-transform: uppercase;
		font-weight: 600;
		position: relative;
		line-height: 23px;
		min-width: 40px;

		@media @md-n-above {

			padding-left: 50px;
		}

		.text {

			@media @md-n-below {

				display: none;
			}
		}

		@keyframes grow1 {

			from { width: 40px; }
			to { width: 20px; }
		}

		@keyframes grow2 {

			from { width: 30px; }
			to { width: 10px; }
		}

		@keyframes grow3 {

			from { width: 20px; }
			to { width: 5px; }
		}

		.line {

			position: absolute;
			border-top: 2px solid white;
			left: 0;

			&:nth-child(1) {

				width: 40px;
				top: 0;
				left: 0;
			}

			&:nth-child(2) {

				width: 30px;
				top: 50%;
				left: 10px;
			}

			&:nth-child(3) {

				width: 20px;
				top: 100%;
				left: 20px;
			}
		}

		&:hover {

			.line {

				&:nth-child(1) {

					animation-name: grow1;
					animation-duration: 500ms;
					animation-direction: alternate;
					animation-iteration-count: infinite;
				}

				&:nth-child(2) {

					animation-name: grow2;
					animation-duration: 500ms;
					animation-delay: 500ms;
					animation-direction: alternate;
					animation-iteration-count: infinite;
				}

				&:nth-child(3) {

					animation-name: grow3;
					animation-duration: 500ms;
					animation-direction: alternate;
					animation-iteration-count: infinite;
				}
			}
		}
	}

</style>