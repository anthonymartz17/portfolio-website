<script>
import SocialMedia from "../components/socialMedia.vue";
import MartzIcon from "../components/icons/martz-icons.vue";
export default {
	components: {
		SocialMedia,
		MartzIcon,
	},
	data() {
		return {
			navLinks: [
				{ icon: "fa-solid fa-house", name: "Home", active: true },
				{
					icon: "fa-solid fa-hands-holding-circle",
					name: "Work",
					active: false,
				},
				{ icon: "fa-regular fa-lightbulb", name: "Skills" },
				{ icon: "fa-regular fa-address-card", name: "About" },
				{ icon: "fa-brands fa-blogger", name: "Blogs", route: "home-blog" },
				{ icon: "fa-solid fa-handshake", name: "Hire Me", accent: true },
			],
			year: new Date().getFullYear(),
		};
	},
	methods: {
		emitScrollToEvent(section) {
			this.$emit("scrollToEvent", section);
		},
	},
};
</script>
<template>
	<div class="footer-wrapper">
		<div class="backhome">
			<MartzIcon icon="angleUp" size="50" />
		</div>
		<div class="the-footer">
			<div class="logo-socialMedia">
				<div class="logo">MARTZ</div>
				<SocialMedia class="media" />
			</div>

			<ul class="footer-nav">
				<template v-for="link in navLinks">
					<li
						class="link-item"
						v-if="!link.route"
						@click="emitScrollToEvent(link.name)"
						:key="link.name"
					>
						{{ link.name }}
					</li>
					<router-link
						class="link-item"
						v-if="link.route"
						:to="{ name: link.route }"
						:key="link.name"
						>{{ link.name }}</router-link
					>
				</template>
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
.footer-wrapper {
	z-index: 10;
	position: relative;
	background: rgba(255, 255, 255, 0.075);
	padding-inline: 1em;
	display: flex;
	align-items: center;
	min-height: 50vh;
}
.backhome{
	z-index: 1;
	position: absolute;
	top: -96px;
	left: 50%;
	transform: translate(-50%);
	background:  rgba(255, 255, 255, 0.075);
	width: 7em;
	height: 6em;
	display: grid;
	place-items: center;
	padding-top: 3em;
	// border-radius: 70px;
	clip-path: circle(50.4% at 51% 100%);
}
.the-footer {
	flex: 1;
	color: $white;
}

.footer-nav {
	font: $font-small-mb;
	margin: 0;
	padding: 0;
	text-indent: 0;
	list-style-type: 0;
	display: flex;
	justify-content: space-between;
	margin-bottom: 3em;

	li {
		list-style: none;
	}
	.link-item {
		color: $white;
		text-decoration: none;
	}
}
.logo-socialMedia {
	display: grid;
	place-items: center;
}
.logo {
	text-align: center;
	margin-bottom: 3em;
}
.media {
	font-size: 1.2em;
	margin-bottom: 1.5em;
}
.copyRight {
	font: $font-small-mb;
	text-align: center;
}

.footer-wrapper {
	@include breakpoint(tablet) {
		.the-footer {
			display: grid;
			grid-template-areas:
				"logo-media links"
				"copyright copyright";
			row-gap: 4em;
		}
		.link-item {
			font-size: 1.2em;
			font: $font-text-mb;
			cursor: pointer;
		}
		.logo-socialMedia {
			grid-area: logo-media;
		}

		.footer-nav {
			grid-area: links;
			display: grid;
			place-items: center;
			grid-template-columns: 1fr 1fr;
			gap: 1em;
		}
		.copyRight {
			grid-area: copyright;
		}
	}
	@include breakpoint(desktop) {
		.the-footer {
			width: 70%;
			margin-top: 3em;
			padding-bottom: 0;
			display: flex;
			justify-content: space-between;
			gap: 2em;
		}

		.footer-nav {
			width: 30%;
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		.logo-socialMedia {
			flex: 1;
		}
		.copyRight {
			flex: 1;
		}
	}
}
</style>
