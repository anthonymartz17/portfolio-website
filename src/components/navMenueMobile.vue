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
			section: "",
			navLinks: [
				{ id: "Home", icon: "home", name: "Home", active: true },
				{ id: "Work", icon: "mywork", name: "Work", active: false },
				{ id: "Skills", icon: "skills", name: "Skills" },
				{ id: "About", icon: "about", name: "About" },
				{ icon: "blog", name: "Blogs", route: "home-blog" },
				{ id: "Hire Me", icon: "handshake", name: "Hire Me", accent: true },
			],
		};
	},
	emit: ["scrollTo"],
	beforeDestroy() {
		if(this.section)
		this.$emit("scrollToEvent", this.section);
	},
	methods: {
		emitCloseEvent() {
			this.$emit("emitToggleMenue");
		},
		setSection(section) {
			this.section = section;
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
			@click="emitCloseEvent"
		>
			<font-awesome-icon
				id="close-icon"
				icon="fa-solid fa-angle-left"
				class="nav-container-arrow"
			/>
			<p id="close">Close</p>
		</div>
		<ul class="nav-container-links">
			<template v-for="link in navLinks">
				<li
					@click="emitCloseEvent(); setSection(link.id)"
					v-if="!link.route"
					:id="link.id"
					:class="['nav-container-link', { accent: link.accent }]"
					:key="link.name"
				>
					<MartzIcon :icon="link.icon" size="20" :id="link.id" />
					<span :id="link.id">{{ link.name }}</span>
				</li>
				<router-link
					:to="{ name: link.route }"
					v-if="link.route"
					:key="link.name"
					class="nav-container-link"
				>
					<MartzIcon :icon="link.icon" size="20" />
					<span>{{ link.name }}</span>
				</router-link>
			</template>
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
