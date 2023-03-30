<script>
export default {
	data() {
		return {
			title: "About me",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti quam excepturi laboriosam similique repudiandae earum sunt odit nisi illum! Voluptate provident veritatis iste eveniet distinctio quis vero reiciendis dolorem.",
			hobbiesIcons: ["ebook", "gym", "meditation", "cooking", "salsa"],
		};
	},
	props: ["scrollPosition"],

	methods: {},
	computed: {},
};
</script>

<template>
	<div class="aboutme-container">
		<h2 class="sections-title-global">{{ title }}</h2>
		<div class="aboutme-img">
			<img src="/img/project2.jpeg" alt="pictures of antonio's hobbies" />
		</div>
		<div class="aboutme-description">
			<p>{{ description }}</p>
			<br />
			<p>{{ description }}</p>
		</div>

		<div class="hobbies-icons-container">
			<div class="icon" v-for="icon in hobbiesIcons" :key="icon"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accent {
	background: $accent;
}
.aboutme-container {
	padding: 1.5em;
	padding-bottom: 5em;
	background: $bg-2;
	color: $white;
	position: relative;
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
	margin-bottom: 1.5em;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	row-gap: 1.5em;
}
.icon {
	// aspect-ratio: 1/1;
	border: 1px solid;
	height: 6em;
	width: 6em;
	margin-bottom: 0.5em;
}
</style>
