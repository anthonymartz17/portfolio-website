<script>
import SocialMedia from "../components/socialMedia.vue";
import BaseButton from "../components/baseButton.vue";
export default {
	components: {
		SocialMedia,
		BaseButton,
	},
	data() {
		return {
			links: [
				{ text: "Portfolio", icon: "portfolio", route: "portfolio" },
				{ text: "Watch", icon: "youtubetv", secondText: "talk projects" },
				{
					text: "Read",
					icon: "ereading",
					secondText: "blog about projects",
					route: "home-blog",
				},
			],
		};
	},
};
</script>

<template>
	<div class="landing-wrapper">
		<div class="container">
			<header class="header">
				<h1 class="lg-title">Antonio Martinez</h1>
				<h2 class="l-title">Front-End Dev</h2>
			</header>
			<div class="landing-body">
				<div class="headshot-img">
					<img class="headshot" src="/img/headshotMobile.png" alt="" />
					<img class="fullbody" src="/img/lookingDown.png" alt="" />
				</div>
				<div class="links">
					<template v-for="link in links">
						<router-link
							v-if="link.route"
							:to="{ name: link.route }"
							:key="link.icon"
							class="landing-btn"
						>
							<BaseButton
								class="landing-btn"
								:text="link.text"
								:icon="link.icon"
								:size="30"
							/>
						</router-link>

						<a
							v-if="!link.route"
							:key="link.icon"
							class="resetLink"
							href="https://www.youtube.com/channel/UCVECqgVfRZ4b_XFbp6-MvTQ"
							target="blank"
						>
							<BaseButton
								:text="link.text"
								:icon="link.icon"
								:size="30"
								class="landing-btn"
							/>
						</a>
					</template>
				</div>
				<SocialMedia class="social-media" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.icon {
	fill: black;
}
.landing-wrapper {
	height: 100vh;
	background: $bg-1;
	@include breakpoint(tablet) {
		display: flex;
		justify-content: center;
	}
	@include breakpoint(lg-device) {
		position: relative;
	}
}
.container {
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-family: $font-poppins;
	color: $white;
	padding: 1em;
	@include breakpoint(tablet) {
		width: 70%;
	}
	@include breakpoint(lg-device) {
		justify-content: center;
		
	}
}
.header {
	flex: 1;
}
.landing-body {
	flex: 4;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	@include breakpoint(lg-device) {
		width: 100%;
		flex-direction: row;
		justify-content: center;
	}
}
.links {
	width: 100%;
	@include breakpoint(lg-device) {
		width: 35%;
		z-index: 10;
	}
}
.social-media {
	@include breakpoint(lg-device) {
	}
}
.headshot-img {
	width: 13em;
	@include breakpoint(tablet) {
		width: 15em;
	}
	@include breakpoint(lg-device) {
		width: 15em;
		position: absolute;
		right: -10em;
	
	}

	.fullbody {
		display: none;
	
	}
	@include breakpoint(lg-device) {
		.headshot {
			display: none;
		}
		.fullbody {
			display: flex;
		}
	}
}
.lg-title {
	flex: 1;
	@include breakpoint(tablet) {
		font: $font-xl-tb;
	}
	@include breakpoint(lg-device) {
		font: $font-xxl-dsk;
	}
}
.l-title {
	font: $font-title-mb;
	text-align: center;
	@include breakpoint(tablet) {
		font: $font-title-tb;
	}
	@include breakpoint(lg-device) {
		font: $font-xl-dsk;
	}
}

.landing-btn {
	flex: 1;
	margin-bottom: 0.5em;
	text-decoration: none;
	width: 100%;
	@include breakpoint(tablet) {
		font: $font-btn-tb;
	}
	@include breakpoint(lg-device) {
		width: 100%;
	}

	.social-media {
		position: absolute;
		top: 0;
	}
}
</style>
