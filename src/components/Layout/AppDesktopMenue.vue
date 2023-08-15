<script>

import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";

export default {
	components: {
		MartzIcon,
	},
	props: {
		navLinks: {
			type: Array,
			required: true,
		}
	},
	emit: ["scrollTo"],

	methods: {
		emitScrollToEvent(section) {
			this.navLinks.find((x) => x.active).active = false;
			this.navLinks.find((x) => x.name == section).active = true;

			if (section) this.$emit("scrollToEvent", section);
		},
	},
};
</script>

<template>
	<!-- <div class="menu-wrapper"> -->
	<div class="nav-container">
		<ul class="nav-container-links">
			<template v-for="link in navLinks">
				<li
					@click="emitScrollToEvent(link.id)"
					v-if="!link.route"
					:id="link.id"
					:class="[
						'nav-container-link',
						{ accent: link.id == 'Hire Me', active: link.active == true },
					]"
					:key="link.name"
				>
					<!-- <MartzIcon :icon="link.icon" size="20" :id="link.id" /> -->
					<span :id="link.id">{{ link.name }}</span>
				</li>
				<router-link
					:to="{ name: link.route }"
					v-if="link.route"
					:key="link.name"
					class="nav-container-link"
				>
					<!-- <MartzIcon :icon="link.icon" size="20" /> -->
					<span>{{ link.name }}</span>
				</router-link>
			</template>
		</ul>
	</div>
	<!-- </div> -->
</template>

<style lang="scss" scoped>
.active {
	span {
		color: $accent;
		// border-bottom: 1px solid $white;
	}
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

.nav-container {
	// padding: 1em 1em;
	display: flex;
	justify-content: space-between;
	gap: 2em;
	// width: 70%;
	font: $font-text-mb;

	&-links {
		padding: 0;
		display: flex;
		// justify-content: flex-start;
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
		cursor: pointer;

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
