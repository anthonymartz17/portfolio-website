<script>
import SocialMedia from "@/components/socialMedia.vue";
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
				{ icon: "home", name: "HOME", route: "portfolio" },
				{ icon: "blog", name: "BLOGS", route: "home-blog" },
				{ icon: "blog", name: "CREATE", route: "create-post" },
			],
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
	<div class="nav-container">
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
	</div>
</template>

<style lang="scss" scoped>
.nav-container {
	display: none;
	@include breakpoint(desktop) {
		display: flex;
		background: none;
		height: auto;
		width: 100%;
		font: $font-text-mb;
		.nav-container-link {
			list-style: none;
		}

		.nav-container-links {
			display: flex;
			gap: 2em;
		}
		.nav-container-link {
			transition: 250ms ease-in-out;
			cursor: pointer;
			&:hover {
				color: $accent;
			}
		}
	}
}
</style>
