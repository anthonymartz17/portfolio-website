<script>
export default {
	data() {
		return {
			title: "Skills",
			skillId: "vue",
			skillsName: [
				{ id: "vue", name: "vue.js", icon: "V" },
				{ id: "js", name: "javaScript", icon: "JS" },
				{ id: "css", name: "css3", icon: "css" },
				{ id: "html", name: "html5", icon: "html" },
				{ id: "sass", name: "sass", icon: "sass" },
			],
			skillsDescriptions: [
				{
					id: "vue",
					description:
						"Vue Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
					icon: "V",
				},
				{
					id: "js",
					description:
						"javascript Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
					icon: "JS",
				},
				{
					id: "css",
					description:
						"Css Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
					icon: "css",
				},
				{
					id: "html",
					description:
						"Html Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
					icon: "html",
				},
				{
					id: "sass",
					description:
						"Sass Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
					icon: "sass",
				},
			],
		};
	},
	props: ["scrollPosition"],

	methods: {
		switchSkillId(id) {
			this.skillId = id;
		},
	},
	computed: {
		skillDescription() {
			return this.skillsDescriptions.find((one) => one.id == this.skillId);
		},
	},
};
</script>

<template>
	<div class="skills-container">
		<div class="background-icon">{{ scrollPosition }}</div>
		<h2 class="sections-title-global">{{ title }}</h2>
		<div class="skills-icons-container">
			<div
				class="skill-icon"
				v-for="icon in skillsName"
				:key="icon.id"
				@click="switchSkillId(icon.id)"
			>
				<div :class="['icon', { accent: icon.id == skillId }]">
					{{ icon.icon }}
				</div>
				<p>{{ icon.name }}</p>
				<!-- <div  v-if="icon.id == skillId">{{scrollPosition}}</div> -->
			</div>
		</div>
		<div class="skill-description-container">
			<p>{{ skillDescription.description }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accent {
	background: $accent;
}
.skills-container {
	padding: 1.5em;
	background: $bg-2;
	color: $white;
	position: relative;
	height: 100vh;
}
.skills-icons-container {
	margin-bottom: 1.5em;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	row-gap: 2.5em;
}
.skill-icon {
	// z-index: 2;
	p {
		text-align: center;
		font: $font-text-mb;
	}
}
.icon {
	// aspect-ratio: 1/1;
	border: 1px solid;
	height: 6em;
	width: 6em;
	margin-bottom: 0.5em;
}
</style>
