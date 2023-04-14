<script>
import NavMenueMobile from "./navMenueMobile.vue";

export default {
	components: {
		NavMenueMobile,
	},
	data() {
		return {};
	},
	props: ["scrollPosition", "isMenueVisible"],
	methods: {
		createEmitToggleMenue() {
			this.$emit("emitToggleMenue");
		},
	},
};
</script>
<template>
	<div :class="['header-container', { 'header-bg-2': scrollPosition >= 550 }]">
		<div :class="['header-container-logo', { clickable: isMenueVisible }]">
			MARTZ
		</div>
		<div class="header-nav-menue">
			<font-awesome-icon
				id="menue-icon"
				class="menue-icon"
				icon="fa-solid fa-bars"
				size="2x"
				@click="createEmitToggleMenue()"
			/>
		</div>
		<div id="nav-menue-wrapper" class="navmenue-wrapper" @click.self="createEmitToggleMenue()">
			<NavMenueMobile v-if="isMenueVisible" v-on="$listeners" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.disableScroll {
	overflow: hidden !important;
	position: fixed !important;
}

.header-container {
	position: relative;
	background: $bg-1;
	padding: 0.8em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: 10vh;
	// border-bottom: 1px solid rgba($white, 0.1);
	z-index: 20;

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
.header-bg-2 {
	background: $bg-2;
}
</style>
