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
				// { id: "sass", name: "sass", icon: "sass", size: "100" },
			],
			skillsDescriptions: [
				{
					id: "vue",
					description:
						"I am  proficient in Vue.js development. I have a solid understanding of Vue components and the fundamentals of state management using Vuex. With a passion for creating dynamic and interactive user interfaces, I am very familiar with Vue directives and their role in adding behavior to HTML elements. I have gained practical experience in building single-page applications (SPAs) and utilizing Vue Router for smooth navigation. Through hands-on projects, I have honed my skills in integrating APIs to fetch and display data in Vue.js applications. My enthusiasm for learning and adapting to new technologies drives me to explore Vue CLI for efficient project setup and development. As a detail-oriented and collaborative team player, I am eager to contribute to projects that foster growth and innovation in the Vue.js ecosystem.",
				},
				{
					id: "javascript",
					description:
						"As a JavaScript developer, I have a solid understanding of essential JavaScript fundamentals, including variables, data types, operators, loops, conditional statements, functions, and objects. My proficiency in DOM manipulation allows me to create dynamic and interactive web pages. I have practical experience with asynchronous programming, effectively utilizing Promises, async/await, and handling callbacks for smooth API requests. Furthermore, I am well-versed in array methods like map, filter, reduce, and forEach, enabling efficient data manipulation. Closures and their applications in JavaScript are familiar concepts to me, and I am adept at event handling for clicks, input, and form submissions. Additionally, I have practical knowledge of local storage for data storage and an understanding of regular expressions for pattern matching and string manipulation. My grasp of modern JavaScript (ES6+) features, including arrow functions, destructuring assignments, spread operator, and template literals, enables me to write more concise and expressive code. With a passion for continuous learning and improvement, I am eager to contribute and grow as a valuable asset to any development team.",
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
				// {
				// 	id: "sass",
				// 	description:
				// 		"Sass Lorem ipsum dolor sit, amet consectetur adipisicing elit Architecto minus voluptas illo deleniti laboriosam unde harum,porro minima non. Vel quod aut velit fugit a laborum iure nonvoluptate ullam",
				// },
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
			<h2
				class="sections-title-global"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				{{ title }}
			</h2>
			<div
				class="skills-body"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="250"
			>
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
						<p class="icon-name">{{ icon.name }}</p>
						<!-- <div  v-if="icon.id == skillId">{{scrollPosition}}</div> -->
					</div>
				</div>
				<div class="skill-description-container">
					<p class="text-p">{{ skillDescription.description }}</p>
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
	padding: 2em 1em;
	background: $bg-2;
	display: flex;
	justify-content: center;
}
.skills-container {
	margin-bottom: 4em;
	color: $white;
	position: relative;
}

.skill-icon {
	display: grid;
	place-items: center;
}
.skills-icons-container {
	margin-bottom: 1.5em;
	display: grid;
	grid-template-columns: 1fr 1fr;
	row-gap: 2.5em;
}
.icon-name {
	text-align: center;
	font: $font-text-mb;
}
.icon {
	height: 6em;
	width: 6em;
	margin-bottom: 0.5em;
	display: flex;
	justify-content: center;
	align-items: end;
}

.skills-wrapper {
	@include breakpoint(tablet) {
		.skills-container {
			width: 85%;
		}

		.skills-icons-container {
			flex: 1;
		}
		.skill-description-container {
			flex: 1;
			font: $font-text-mb;
		}
	}
	@include breakpoint(desktop) {
		.skills-container {
			width: 60%;
			margin-bottom: 10em;
		}
		.skills-body {
			display: flex;
		}
	}
}
</style>
