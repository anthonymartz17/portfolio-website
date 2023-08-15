<script>
import SocialMedia from "../SocialMedia.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";

export default {
	components: {
		SocialMedia,
		MartzIcon,
	},
	data() {
		return {
			section: "",
			navLinks: [
				{ icon: "home", name: "Home", route: "Portfolio" },
				{ icon: "blog", name: "Blogs", route: "PostList" },
			],
			year: new Date().getFullYear(),
		};
	},

	emit: ["scrollTo"],

	methods: {
		replaceRoute(route) {
			if (route != null) {
				if (route != this.$route.name) {
					this.$router.replace({ name: route });
				}
			}
		},
	},
};
</script>

<template>
	<div class="blog-footer-wrapper" data-aos="fade-up" data-aos-duration="800">
		<div class="footer-container" >
			<div class="logo-socialMedia">
				<!-- <div class="logo-container">
					<MartzIcon icon="logo" size="80" />
				</div> -->
				<!-- <div class="social-media-container"> -->
				<SocialMedia class="media" />
				<!-- </div> -->
			</div>
			<ul class="nav-container-links">
				<li
					id="fromRoute"
					v-for="link in navLinks"
					@click="replaceRoute(link.route)"
					:key="link.name"
					class="nav-container-link"
				>
					{{ link.name }}
				</li>
			</ul>
			<div class="copyRight">
				<p>Designed and built by</p>
				<p>Antonio Martinez</p>
				<small>© {{ year }}</small>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.blog-footer-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	background: $bg-2-lighter;
	box-shadow: 0 -3px 5px rgba(255, 255, 255, 0.288);
}
.nav-container-link {
	list-style: none;
	font: $font-text-mb;
	padding: none;
}
.nav-container-links {
	padding: 0;
	display: flex;
	justify-content: center;
	gap: 2em;
	margin-bottom: 2em;
}
// .social-media-container {
// 	width: 80%;
// 	display: flex;
// 	justify-content: space-around;
// }
.logo-socialMedia {
	width: 100%;
	margin-bottom: 2em;
	display: grid;
	place-items: center;
}
.logo-container {
	margin-bottom: 2em;
}
.media {
	width: 70%;
}
.copyRight {
	font: $font-small-mb;
	text-align: center;
}
.footer-container {
	width: 100%;
	height: 100%;
	@include breakpoint(tablet) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2em;
		width: 90%;
		.logo-socialMedia {
			flex: 1;
			place-items: start;
		}
		.social-media-container {
			width: 100%;
		}
		.nav-container-links {
			flex: 2;
			gap: 1em;
			display: grid;
		}
	}
	@include breakpoint(desktop) {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 70%;

		.logo-socialMedia {
			flex: 2;
			place-items: start;
		}
		.social-media-container {
			width: 100%;
		}
		.nav-container-links {
			place-content: start;
		}
		.nav-container-link {
			margin-bottom: 0;
			transition: 250ms ease-in-out;
			cursor: pointer;
			&:hover {
				color: $accent;
			}
		}
		.copyRight {
			flex: 1;
			text-align: left;
			font: $font-text-mb;
			justify-self: flex-end;
		}
		.social-media-container {
			width: 50%;
		}
	}
}
</style>
