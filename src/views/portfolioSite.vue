<script>
import Header from "../components/header-section.vue";
import Work from "../components/projects/work-section.vue";
export default {
	components: {
		Header,
		Work,
	},
};
</script>
<template>
	<div>
		<header class="header">
			<Header />
		</header>
		<main>
			<section>
				<div class="hero-section">
					<div class="hero-section-headshot">
						<img src="/img/headshotMobile.png" alt="" />
					</div>
					<div class="hero-section-text-container">
						<h1 class="hero-section-title"
							>Hi,<br />
							I'm Antonio Martinez,<br /><span>Front-end </span
							>developer</h1
						>
						<p class="hero-section-text"
							>I care about the responsibilities that I'm trusted
							with.</p
						>
						<div></div>
					</div>
					<div class="hero-section-cta">
						<font-awesome-icon icon="fa-solid fa-hands-holding" />
						<span>View Work</span>
					</div>
				</div>
			</section>
			<section> <Work /> </section>
		</main>
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
// .header {
// 	position: sticky;
// 	top: 0;
// 	z-index: 1;
// }
.hero-section {
	height: 93vh;
	padding: 3em 1.5em;
	background: $background-1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	&-headshot {
		display: flex;
		justify-content: center;
		width: 12em;
		align-self: center;
	}
	&-title {
		color: $white;
		font: $font-title-mb;
		margin-bottom: 1em;

		span {
			color: $accent;
		}
	}
	&-text {
		color: $white;
		font: $font-text-mb;
		margin-bottom: 2em;
	}

&-cta {
	@include baseButton($white);
	position: relative;
	z-index: 0;
	span {
		display: block;
	}
	&::after {
		content: ">>";
		position: absolute;
		top: 7px;
		right: 5px;
		color: $accent;
	}

	////////////desktop view///////////
	// &::after {
	// 	content: ">>";
	// 	position: absolute;
	// 	opacity: 0;
	// 	top: 7px;
	// 	right: -7px;
	// 	transition: 0.5s;
	// 	color: $accent;
	// }
	// &:hover {
	// 	padding-left: 0.5em;
	// 	border: 1px solid rgba($white, 0.6);
	// }
	// &:hover::after {
	// 	opacity: 1;
	// 	right: 10px;
	// }
	}
}
</style>
