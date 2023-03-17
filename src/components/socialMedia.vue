<script>
export default {
	data() {
		return {
			mediaContacts: [
				{icon: "fa-regular fa-envelope", name: "E-mail", url: ""},
				{icon: "fa-brands fa-linkedin-in", name: "LinkedIn", url: ""},
				{icon: "fa-brands fa-github", name: "Github", url: ""},
				{icon: "fa-brands fa-instagram", name: "Instagram", url: ""},
			],
		};
	},
};
</script>
<template>
	<div class="social-media-container">
		<div v-for="media in mediaContacts" :key="media.name">
			<font-awesome-icon :icon="media.icon" class="icon"  />
		</div>
	</div>
</template>
<style lang="scss" scoped>
.social-media-container {
	width: 65%;
	margin-bottom: 1em;
	display: flex;
	justify-content: space-between;
	color: rgba($white, 0.8);
	cursor: pointer;
	.icon {
		transition: 0.3s ease-in-out;

		&:hover {
			color: $white;
		}
	}
}
</style>
