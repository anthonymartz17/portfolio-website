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
					siteLink: "https://antoniomartinez.tech",
					codeLink: "https://github.com/anthonymartz17/portfolio-2023.git",
					description_overview:
						"Dynamic showcase of my skills, work, and passion for web development.",
					description_complete: [
						{
							paragraph_id: "intro",
							text: "My personal website is a dynamic platform that showcases my work, skills, and passion for web development, aiming to demonstrate my proficiency to potential employers. It utilizes Vue.js for the user interface, CSS/SASS for styling, and HTML5 for markup. Page navigation is handled through scrolling and Vue router. The contact form integrates email functionality with EmailJS.",
						},
						{
							paragraph_id: "design",
							text: " As a non-designer, I faced the challenge of creating the design. To ensure a professional and fundamentally sound appearance, I delved into the fundamentals of web design, such as visual hierarchy, alignment, proximity, balance, repetition, and typography. Valuable resources like YouTube, freecodecamp, and typescale.com assisted me in gaining a better understanding of these concepts. ",
						},
						{
							paragraph_id: "conclusion",
							text: "I particularly enjoyed implementing custom icons. Dissatisfied with the available options in common libraries and inspired by font awesome icon components functionality, I figured I could develop a component that could house all the svgs icons, allowing customization through props. The Canva platform provided me with cooler and more creative icons. Overall, the experience was enjoyable and rewarding.",
						},
					],

					img: "portfolio.png",
					videoId: "d_I8AN4ACo0?si=ZbxRAAGM20vd6kvT",
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
					name: "Vehicles Marketplace",
					siteLink: "https://vehicles-marketplace.web.app/",
					codeLink: "https://github.com/anthonymartz17/vehicles-marketplace",
					description_overview:
						"Auto dealers showcase of inventory; buyers can browse diverse vehicles for purchasing ",
					description_complete: [
						{
							paragraph_id: "intro-overview",
							text: "The web app allows dealers to register and create accounts, enabling them to showcase, manage, and update their vehicle inventories. Buyers can seamlessly explore and filter a diverse range of vehicles, efficiently finding their desired cars based on various criteria.",
						},
						{
							paragraph_id: "technologies",
							text: "The project was built in Vue.js, providing a reactive and component-based approach. Vuex was implemented to enable centralized state management and predictable data flow. Additionally, Vuelidate simplified form validation, and smooth page navigation is facilitated by using Vue Router. Sass was implemented to handle the styles and responsiveness of the app, ensuring a consistent experience across various screen sizes. Moreover, the app leverages the power of Firebase for hosting, authentication, and database management, resulting in a web app with a very intuitive interface that ensures a seamless user experience for both buyers and sellers.",
						},
						{
							paragraph_id: "challange-in-development",
							text: "In the app's development, updating specific vehicle listing images presented my biggest challenge. This was due to data distribution between Firebase Storage and Firebase Database. To overcome this, I ingeniously utilized UUIDs to create unique IDs for each image, concatenating them with the listing ID to ensure vehicle listing association. In Firebase Database, I maintained an array of relative path references for efficient image tracking. During editing, I categorized images into recently added ones (those without a listing ID yet), existing ones, and deleted ones. This facilitated the removal, retention, and addition of images in Firebase Storage.",
						},
						{
							paragraph_id: "conclusion",
							text: "Overall, the journey of building this web app was an incredibly enriching experience for me as a developer. Even though I found myself frustrated at times, the hurdles pushed me to think creatively and find innovative solutions, which ultimately enhanced my problem-solving skills.",
						},
					],

					img: "vehicle-marketplace2.png",
					videoId: "BepIvG91GzM?si=DVVx8l3aGLSQMpmG",
					thumbnail_main: "vehicle-marketplace2.png",
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
						<p class="text-description">{{ project.description_overview }}</p>
						<div class="see-more">
							<p class="text-p">See more</p>
							<MartzIcon icon="angleRight" :size="15" color="accent" />
						</div>
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
						<h4>Youtube</h4>
						<!-- <MartzIcon icon="youtubetv" size="30" color="accent" /> -->
					</div>
					<div class="card-body">
						<p>Watch me discuss tech implementation in my projects</p>
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
					<h4>Blogs</h4>
					<p>Discover tech insights, projects, and learning experiences in my blogs.</p>
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
			width: 75%;
		}
		.project-cards-container {
			justify-content: space-around;
		}

		.projects-list {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
		.projects-project {
			transition: 0.2s ease-in-out;
			cursor: pointer;

			&:hover {
				transform: scale(1.02);
				box-shadow: 0 3px 10px rgba(255, 255, 255, 0.151);
			}
		}
	}
}
</style>
