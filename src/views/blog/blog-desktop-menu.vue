<script>
import SocialMedia from "@/components/socialMedia.vue";
import MartzIcon from "@/components/icons/martz-icons.vue";
import { mapActions } from "vuex";

export default {
	components: {
		SocialMedia,
		MartzIcon,
	},
	data() {
		return {
			section: "",
		};
	},

	emit: ["scrollTo"],
	props: {
		navLinks: {
			type: Array,
			require: true,
		},
	},
	methods: {
		...mapActions("auth", ["signOut"]),
		async navegateBlog(link) {
			if (link.name == "LOG OUT") {
				await this.signOut();
			} else if (link.route != this.$route.name) {
				this.$router.push({ name: link.route });
			}
		},
		guardAdminLink(link) {
			return link.authRequired && this.isLoggedIn === false ? false : true;
		},
	},

	computed: {
		filteredLinks() {
			return !this.isLoggedIn === true
				? this.navLinks
				: this.navLinks.filter((x) => x.authRequired === false);
		},
	},
};
</script>

<template>
	<div class="nav-container">
		<ul class="nav-container-links">
			<li
				id="fromRoute"
				v-for="link in filteredLinks"
				@click="navegateBlog(link)"
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
