<script>
import SocialMedia from "../components/socialMedia.vue";
export default {
	components: {
		SocialMedia,
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
		<div class="the-footer">
			<div class="logo-socialMedia">
				<div class="logo">MARTZ</div>
				<SocialMedia class="media" />
			</div>

			<div class="footer-nav">
				<ul>
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
			</div>
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
	background: rgba(255, 255, 255, 0.075);
	padding-inline:1em;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 50vh;
}
.the-footer {
	flex: 1;
	color: $white;

	@include breakpoint(tablet) {
		width: 85%;
	}
	@include breakpoint(desktop) {
		width: 40%;
		margin-top: 3em;
		padding-bottom: 0;
		.link-item {
			font-size: 1.2em;
		}
	}
}

.footer-nav {
	font: $font-small-mb;

	ul {
		margin: 0;
		padding: 0;
		text-indent: 0;
		list-style-type: 0;
		display: flex;
		justify-content: space-between;
		margin-bottom: 3em;
	}
	li {
		list-style: none;
	}
	.link-item {
		color: $white;
		text-decoration: none;
	}
}
.logo-socialMedia{
	width: 80%;
	background: red;
}
.logo {
	text-align: center;
	margin-bottom: 3em;
}
.media {
	width: 100%;
	font-size: 1.2em;
	margin-bottom: 1.5em;
}
.copyRight {
	font: $font-small-mb;
	text-align: center;
}
</style>
