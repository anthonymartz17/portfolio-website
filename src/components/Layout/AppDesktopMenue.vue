<script>
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
import { mapActions } from "vuex";

export default {
	components: {
		MartzIcon,
	},
	props: {
		navLinks: {
			type: Array,
			required: true,
		},
	},
	emit: ["scrollTo"],

	methods: {
		...mapActions("auth", ["signOut"]),
		async navigate(link) {
			if (link.name == "Log Out") {
				await this.signOut();
			}
			if (link.section) {
				this.navLinks.find((x) => x.active).active = false;
				this.navLinks.find((x) => x.name == link.section).active = true;
				this.$emit("scrollToEvent", link.section);
			}
			if (link.route) {
				if (link.route != this.$route.name)
					this.$router.push({ name: link.route });
			}
		},
	},
};
</script>

<template>
	<!-- <div class="menu-wrapper"> -->
	<div class="nav-container">
		<ul class="nav-container-links">
			<li
				v-for="link in navLinks"
				:key="link.name"
				@click="navigate(link)"
				:class="[
					'nav-container-link',
					{
						accent: link.section == 'Hire Me',
						active: link.active == true,
						subMenue: link.subMenue,
					},
				]"
			>
				<span>{{ link.name }}</span>

				<ul v-if="link.subMenue" class="subMenue-items">
					<li
						@click.stop="navigate(subItem)"
						class="subItem"
						v-for="subItem in link.subMenue"
						:key="subItem.name"
					>
						{{ subItem.name }}
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<!-- </div> -->
</template>

<style lang="scss" scoped>
.active {
	color: $accent !important;
}
.accent {
	text-transform: uppercase;
	font-weight: 600;

	position: relative;

	&::after {
		content: "|";
		position: absolute;
		right: -10px;
		color: $accent;
	}
}

.nav-container {
	display: flex;
	justify-content: space-between;
	gap: 2em;
	font: $font-text-mb;
}
.nav-container-links {
	padding: 0;
	display: flex;
	gap: 1.6em;
	color: $white;
}
.nav-container-links {
	flex: 8;
}
.nav-container-link {
	position: relative;
	list-style: none;
	text-decoration: none;
	display: flex;
	color: $white;
}

.subMenue::after {
	content: "⯆";
}

.subMenue-items {
	display: none;
	position: absolute;
	bottom: -117px;
	left: 0;
	list-style: none;
	min-width: 12em;
	padding: 0;
	border: 1px solid rgba(255, 255, 255, 0.233);

	li {
		position: relative;
		padding: 1em;
		width: 100%;
		border-block: 1px solid transparent;
	}
}
.footer {
	flex: 1;
	display: flex;
	align-items: flex-end;
	justify-content: center;
}

@include breakpoint(tablet) {
}
@include breakpoint(desktop) {
	.nav-container-link {
		display: flex;
		color: $white;
		cursor: pointer;
		transition: all 250ms;
		padding: 0.5em;
	}
	.nav-container-link:hover span {
		color: $accent;
	}

	.subMenue:hover .subMenue-items {
		display: block;
	}

	.subMenue-items {
		li {
			transition: background-color 0.2s ease-in-out;
		}
		li:hover {
			background: $bg-2-lighter;
			border-block: 1px solid rgba(255, 255, 255, 0.623);
		}
	}
}
</style>
