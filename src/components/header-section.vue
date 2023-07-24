<script>
import NavMenueMobile from "./navMenueMobile.vue";
import DesktopMenue from "./desktopMenue.vue";
import MartzIcon from "./icons/martz-icons.vue";
import "animate.css";
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
	<div class="header-wrapper">
		<div
			data-aos="fade-down"
			data-aos-duration="800"
			:class="['header-container', { 'header-bg-2': scrollPosition >= 550 }]"
		>
			<div :class="['header-container-logo', { clickable: isMenueVisible }]">
				<MartzIcon class="thelogo" icon="logo" size="60" />
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
			<div class="navmenue-wrapper" @click.self="createEmitToggleMenue()">
				<transition
					enter-active-class="animate__animated animate__slideInRight animate__faster"
					leave-active-class="animate__animated animate__slideOutRight animate__faster"
				>
					<NavMenueMobile v-if="isMenueVisible" v-on="$listeners" />
				</transition>
			</div>
			<div class="desk-menue-wrapper">
				<DesktopMenue v-on="$listeners" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header-wrapper {
	background: $bg-1;
}
.disableScroll {
	overflow: hidden !important;
	position: fixed !important;
}
.desk-menue-wrapper {
	display: none;
}
.header-container-logo {
	cursor: pointer;
}

.header-container {
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.075);
	position: relative;
	padding-inline: 0.8em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	z-index: 20;

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

.header-wrapper {
	@include breakpoint(desktop) {
		.desk-menue-wrapper {
			display: block;
		}

		.header-container {
			padding: 0.8em 4em;
			align-items: flex-end;
		}
		.header-container-logo {
			align-self: flex-end;
		}
		.header-nav-menue {
			display: none;
		}
	}
}
</style>
