<script>
export default {
	data() {
		return {
			receiverEmail: "antonio.fr.martinezc@hotmail.com",
			mediaContacts: [
				{
					icon: "fa-regular fa-envelope",
					name: "E-mail",
					url: "mailto:antonio.fr.martinezc@hotmail.com",
				},
				{
					icon: "fa-brands fa-linkedin-in",
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/antoniomartinez17/",
				},
				{
					icon: "fa-brands fa-github",
					name: "Github",
					url: "https://github.com/anthonymartz17",
				},
				{
					icon: "fa-brands fa-instagram",
					name: "Instagram",
					url: "https://instagram.com/martz_code?igshid=ZDdkNTZiNTM=",
				},
			],
		};
	},
};
</script>
<template>
	<div class="social-media-container">
		<div v-for="media in mediaContacts" :key="media.name">
			<a :href="media.url" target="blank">
				<font-awesome-icon :icon="media.icon" class="icon" />
			</a>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.social-media-container {
	width: 65%;
	margin-bottom: 1em;
	display: flex;
	justify-content: space-between;

	cursor: pointer;
	.icon {
		transition: 0.3s ease-in-out;

		&:hover {
			color: $white;
		}
	}
	a {
		color: rgba($white, 0.8);
	}
}
</style>
