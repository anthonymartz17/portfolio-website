<script>
import SocialMedia from "./socialMedia.vue";
import MartzIcon from "../components/icons/martz-icons.vue";
export default {
	components: {
		SocialMedia,
		MartzIcon,
	},
	data() {
		return {
			navLinks: [
				{ icon: "home", name: "Home", active: true },
				{
					icon: "mywork",
					name: "Work",
					active: false,
				},
				{ icon: "skills", name: "Skills" },
				{ icon: "about", name: "About" },
				{ icon: "blog", name: "Blogs" },
				{ icon: "handshake", name: "Hire Me", accent: true },
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
		<div class="nav-container-header" id="close-header">
			<font-awesome-icon
				id="close-icon"
				icon="fa-solid fa-angle-left"
				class="nav-container-arrow"
			/>
			<p id="close">Close</p>
		</div>
		<ul class="nav-container-links">
			<li
				:id="link.name"
				@click="emitScrollToEvent(link.name)"
				:class="['nav-container-link', { accent: link.accent }]"
				v-for="link in navLinks"
				:key="link.name"
			>
				<MartzIcon :icon="link.icon" size="20" />
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
* {
	border: 1px solid;
}
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
		cursor: pointer;
	}
	&-arrow {
		color: $accent;
	}
	&-links {
		background: red;
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
		display: flex;

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
