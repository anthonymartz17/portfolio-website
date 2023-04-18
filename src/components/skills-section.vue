<script>
import MartzIcon from "../components/icons/martz-icons.vue";
export default {
	components: { MartzIcon },
	data() {
		return {
			title: "Skills",
			skillId: "vue",
			skillsName: [
				{ id: "vue", name: "vue.js", icon: "V", size: "90" },
				{ id: "javascript", name: "javaScript", icon: "JS", size: "79" },
				{ id: "css3", name: "css3", icon: "css", size: "79" },
				{ id: "html5", name: "html5", icon: "html", size: "79" },
				{ id: "sass", name: "sass", icon: "sass", size: "100" },
			],
			skillsDescriptions: [
				{
					id: "vue",
					description:
						"Vue Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
				},
				{
					id: "javascript",
					description:
						"javascript Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
				},
				{
					id: "css3",
					description:
						"Css Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
				},
				{
					id: "html5",
					description:
						"Html Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
				},
				{
					id: "sass",
					description:
						"Sass Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
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
	<div class="skills-wrapper">
		<div class="skills-container">
			<!-- <div class="background-icon">{{ scrollPosition }}</div> -->
			<h2 class="sections-title-global">{{ title }}</h2>
			<div class="skills-body">
				<div class="skills-icons-container">
					<div
						class="skill-icon"
						v-for="icon in skillsName"
						:key="icon.id"
						@click="switchSkillId(icon.id)"
					>
						<!-- added additional div to align icons to the bottom and from there control individual size of icons -->
						<div class="icon">
							<MartzIcon
								:icon="icon.id"
								:color="skillId == icon.id ? 'accent' : 'white'"
								:size="icon.size"
							/>
						</div>
						<p>{{ icon.name }}</p>
						<!-- <div  v-if="icon.id == skillId">{{scrollPosition}}</div> -->
					</div>
				</div>
				<div class="skill-description-container">
					<p>{{ skillDescription.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accent {
	background: $accent;
}
.skills-wrapper {
	padding: 2em;
	background: $bg-2;
	display: flex;
	justify-content: center;
}
.skills-container {
	margin-bottom: 4em;
	color: $white;
	position: relative;
	@include breakpoint(tablet) {
		width: 85%;
	}
	@include breakpoint(desktop) {
		width: 70%;
	}
}
.skills-body {
	@include breakpoint(tablet) {
		display: flex;
		gap: 2em;

		.skills-icons-container {
			flex: 1;
		}
		.skill-description-container {
			flex: 1;
			font: $font-text-mb;
		}
	}
}
.skills-icons-container {
	margin-bottom: 1.5em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 0.5em;
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
	// border: 1px solid;
	height: 6em;
	width: 6em;
	margin-bottom: 0.5em;
	display: flex;
	justify-content: center;
	align-items: end;
}
</style>
