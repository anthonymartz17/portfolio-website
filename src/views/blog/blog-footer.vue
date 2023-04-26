<script>
import SocialMedia from "./social-media.vue";
import MartzIcon from "@/components/icons/martz-icons.vue";

export default {
	components: {
		SocialMedia,
		MartzIcon,
	},
	data() {
		return {
			section: "",
			navLinks: [
				{ icon: "home", name: "Home", route: "portfolio" },
				{ icon: "blog", name: "Blogs", route: "home-blog" },
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
	<div class="blog-footer-wrapper">
		<div class="footer-container">
			<div class="logo-socialMedia">
				<div class="logo-container">
					<div class="logo">MARTZ</div>
				</div>
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
	background: rgba(255, 255, 255, 0.075);
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

.media {
	width: 70%;
}
.copyRight {
		// justify-self: flex-end;
		font: $font-small-mb;
		text-align: center;
	}
.footer-container {
	width: 100%;
	height: 100%;
	@include breakpoint(tablet) {
		.media {
			width: 50%;
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
			flex: 2;
			flex-direction: column;
			gap: 1em;
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
	.logo {
		font: $font-title-mb;
		font-size: 1.2em;
		margin-bottom: 1em;
		text-align: center;
	}

}
</style>
