<script>
import SocialMedia from "@/components/SocialMedia.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";

export default {
	components: {
		SocialMedia,
		MartzIcon,
	},

	props: {
		navLinks: {
			type: Array,
			required: true,
		},
	},
	emit: ["scrollTo"],
	beforeDestroy() {
		if (this.section) this.$emit("scrollToEvent", this.section);
	},
	methods: {
		emitCloseEvent() {
			this.$emit("emitToggleMenue");
		},
		setSection(link) {
			if (link.section) this.section = link.section;
		},
	},
};
</script>

<template>
	<div class="nav-container">
		<div
			class="nav-container-header"
			id="close-header"
			@click="emitCloseEvent()"
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
			<!-- links that do not change the route -->
			<li
				:class="['nav-container-link', { accent: link.accent }]"
				v-for="link in navLinks"
				:key="link.name"
				@click="
					emitCloseEvent();
					setSection(link);
				"
			>
				<div v-if="!link.route" :id="link.id" :key="link.name" class="no-route-link">
					<MartzIcon :icon="link.icon" size="20" :id="link.id" />
					<span :id="link.id">{{ link.name }}</span>
				</div>

				<!-- links that take to a different route -->
				<router-link
					v-if="link.route"
					:to="{ name: link.route }"
					:key="link.name"
					class="nav-container-link route-link"
				>
					<MartzIcon :icon="link.icon" size="20" />
					<span>{{ link.name }}</span>
				</router-link>
			</li>
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
.route-link, .no-route-link{
	display: flex;
	width: 100%;
}
.nav-container-header {
	flex: 0.5;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	border-bottom: 1px solid rgba($white, 0.3);
	cursor: pointer;
}
.nav-container-arrow {
	color: $accent;
}
.nav-container-links {
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1.6em;
	color: $white;
	flex: 8;
}

.nav-container-link {
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
	@include breakpoint(desktop) {
	}
}
</style>
