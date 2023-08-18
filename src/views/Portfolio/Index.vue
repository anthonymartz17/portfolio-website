<script>
import Home from "@/components/Portfolio/HomeSection.vue";
import AppHeader from "@/components/Layout/AppHeader.vue";
import Work from "@/components/Portfolio/WorkSection.vue";
import Skills from "@/components/Portfolio/SkillsSection.vue";
import Aboutme from "@/components/Portfolio/AboutSection.vue";
import Hireme from "@/components/Portfolio/HiremeSection.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
export default {
	components: {
		Home,
		AppHeader,
		Work,
		Skills,
		Aboutme,
		Hireme,
		AppFooter,
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
	mounted() {
		this.$aos.init({
			duration: 800,
			offset: 200,
			// disable: "mobile",
		});
	},
	created() {
		window.addEventListener("scroll", this.updateScrollPosition);
	},
	destroyed() {
		window.removeEventListener("scroll", this.updateScrollPosition);
	},

	beforeDestroy() {
		this.isMenueVisible = false;
		document.body.classList.remove("mobile-menu-open");
	},
	methods: {
		// toggleMobileMenue() {
		// 	this.isMenueVisible = !this.isMenueVisible;
		// 	if (this.isMenueVisible) document.body.classList.add("mobile-menu-open");
		// 	else document.body.classList.remove("mobile-menu-open");
		// },
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
	<div class="app-wrapper">
		<header>
			<AppHeader
				ref="theTop"
				:class="{ 'fixed-header': isScrollingUp }"
				v-if="!showMore"
				@scrollToEvent="scrollTo($event)"
				:scrollPosition="scrollPosition"
				navigationOption="portfolio"
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
		<footer><AppFooter @scrollToEvent="scrollTo($event)" /></footer>
	</div>
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
.app-wrapper {
	background: $bg-2;
}
</style>
