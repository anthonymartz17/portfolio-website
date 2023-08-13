<script>
import NavMenueMobile from "./navMenueMobile.vue";
import DesktopMenue from "../desktopMenue.vue";
import MartzIcon from "../icons/martz-icons.vue";
import BaseButton from "../buttons/baseButton.vue";
import "animate.css";
import { mapGetters } from 'vuex';
export default {
	components: {
		NavMenueMobile,
		DesktopMenue,
		MartzIcon,
		BaseButton,
	},
	data() {
		return {
			navLinks: [
				{ id: "Home", icon: "home", name: "Home", active: true },
				{ id: "Work", icon: "mywork", name: "Work", active: false },
				{ id: "Skills", icon: "skills", name: "Skills", active: false },
				{ id: "About", icon: "about", name: "About", active: false },
				{ icon: "blog", name: "Blogs", route: "home-blog" },
				{ id: "Hire Me", icon: "handshake", name: "Hire Me", active: false },
				{
					id: "admin",
					icon: "login",
					name: "ADMIN",
					route: "admin-page",
					requireAuth: true,
				},
			],
		};
	},
	props: ["scrollPosition", "isMenueVisible"],
	methods: {
		createEmitToggleMenue() {
			this.$emit("emitToggleMenue");
		},
	},
	computed: {
		...mapGetters("auth",["isLoggedIn"]),
		filterNavLinks() {
			let links;
			if (this.isLoggedIn) {
				links = this.navLinks
			} else {
				links = this.navLinks.filter(x => !x.requireAuth)
			}
			return links
		}
	}
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
				<router-link to="/">
					<MartzIcon class="thelogo" icon="logo" size="60" />
				</router-link>
			</div>

			<div class="header-nav-menue">
				<MartzIcon
					id="menue-icon"
					class="menue-icon"
					icon="ham-menue"
					size="30"
					@click.native="createEmitToggleMenue()"
				/>
			</div>
			<div class="navmenue-wrapper" @click.self="createEmitToggleMenue()">
				<transition
					enter-active-class="animate__animated animate__slideInRight animate__faster"
					leave-active-class="animate__animated animate__slideOutRight animate__faster"
				>
					<NavMenueMobile
						v-if="isMenueVisible"
						v-on="$listeners"
						:navLinks="filterNavLinks"
					/>
				</transition>
			</div>
			<div class="desk-menue-wrapper">
				<DesktopMenue v-on="$listeners" :navLinks="filterNavLinks" />
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
