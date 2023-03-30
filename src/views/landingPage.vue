<script>
import SocialMedia from "../components/socialMedia.vue";
export default {
	components: {
		SocialMedia,
	},
};
</script>

<template>
	<div class="container">
		<header>
			<h1 class="lg-title">Antonio Martinez</h1>
			<h2 class="l-title">Front-End Dev</h2>
		</header>
		<div class="headshot-img">
			<img src="/img/headshotMobile.png" alt="" />
		</div>
		<div class="links">
			<router-link :to="{ name: 'portfolio' }" class="landing-btn">
				<font-awesome-icon icon="fa-solid fa-briefcase" class="icon" />
				<span>Portfolio</span>
				<div class="arrow">
					<font-awesome-icon icon="fa-solid fa-angle-right" />
				</div>
			</router-link>
			<div class="landing-btn">
				<font-awesome-icon icon="fa-brands fa-youtube" />
				<span
					>Watch

					<small>me talk projects</small>
				</span>
			</div>
			<div class="landing-btn">
				<font-awesome-icon icon="fa-brands fa-blogger" />
				<span
					>Read
					<small>projects articles</small>
				</span>
			</div>
		</div>
		<SocialMedia />
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-family: $font-poppins;
	background: $bg-1;
	height: 100vh;
	color: $white;
	padding: 1em;
}
.headshot-img {
	display: flex;
	justify-content: center;
	width: 13em;
}

.l-title {
	font: $font-title-mb;
	text-align: center;
}
.links {
	width: 70%;
}

.landing-btn {
	@include baseButton($white, _, 100%);
	span {
		display: block;
		position: relative;
	}
	small {
		color: rgba($white, 0.3);
		position: absolute;
		bottom: -11px;
		left: 0px;
		display: block;
		font: $font-small-mb;
		min-width: 10em;
	}
	.arrow {
		color: $accent;
		flex: 1;
		text-align: right;
	}
	// transition: 0.3s ease-in-out;
	// &:hover {
	// 	color: $white;
	// }
}
</style>
