<script>
import MartzIcon from "@/components/icons/martz-icons.vue";
import BlogNavMenue from "./blog-mobile-menue.vue";
export default {
	components: { MartzIcon, BlogNavMenue },
	data() {
		return {
			isMenueOpen: false,
		};
	},
	methods: {
		toggleMobileMenue() {
			console.log('testing firing from menu no supposed to')
			this.isMenueOpen = !this.isMenueOpen;
			console.log(this.isMenueOpen);
			if (this.isMenueOpen) document.body.classList.add("mobile-menu-open");
			else document.body.classList.remove("mobile-menu-open");
		},
	},
};
</script>
<template>
	<div class="home-blogs-wrapper">
		<nav>
			<div
				class="blog-nav-container"
				v-if="isMenueOpen"
				@click.self="toggleMobileMenue"
			>
				<BlogNavMenue @emitToggleMenue="toggleMobileMenue" />
			</div>
		</nav>
		<div class="home-blogs-container">
			<header>
				<div class="home-blogs-header">
					<!-- :class="['header-container-logo', { clickable: isMenueVisible }]" -->
					<div>MARTZ</div>
					<div class="header-nav-menue" @click="toggleMobileMenue">
						<font-awesome-icon
							id="menue-icon"
							class="menue-icon"
							icon="fa-solid fa-bars"
							size="2x"
						/>
					</div>
				</div>
			</header>

			<main>
				<router-view class="home-blogs-main-wrapper"/>
			</main>
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
	padding-bottom: 3em;
}
.home-blogs-main-wrapper {
	margin: 1em;
}
.home-blogs-header {
	position: relative;
	background: $bg-2;
	padding: 0.8em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
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

.home-blogs-wrapper {
	@include breakpoint(tablet) {
	}

	@include breakpoint(desktop) {
	}
}
</style>
