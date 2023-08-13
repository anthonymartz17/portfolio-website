<script>
import MartzIcon from "@/components/icons/martz-icons.vue";
import BlogNavMenue from "../../components/blog/blog-mobile-menue.vue";
import BlogHomeNavMenue from "../../components/blog/blog-desktop-menu.vue";
import BlogFooter from "../../components/blog/blog-footer.vue";
export default {
	components: { MartzIcon, BlogHomeNavMenue, BlogFooter, BlogNavMenue },
	data() {
		return {
			isMenueOpen: false,
			navLinks: [
				{
					icon: "home",
					name: "Portfolio",
					route: "portfolio",
				},
				{
					icon: "blog",
					name: "BLOGS",
					route: "home-blog",
				},
				{
					icon: "write",
					name: "CREATE",
					route: "admin-app",
				},
				{
					icon: "logout",
					name: "LOG OUT",
					route: "home-blog",
				},
			],
		};
	},
	mounted() {
		this.$aos.init({
			duration: 800,
			offset: 200,
			// disable: "mobile",
		});
	},
	methods: {
		toggleMobileMenue() {
			this.isMenueOpen = !this.isMenueOpen;

			if (this.isMenueOpen) document.body.classList.add("mobile-menu-open");
			else document.body.classList.remove("mobile-menu-open");
		},
	},
};
</script>
<template>
	<div class="home-blogs-wrapper">
		<div class="home-blogs-container">
			<nav>
				<div
					class="blog-nav-container"
					v-if="isMenueOpen"
					@click.self="toggleMobileMenue"
				>
					<BlogNavMenue
						@emitToggleMenue="toggleMobileMenue"
						:navLinks="navLinks"
					/>
				</div>
			</nav>
			<div class="home-blogs-container">
				<header>
					<div
						class="home-blog-header-wrapper"
						data-aos="fade-down"
						data-aos-duration="800"
					>
						<div class="home-blogs-header">
							<div class="logo">
								<router-link to="/">
									<MartzIcon class="thelogo" icon="logo" size="60" />
								</router-link>
							</div>
							<div class="header-nav-menue" @click="toggleMobileMenue">
								<MartzIcon
									id="menue-icon"
									class="menue-icon"
									:size="30"
									icon="ham-menue"
								/>
							</div>
							<BlogHomeNavMenue
								:navLinks="navLinks"
								@emitToggleMenue="toggleMobileMenue"
								class="desktop-menu"
							/>
						</div>
					</div>
				</header>

				<main>
					<div class="main-wrapper">
						<router-view class="routerView" />
					</div>
				</main>
			</div>
			<div class="blog-footer-wrapper">
				<BlogFooter class="the-footer" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
body.mobile-menu-open {
	overflow: hidden;
}
.home-blogs-wrapper {
	background: $bg-2;
	min-height: 100vh;
	color: $white;
}
.home-blogs-main-wrapper {
	margin: 1em;
}

.home-blog-header-wrapper {
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.075);
}
.blog-footer-wrapper {
	min-height: 25em;
	// padding-block: 1em;
}
// .the-footer{
// 	width: ;
// }
.home-blogs-header {
	position: relative;
	padding: 0.8em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	z-index: 5;

	.clickable {
		pointer-events: none;
	}
}
.blog-nav-container {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;
	backdrop-filter: blur(5px);
}
.main-wrapper {
	display: flex;
	justify-content: center;
	padding-top: 3em;
}
.routerView {
	margin: 0 1em 5em 1em;
}

.home-blogs-wrapper {
	@include breakpoint(tablet) {
		.routerView {
			width: 95%;
		}
	}

	@include breakpoint(desktop) {
		.desktop-menu {
			flex: 2;
			display: flex;
			justify-content: flex-end;
		}
		.header-nav-menue {
			display: none;
		}
		.main-wrapper {
			display: flex;
			justify-content: center;
		}
		.routerView {
			width: 75%;
		}
		.home-blog-header-wrapper {
			display: flex;
			justify-content: center;
		}
		.home-blogs-header {
			width: 80%;
			display: flex;
		}
		.logo {
			flex: 1;
			display: flex;
		}
	}
}
</style>
