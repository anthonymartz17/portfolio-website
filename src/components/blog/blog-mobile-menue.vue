<script>
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import { mapActions, mapGetters } from "vuex";

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
			if (link != null) {
				if (link.name == "LOG OUT") {
					await this.signOut();
				}
				if (link.route != this.$route.name) {
					this.$router.push({ name: link.route });
				}
			}
			this.$emit("emitToggleMenue");
		},

		setSection(section) {
			this.section = section;
		},
	},
	computed: {
		...mapGetters("auth", ["isLoggedIn"]),
		filteredLinks() {
			return this.isLoggedIn
				? this.navLinks
				: this.navLinks.filter((x) => !x.authRequired);
		},
	},
};
</script>

<template>
	<!-- <div class="menu-wrapper"> -->
	<div class="nav-container">
		<div
			class="nav-container-header"
			id="close-header"
			@click="navegateBlog(null)"
		>
			<MartzIcon
				id="close-icon"
				icon="angleLeft"
				size="20"
				class="nav-container-arrow"
			/>
			<p id="close">Close</p>
		</div>
		<ul class="nav-container-links">
			<li
				id="fromRoute"
				v-for="link in filteredLinks"
				@click="navegateBlog(link)"
				:key="link.name"
				class="nav-container-link"
			>
				<MartzIcon :icon="link.icon" size="20" />
				<span>{{ link.name }}</span>
			</li>
			<!-- </router-link> -->
		</ul>
		<div class="footer">
			<SocialMedia />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accent {
	text-transform: uppercase;
	font-weight: 600;
	span {
		position: relative;
	}
	span::after {
		content: "|";
		position: absolute;
		right: -10px;
		color: $accent;
	}
}
.nav-container-link {
	cursor: pointer;
}

.nav-container {
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2em;
	background: $bg-2;
	height: 100vh;
	width: 70%;
	font: $font-text-mb;
	border-left: 1px solid rgba($white, 0.3);
	@include breakpoint(tablet) {
		font: $font-text-tb;
	}

	&-header {
		flex: 0.5;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 1px solid rgba($white, 0.3);
		cursor: pointer;
	}
	&-arrow {
		color: $accent;
	}
	&-links {
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 1.6em;
		color: $white;
	}
	&-links {
		flex: 8;
	}
	&-link {
		list-style: none;
		text-decoration: none;
		display: flex;
		color: $white;

		span {
			margin-left: 1em;
		}
	}
	.footer {
		flex: 1;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
}
</style>
