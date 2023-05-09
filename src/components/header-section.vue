<script>
import NavMenueMobile from "./navMenueMobile.vue";
import DesktopMenue from "./desktopMenue.vue";
import MartzIcon from "./icons/martz-icons.vue";
export default {
	components: {
		NavMenueMobile,
		DesktopMenue,
		MartzIcon,
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
			<MartzIcon icon="logo" size="60"/>
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
		<div class="desk-menue-wrapper">
			<DesktopMenue v-on="$listeners"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.disableScroll {
	overflow: hidden !important;
	position: fixed !important;
}
.desk-menue-wrapper{
	display: none;
	@include breakpoint(desktop){
		display: block;
	}
}

.header-container {
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.075);
	position: relative;
	background: $bg-1;
	padding: 0.8em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: 10vh;
	z-index: 20;

	@include breakpoint(desktop){
		padding: 0.8em 4em;
	}
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

.header-nav-menue{
	@include breakpoint(desktop){
		display: none;
	}
}
</style>
