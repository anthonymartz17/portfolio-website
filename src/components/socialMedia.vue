<script>
import MartzIcon from "./icons/martz-icons.vue";
export default {
	components: {
		MartzIcon,
	},
	data() {
		return {
			receiverEmail: "antonio.fr.martinezc@hotmail.com",
			mediaContacts: [
				{
					icon: "email",
					name: "E-mail",
					url: "mailto:antonio.fr.martinezc@hotmail.com",
				},
				{
					icon: "linkedin",
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/antoniomartinez17/",
				},
				{
					icon: "github",
					name: "Github",
					url: "https://github.com/anthonymartz17",
				},
				{
					icon: "instagram",
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
		<div
			v-for="media in mediaContacts"
			:key="media.name"
			class="icon-container"
		>
			<a :href="media.url" target="blank">
				<MartzIcon :icon="media.icon" :size="30"  class="icon" />
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

	@include breakpoint(desktop) {
		.icon-container {
			&:hover .icon {
				color: $accent;
			}
		}
	}

	.icon {
		font-size: 1.2em;
		transition: 0.3s ease-in-out;

		@include breakpoint(tablet) {
			font-size: 1.5em;
		}
	}
	a {
		color: rgba($white, 0.8);
	}
}
</style>
