<template>
	<div class="media-object">
		<img class="media avatar" :src="`${ $config.apiUrl }/users/${ user.id }/avatar?size=30`" :alt="user.nicename">
		<div class="media-body">
			<p>{{ user.nicename || 'User' }}</p>
			<p><small><a @click.prevent="emailCallback()">{{ user.login }}</a></small></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserMediaObject',
		props: {
			user: {
				type: Object,
				required: true,
			}
		},
		methods: {
			emailCallback() {

				this.$emit('emailClicked', this.user);
			}
		}
	}
</script>

<style lang="less">

	.media-object {

		display: flex;
		align-items: flex-start;

		.media-body p {

			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}


</style>