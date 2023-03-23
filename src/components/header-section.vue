<script>
import NavMenueMobile from "./navMenueMobile.vue";

export default {
	components: {
		NavMenueMobile,
	},
	data() {
		return {
			isMenueVisible: false,
		};
	},
	methods: {
		toggleMobileMenue() {
			this.isMenueVisible = !this.isMenueVisible;
			console.log(this.isMenueVisible);
			if (this.isMenueVisible) {
				document.body.classList.add("disableScroll");
			} else {
				document.body.classList.remove("disableScroll");
			}
		},
	},
};
</script>

<template>
	<div class="header-container">
		<div :class="['header-container-logo', {clickable: isMenueVisible}]"
			>MARTZ</div
		>
		<div class="header-nav-menue">
			<font-awesome-icon
				icon="fa-solid fa-bars"
				size="2x"
				@click="toggleMobileMenue" />
		</div>
		<div class="navmenue-wrapper">
			<NavMenueMobile
				v-if="isMenueVisible"
				@fireToggleMobileMenue="toggleMobileMenue" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header-container {
	position: relative;
	background: $background-1;
	padding: 0.5em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	height: 7vh;
	border-bottom: 1px solid rgba($white, 0.1);

	&-logo {
		font: $font-text-mb;
	}

	.clickable {
		pointer-events: none;
	}
}
.navmenue-wrapper {
	display: flex;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;
	backdrop-filter: blur(5px);
}
</style>
