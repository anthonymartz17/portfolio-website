<script>
import MartzIcon from "../components/icons/martz-icons.vue";
export default {
	components: {
		MartzIcon,
	},
	data() {
		return {
			title: "About me",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti quam excepturi laboriosam similique repudiandae earum sunt odit nisi illum! Voluptate provident veritatis iste eveniet distinctio quis vero reiciendis dolorem.",
			hobbiesIcons: [
				"audioBook",
				"workout",
				"meditation",
				"cooking",
				"salsaDance",
			],
		};
	},
	props: ["scrollPosition"],

	methods: {},
	computed: {},
};
</script>

<template>
	<div class="aboutme-wrapper">
		<div class="aboutme-container">
			<h2 class="sections-title-global">{{ title }}</h2>
			<div class="about-body">
				<div class="aboutme-img">
					<img src="/img/project2.jpeg" alt="pictures of antonio's hobbies" />
				</div>
				<div class="aboutme-description">
					<div class="parragraph">
						<p>{{ description }}</p>
						<br />
						<p>{{ description }}</p>
					</div>
					<div class="hobbies-icons-container">
						<MartzIcon
							class="icon"
							:icon="icon"
							v-for="icon in hobbiesIcons"
							:key="icon"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accent {
	background: $accent;
}
.aboutme-wrapper {
	background: $bg-2;
	display: flex;
	justify-content: center;
}
.aboutme-container {
	padding: 0 1.5em;
	padding-bottom: 4em;
	color: $white;
	position: relative;
	@include breakpoint(tablet) {
		width: 85%;
	}
	@include breakpoint(desktop) {
		width: 70%;
		max-width: 70%;
	}
}
.about-body {
	@include breakpoint(tablet) {
		.aboutme-img {
			flex: 2;
		}
		.aboutme-description {
			flex: 1.5;
			// font: $font-thin-text-tb;
			@include breakpoint(desktop) {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

			}
		}
	}
	@include breakpoint(desktop) {
		display: flex;
		gap: 1em;
	}
}
.aboutme-description {
	font: $font-thin-text-mb;
	margin-bottom: 1em;
}

.aboutme-img {
	margin-bottom: 1.5em;
	height: 50%;
	width: 100%;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
}
.hobbies-icons-container {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 1em;
}
.icon {
	// aspect-ratio: 1/1;
	// border: 1px solid;
	height: 5em;
	width: 5em;
	// margin: 5em;
	margin-bottom: 0.5em;
	opacity: 0.2;
}
</style>
