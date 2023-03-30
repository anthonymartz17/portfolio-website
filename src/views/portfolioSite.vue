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
		scrollTo(section) {
			this.$refs[section].scrollIntoView({ behavior: "smooth" });
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
	<div class="portfolio-container">
	
		<header class="header">
			<Header
				@fireScrollTo="scrollTo"
				:scrollPosition="scrollPosition"
				:class="{ 'fixed-header': isScrollingUp }"
			/>
		</header>
		<main>
			<section ref="Home"><Home @scrollToEvent="scrollTo('Work')" /></section>
			<section ref="Work"><Work /></section>
			<section ref="Skills"><Skills /></section>
			<section ref="About"><Aboutme /></section>
			<section ref="Hire Me"><Hireme /></section>
		</main>
		<footer><Footer /></footer>
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

<style lang="scss" scoped>

.fixed-header {
	position: fixed;
	width: 100%;
}

.background-icon {
	position: fixed;
	pointer-events: none;
	top: 150px;
	left: 20%;
	right: 20%;
	font: $font-xl-mb;
	color: rgba($white, 0.05);
	font-size: 5em;
}
</style>
