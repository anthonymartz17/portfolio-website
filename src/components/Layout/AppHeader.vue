<script>
import AppMobileMenue from "@/components/Layout/AppMobileMenue.vue";
import DesktopMenue from "./AppDesktopMenue.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import "animate.css";
import { mapGetters } from "vuex";
export default {
	components: {
		AppMobileMenue,
		DesktopMenue,
		MartzIcon,
		BaseButton,
	},
	data() {
		return {
			isMenueVisible: false,
			portfolioNavigation: [
				{ section: "Home", icon: "home", name: "Home", active: true },
				{ section: "Work", icon: "mywork", name: "Work", active: false },
				{ section: "Skills", icon: "skills", name: "Skills", active: false },
				{ section: "About", icon: "about", name: "About", active: false },
				{ icon: "blog", name: "Blogs", route: "PostList" },
				{
					section: "Hire Me",
					icon: "handshake",
					name: "Hire Me",
					active: false,
				},
				{
					id: "admin",
					icon: "login",
					name: "ADMIN",
					route: "Admin",
					requireAuth: true,
				},
			],
			blogNavigation: [
				{
					icon: "portfolio",
					name: "Portfolio",
					route: "Portfolio",
				},
				{
					icon: "blog",
					name: "Blogs",
					route: "PostList",
				},
			],
			adminNavigation: [
				{
					icon: "home",
					name: "Portfolio",
					route: "Portfolio",
				},
				{
					icon: "blog",
					name: "Blogs",
					subMenue: [
						{
							name: "Manage Blogs",
							route: "Admin",
						},
						{
							name: "Create New",
							route: "CreatePost",
						},
					],
				},
				{
					icon: "work",
					name: "Projects",
					subMenue: [
						{
							name: "Manage Projects",
							route: "ManageProject",
						},
						{
							name: "Create New",
							route: "CreateProject",
						},
					],
				},

				{
					icon: "logout",
					name: "Log Out",
					route: "PostList",
				},
			],
		};
	},
	props: ["scrollPosition", "navigationOption"],
	methods: {
		// createEmitToggleMenue() {
		// 	this.$emit("emitToggleMenue");
		// },
		toggleMobileMenue() {
			this.isMenueVisible = !this.isMenueVisible;
			if (this.isMenueVisible) document.body.classList.add("mobile-menu-open");
			else document.body.classList.remove("mobile-menu-open");
		},
	},
	computed: {
		...mapGetters("auth", ["isLoggedIn"]),
		//choose navigation menue to show based on prop "navigationOption"
		navigationMenue() {
			let navigation;
			switch (this.navigationOption) {
				case "blog":
					navigation = this.blogNavigation;
					break;
				case "admin":
					navigation = this.adminNavigation;
					break;

				default:
					if (this.isLoggedIn) {
						navigation = this.portfolioNavigation;
					} else {
						navigation = this.portfolioNavigation.filter((x) => !x.requireAuth);
					}

					break;
			}
			return navigation;
		},
	},
};
</script>
<template>
	<div
		ref="header"
		:class="[
			'header-wrapper',
			{
				'header-bg-1': scrollPosition <= 550,
				'header-bg-2': scrollPosition >= 550,
			},
		]"
	>
		<div data-aos="fade-down" data-aos-duration="800" class="header-container">
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
					@click.native="toggleMobileMenue()"
				/>
			</div>
			<div class="navmenue-wrapper" @click.self="toggleMobileMenue()">
				<transition
					enter-active-class="animate__animated animate__slideInRight animate__faster"
					leave-active-class="animate__animated animate__slideOutRight animate__faster"
				>
					<AppMobileMenue
						v-if="isMenueVisible"
						v-on="$listeners"
						:navLinks="navigationMenue"
						@emitToggleMenue="toggleMobileMenue"
					/>
				</transition>
			</div>
			<div class="desk-menue-wrapper">
				<DesktopMenue v-on="$listeners" :navLinks="navigationMenue" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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
.header-bg-1 {
	background: $bg-1;
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
			padding-inline: 4em;
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
