<template>
	<button class="button">
		<slot />
	</button>
</template>

<script>
	export default {
		name: 'BaseButton',
		props: {
			classes: {
				type: Object,
				default: () => ({}),
			},
		},
	}
</script>

<style lang="less">

	.button {

		-webkit-appearance: button;
		display: inline-block;
		font-weight: 400;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		vertical-align: middle;
		user-select: none;
		background-color: transparent;
		color: var(--body-color);
		border: 1px solid transparent;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		line-height: 1.5;
		border-radius: 0.25rem;
		transition: color .15s ease-in-out,
					background-color .15s ease-in-out,
					border-color .15s ease-in-out,
					box-shadow .15s ease-in-out;

		&:not(:disabled):not(.disabled) {

			cursor: pointer;
		}

		&.button-primary {

			color: white;
			background: var(--primary);
			border-color: var(--primary);

			&:hover {

				background: var(--primary-dark);
				border-color: var(--primary-dark);
			}
		}

		&.button-outline-primary {

			background-color: transparent;
			color: var(--primary);
			border-color: var(--primary);

			&:hover {

				color: white;
				background-color: var(--primary);
			}
		}

		&.button-link {

			color: var(--primary);
			border-color: transparent;
			background-color: transparent;

			&:hover {

				text-decoration: underline;
			}
		}

		// Sizes

		&.button-large {

			padding: 0.5rem 1rem;
			font-size: 1.25rem;
			line-height: 1.5;
			border-radius: 0.3rem;
		}

		&.button-small {

			padding: 0.25rem 0.5rem;
			font-size: .875rem;
			line-height: 1.5;
			border-radius: 0.2rem;
		}

		&.button-block {

			display: block;
			width: 100%;
		}

		&.disabled, &:disabled {

			opacity: .65;
			pointer-events: none;
		}
	}

</style>