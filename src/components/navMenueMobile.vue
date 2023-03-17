<script>
import SocialMedia from "./socialMedia.vue";
export default {
	components: {
		SocialMedia,
	},
	data() {
		return {
			navLinks: [
				{icon: "fa-solid fa-house", link: "Home", active: true},
				{
					icon: "fa-solid fa-hands-holding-circle",
					link: "Work",
					active: false,
				},
				{icon: "fa-regular fa-lightbulb", link: "Skills"},
				{icon: "fa-regular fa-address-card", link: "About"},
				{icon: "fa-brands fa-blogger", link: "Blogs"},
				{icon: "fa-solid fa-handshake", link: "Hire Me", accent: true},
			],
		};
	},
	methods:{
		fireToggleMobileMenue(){
			this.$emit("fireToggleMobileMenue")
		}
	}
};
</script>

<template>
	<div class="nav-container">
		<div class="nav-container-header" @click="fireToggleMobileMenue">
			<font-awesome-icon icon="fa-solid fa-angle-left" class="nav-container-arrow" />
			<p>back</p>
		</div>
		<ul class="nav-container-links">
			<li
				:class="['nav-container-link', {accent: link.accent}]"
				v-for="link in navLinks"
				:key="link.link">
				<font-awesome-icon :icon="link.icon" />
				<span>{{ link.link }}</span>
			</li>
		</ul>
		<div class="footer">
			<SocialMedia />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accent {
	text-transform: uppercase;
	font-weight: 600;
	span {
		position: relative;
	}
	span::after {
		content: "|";
		position: absolute;
		right: -10px;
		color: $accent;
	}
}
.nav-container {
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2em;
	background: $background-2;
	height: 100vh;
	font: $font-text-mb;
	border-left: 1px solid rgba($white, 0.1);

	&-header {
		flex: .5;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 1px solid rgba($white, 0.3);
	}
	&-arrow{
		color: $accent;
	}
	&-links {
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 1.3em;
		color: $white;
	}
	&-links {
		flex: 8;
	}
	&-link {
		list-style: none;

		span {
			margin-left: 1em;
		}
	}
	.footer {
		flex: 1;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
}
</style>
