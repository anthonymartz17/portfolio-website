<script>
import SocialMedia from "./socialMedia.vue";
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
				{ icon: "fa-brands fa-blogger", name: "Blogs" },
				{ icon: "fa-solid fa-handshake", name: "Hire Me", accent: true },
			],
		};
	},
	emit: ["scrollTo"],
	methods: {
		fireToggleMobileMenue() {
			this.$emit("fireToggleMobileMenue");
		},
		emitScrollToEvent(section) {
			this.$emit("scrollToEvent", section);
		},
	},
};
</script>

<template>
	<!-- <div class="menu-wrapper"> -->
	<div class="nav-container">
		<div class="nav-container-header" @click="fireToggleMobileMenue">
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
				class="nav-container-arrow"
			/>
			<p>Close</p>
		</div>
		<ul class="nav-container-links">
			<li
				@click="emitScrollToEvent(link.name)"
				:class="['nav-container-link', { accent: link.accent }]"
				v-for="link in navLinks"
				:key="link.name"
			>
				<font-awesome-icon :icon="link.icon" />
				<span>{{ link.name }}</span>
			</li>
		</ul>
		<div class="footer">
			<SocialMedia />
		</div>
	</div>
	<!-- </div> -->
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
// .menu-wrapper {
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	height: 100vh;
// 	width: 100wh;
// 	z-index: 10;
// }
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
	// backdrop-filter: blur(5px);

	&-header {
		flex: 0.5;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 1px solid rgba($white, 0.3);
	}
	&-arrow {
		color: $accent;
	}
	&-links {
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 1.3em;
		color: $white;
	}
	&-links {
		flex: 8;
	}
	&-link {
		list-style: none;

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
