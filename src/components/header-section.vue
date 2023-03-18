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
		<div
			v-if="isMenueVisible"
			class="header-container-mobile-nav-modal"
			@click="toggleMobileMenue">
			<NavMenueMobile
				class="header-container-mobile-nav"
				@fireToggleMobileMenue="toggleMobileMenue" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header-container {
	background: $background-1;
	padding: 0.5em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	height: 7vh;
	// border-bottom: 1px solid rgba($white, 0.1);

	&-logo {
		font: $font-text-mb;
		z-index: 100;
	}

	.clickable {
		pointer-events: none;
	}

	&-mobile-nav-modal {
		position: absolute;
		display: flex;
		justify-content: flex-end;
		top: 0;
		right: 0;
		width: 100vw;
		background: rgba($background-1, 0.9);
		z-index: 10;
	}
	&-mobile-nav {
		z-index: 11;
		width: 70%;
	}
}
</style>
