<script>
import BaseButton from "../baseButton.vue";
import ProjectDetail from "./project-details.vue";
import MartzIcon from "../icons/martz-icons.vue";
export default {
	components: { BaseButton, ProjectDetail, MartzIcon },
	data() {
		return {
			title: "Work",
			showMore: false,
			projectClicked: {},
			projects: [
				{
					id: 1,
					name: "Personal Website",
					short_desc:
						"Dynamic showcase of my skills, work, and passion for web development.",
					full_desc: [
						{
							id: "p1",
							text: "My portfolio website is a dynamic platform that showcases my work, skills, and passion for web development, aiming to demonstrate my proficiency to potential employers. ",
						},
						{
							id: "p2",
							text: "Among the technical skills included is the utilization of Vue.js, a JavaScript framework, for constructing the user interface in a component-based programming model. CSS and SASS were skillfully employed to handle the styles, while HTML5 targeted the markup. Page navigation was implemented through a combination of scrolling into view and the use of the Vue router. Additionally, I integrated email functionality into the contact form using the EmailJS library. ",
						},
						{
							id: "p3",
							text: "During the creation process, I faced the challenge of designing the website, despite not being a web designer. To ensure a professional and fundamentally sound appearance, I delved into the fundamentals of web design, such as visual hierarchy, alignment, proximity, balance, repetition, and typography. Valuable resources like YouTube, freecodecamp, and typescale.com assisted me in gaining a better understanding of these concepts.",
						},
						{
							id: "p4",
							text: "What I enjoyed the most was the implementation of custom icons. Dissatisfied with the available options in common libraries, I embarked on learning how to style SVGs. Drawing inspiration from the functionality of font awesome icon components, I developed a component that housed all the SVGs. This allowed me to customize the color, size, and specific icons using props. The Canva platform provided a source for the icons I chose, adding a touch of creativity to the design process. Overall, this experience was both enjoyable and rewarding.",
						},
					],

					img: "portfolio.png",
					thumbnail_main: "project1.jpeg",
					thumbnail_sec: "project1.jpeg",
					thumbnail_third: "project1.jpeg",
					technologies: [
						{ icon: "javascript", size: "70" },
						{ icon: "html5", size: "70" },
						{ icon: "css3", size: "70" },
						{ icon: "vue", size: "100" },
						{ icon: "sass", size: "100" },
					],
				},
				{
					id: 2,
					name: "This is project 2",
					short_desc:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
					full_desc:
						"Project 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptas illo deleniti laboriosam unde harum, porro minima non.Vel quod aut velit fugit a laborum iure non voluptate ullam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptas illo deleniti laboriosam unde harum, porro minima non. Vel quod aut velit fugit a laborum iure non voluptate ullam?",
					img: "project2.jpeg",
					thumbnail_main: "project2.jpeg",
					thumbnail_sec: "project2.jpeg",
					thumbnail_third: "project2.jpeg",
					technologies: [
						{ icon: "javascript", size: "70" },
						{ icon: "html5", size: "70" },
						{ icon: "css3", size: "70" },
						{ icon: "vue", size: "100" },
						{ icon: "sass", size: "100" },
					],
				},
				{
					id: 3,
					name: "This is project 3",
					short_desc:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
					full_desc:
						"Project 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptas illo deleniti laboriosam unde harum, porro minima non.Vel quod aut velit fugit a laborum iure non voluptate ullam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptas illo deleniti laboriosam unde harum, porro minima non. Vel quod aut velit fugit a laborum iure non voluptate ullam?",
					img: "project3.jpeg",
					thumbnail_main: "project3.jpeg",
					thumbnail_sec: "project3.jpeg",
					thumbnail_third: "project3.jpeg",
					technologies: [
						{ icon: "javascript", size: "70" },
						{ icon: "html5", size: "70" },
						{ icon: "css3", size: "70" },
						{ icon: "vue", size: "100" },
						{ icon: "sass", size: "100" },
					],
				},
			],
		};
	},

	methods: {
		toggleShowMore(projectClicked) {
			this.showMore = !this.showMore;
			this.projectClicked = projectClicked;
			this.$emit("emitToggleShowMore", this.showMore);
		},
	},
};
</script>

