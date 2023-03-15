<script>
import NavMenueMobile from "../components/navMenueMobile.vue";
export default {
	components: {
		NavMenueMobile,
	},
};
</script>
<template>
	<div>
		<header>
			<NavMenueMobile />
			<div class="hearder-container">
				<div class="logo">MARTZ</div>
				<div class="nav-menue">
					<font-awesome-icon icon="fa-solid fa-bars" size="2x" />
				</div>
			</div>
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
					<div class="hero-cta btn">
						<font-awesome-icon icon="fa-solid fa-hands-holding" />
						<span>View Work</span>
					</div>
				</div>
			</section>
		</main>
	</div>

	<!-- <font-awesome-icon icon="fa-brands fa-youtube" />
				<font-awesome-icon icon="fa-brands fa-blogger" />
				<font-awesome-icon icon="fa-solid fa-handshake" />
				<font-awesome-icon icon="fa-solid fa-hands-holding" />
				<font-awesome-icon icon="fa-regular fa-lightbulb" />
				
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
.hearder-container {
	background: $background-1;
	padding: 1em 1.5em;
	color: $white;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	height: 10vh;

	.logo {
		font: $font-text-mb;
	}
}

.hero-section {
	height: 90vh;
	padding: 1em 1.5em;
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
}
.btn {
	position: relative;
	font: $font-btn-mb;
	padding: 0.3em 0.8em;
	width: 10em;
	border: 1px solid rgba($white, 0.5);
	border-radius: 5px;
	cursor: pointer;
	color: $white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.4em;
	// transition: 0.3s ease-in-out;
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
</style>
