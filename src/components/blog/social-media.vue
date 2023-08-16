<script>
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";

export default {
	components: {
		MartzIcon,
	},
	data() {
		return {
			receiverEmail: "antonio.fr.martinezc@hotmail.com",
			mediaContacts: [
				{
					icon: "email.svg",
					name: "E-mail",
					url: "mailto:antonio.fr.martinezc@hotmail.com",
				},
				{
					icon: "linkedin.svg",
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/antoniomartinez17/",
				},
				{
					icon: "github.svg",
					name: "Github",
					url: "https://github.com/anthonymartz17",
				},
				{
					icon: "instagram.svg",
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
			<MartzIcon :icon="media.icon" size="50" />

			<a :href="media.url" target="blank"> 
			</a>
		</div>
	</div>
</template>
<style lang="scss" scoped>

.social-media-container {
	width: 100%;
	// margin-bottom: 1em;
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	.icon {
		font-size: 1.5em;
		transition: 0.3s ease-in-out;

		@include breakpoint(tablet) {
			font-size: 1.6em;
		}
	}
	a {
		color: rgba($white, 0.8);
	}
}
</style>
