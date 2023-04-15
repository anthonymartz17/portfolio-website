<script>
import Home from "../components/home.section.vue";
import Header from "../components/header-section.vue";
import Work from "../components/projects/work-section.vue";
import Skills from "../components/skills-section.vue";
import Aboutme from "../components/aboutme-section.vue";
import Hireme from "../components/hireme-section.vue";
import Footer from "../components/the-footer.vue";
export default {
	components: {
		Home,
		Header,
		Work,
		Skills,
		Aboutme,
		Hireme,
		Footer,
	},
	data() {
		return {
			scrollPosition: 0,
			isScrollingUp: false,
			isMenueVisible: false,
			showMore: false,
			secctionsScrollPosition: [
				{
					section: "home",
					scroll_position_start: 0,
					scroll_position_end: 550,
				},
			],
		};
	},

	created() {
		window.addEventListener("scroll", this.updateScrollPosition);
	},
	destroyed() {
		window.removeEventListener("scroll", this.updateScrollPosition);
	},
	methods: {
		toggleMobileMenue() {
			this.isMenueVisible = !this.isMenueVisible;
			if (this.isMenueVisible) document.body.classList.add("mobile-menu-open");
			else document.body.classList.remove("mobile-menu-open");
		},
		toggleShowMore(showMore) {
			this.showMore = showMore;
			if (this.showMore) document.body.classList.add("mobile-menu-open");
			else document.body.classList.remove("mobile-menu-open");
		},
		scrollTo(section) {
			this.$refs[section].scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		},
		updateScrollPosition() {
			this.scrollPosition = window.pageYOffset;
		},
	},
	watch: {
		scrollPosition(a, b) {
			if (a > b || a == 0) {
				this.isScrollingUp = false;
			} else {
				this.isScrollingUp = true;
			}
		},
	},
};
</script>
<template>
	<div class="test">
		<header :class="{ 'fixed-header': isScrollingUp }">
			<Header
				v-if="!showMore"
				@emitToggleMenue="toggleMobileMenue"
				:isMenueVisible="isMenueVisible"
				@scrollToEvent="scrollTo($event)"
				:scrollPosition="scrollPosition"
			/>
		</header>
		<main>
			<section ref="Home"><Home @scrollToEvent="scrollTo($event)" /></section>
			<section ref="Work">
				<Work @emitToggleShowMore="toggleShowMore($event)" />
			</section>
			<section ref="Skills"><Skills /></section>
			<section ref="About"><Aboutme /></section>
			<section ref="Hire Me"><Hireme /></section>
		</main>
		<footer><Footer @scrollToEvent="scrollTo($event)" /></footer>
	</div>

	<!-- <font-awesome-icon icon="fa-brands fa-youtube" />
				<font-awesome-icon icon="fa-brands fa-blogger" />
				<font-awesome-icon icon="fa-solid fa-handshake" />
				<font-awesome-icon icon="fa-solid fa-hands-holding" />
				<font-awesome-icon icon="fa-regular fa-lightbulb" />
				<font-awesome-icon icon="fa-solid fa-xmark" />
				<font-awesome-icon icon="fa-regular fa-address-card" />
				<font-awesome-icon icon="fa-solid fa-circle-info" />
				<font-awesome-icon icon="fa-solid fa-house" />
				<font-awesome-icon icon="fa-solid fa-eye" />
				<font-awesome-icon icon="fa-solid fa-paper-plane" />
				<font-awesome-icon icon="fa-solid fa-play" />
				<font-awesome-icon icon="fa-solid fa-tv" />
				<font-awesome-icon icon="fa-brands fa-readme" />
				<font-awesome-icon icon="fa-solid fa-angle-left" />
				<font-awesome-icon icon="fa-brands fa-vuejs" />
				<font-awesome-icon icon="fa-solid fa-globe" />
				<font-awesome-icon icon="fa-solid fa-message" /> -->
</template>

<style lang="scss">
body.mobile-menu-open {
	overflow: hidden;
}

.fixed-header {
	position: fixed;
	width: 100%;
	z-index: 100;
}
</style>