<template>
	<div class="project-wrapper">
		<div class="projects-container">
			<h2 data-aos="fade-up" class="projects-title sections-title-global">
				{{ title }}
			</h2>
			<div class="projects-list">
				<div
					data-aos="fade-up"
					data-aos-duration="800"
					:data-aos-delay="250 * idx"
					class="projects-project"
					v-for="(project, idx) in projects"
					:key="project.name"
					@click="toggleShowMore(project)"
				>
					<div class="projects-project-thumb">
						<img :src="`/img/${project.img}`" alt="" />
					</div>
					<div class="projects-project-desc">
						<h3>{{ project.name }}</h3>
						<p class="text-description">{{ project.short_desc }}</p>
						<div class="see-more">
							<p class="text-p">See more</p>
							<MartzIcon icon="angleRight" :size="15" color="accent" />
						</div>
						<!-- <BaseButton
							class="project-btn"
							@click.native="toggleShowMore(project)"
							text="See more"
							icon="see"
							color="accent"
							size="30"
							id="toggleProject"
						/> -->
					</div>
				</div>
				<div v-if="showMore" class="project-detail">
					<ProjectDetail
						:projectClicked="projectClicked"
						@fireToggleShowMore="toggleShowMore(projectClicked)"
					/>
				</div>
			</div>
			<div class="project-cards-container">
				<div
					class="cards-youtube project-cards"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<MartzIcon
						class="card-bg-icon"
						icon="youtubetv"
						size="190"
						color="white"
					/>
					<div class="card-title">
						<h4>watch</h4>
						<!-- <MartzIcon icon="youtubetv" size="30" color="accent" /> -->
					</div>
					<div class="card-body">
						<p>me discuss tech implementation in my projects</p>
						<div class="card-link">
							<a
								class="resetLink card-link-link"
								href="https://www.youtube.com/channel/UCVECqgVfRZ4b_XFbp6-MvTQ"
								target="blank"
							>
								<span> @martz_code</span>

								<MartzIcon icon="angleRight" size="20" color="accent" />
							</a>
						</div>
					</div>
				</div>
				<div
					class="card-blog project-cards"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<MartzIcon class="card-bg-icon" icon="ereading" size="190" />
					<h4>Read</h4>
					<p>articles about my work and my learning from them.</p>
					<div class="card-link">
						<router-link
							:to="{ name: 'home-blog' }"
							class="resetLink card-link-link"
						>
							<span> Check it out </span>
							<MartzIcon icon="angleRight" size="20" color="accent" />
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
box-shadow: 0 3px 10px rgba(255, 255, 255, 0.151);
<style lang="scss" scoped>
.project-wrapper {
	padding: 2em 1em;
	background: $bg-2;
	display: flex;
	justify-content: center;
}
.projects-container {
	color: $white;
}

.projects-project {
	margin-bottom: 1.5em;
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.151);
	background: rgba(255, 255, 255, 0.075);
	border: 1px solid rgba($white, 0.1);
	border-radius: 5px;
}

.projects-project-thumb {
	height: 16em;
	padding: 0.4em;
	img {
		border-radius: 5px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.projects-project-desc {
	// background: rgba(255, 255, 255, 0.075);
	padding: 1em 0.5em;
	font: $font-thin-text-mb;

	h3 {
		font: $font-subtitle-mb;
		color: rgba($white, 0.4);
	}

	.text-description {
		margin-bottom: 1em;
	}
}
.see-more {
	display: flex;
	align-items: center;
	gap: 1em;
	margin-bottom: 1em;
}
.project-cards-container {
	margin-block: 6em;
}
.project-cards {
	padding: 0.5em;

	h4 {
		font: $font-title-mb;
		color: rgba($white, 0.4);
		margin-bottom: 1.5em;
	}
	p {
		font: $font-thin-text-mb;
		margin-block: 0.5em;
	}
}
.cards-youtube {
	position: relative;
	border-bottom: 1px solid $white;
	padding-bottom: 5em;
	margin-bottom: 2em;
}
.card-blog {
	position: relative;
}
.card-bg-icon {
	position: absolute;
	top: 0;
	right: 10px;
	// z-index: 1;
	opacity: 0.05;
}
.card-link {
	display: flex;
	justify-content: flex-end;

	&-link {
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 1em;
		padding-bottom: 0.1em;
	}
	span {
		border-bottom: 1px solid $white;
	}
}
.angle-right {
	color: $accent;
	font-size: 1.3em;
}

.project-detail {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;
}
.project-btn {
	width: 100%;
}

.project-wrapper {
	@include breakpoint(tablet) {
		.project-cards-container {
			display: flex;
			gap: 4em;
		}
		.projects-list {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1em;
		}
		.cards-youtube {
			border: none;
		}
	}
	@include breakpoint(desktop) {
		.projects-container {
			width: 60%;
		}
		.project-cards-container {
			justify-content: space-around;
		}

		.projects-list {
			display: flex;
		}
		.projects-project {
			transition: 250ms ease-in-out;
			cursor: pointer;

			&:hover {
				transform: scale(1.02);
				box-shadow: 0 3px 10px rgba(255, 255, 255, 0.151);
			}
		}
	}
}
</style>
