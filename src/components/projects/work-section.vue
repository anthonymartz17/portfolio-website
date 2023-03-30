<script>
import BaseButton from "../baseButton.vue";
import ProjectDetail from "./project-details.vue";
export default {
	components: { BaseButton, ProjectDetail },
	data() {
		return {
			title: "Work",
			showMore: false,
			projectClicked: {},
			projects: [
				{
					id: 1,
					name: "This is project 1",
					short_desc:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
					full_desc:
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptas illo deleniti laboriosam unde harum, porro minima non.Vel quod aut velit fugit a laborum iure non voluptate ullam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptas illo deleniti laboriosam unde harum, porro minima non. Vel quod aut velit fugit a laborum iure non voluptate ullam?",
					img: "project1.jpeg",
					thumbnail_main: "project1.jpeg",
					thumbnail_sec: "project1.jpeg",
					thumbnail_third: "project1.jpeg",
					technologies: ["vue", "js", "html5", "css3", "sass"],
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
					technologies: ["vue", "js", "html5", "css3", "sass"],
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
					technologies: ["vue", "js", "html5", "css3", "sass"],
				},
			],
		};
	},
	methods: {
		toggleShowMore(projectClicked) {
			this.showMore = !this.showMore;
		
			this.projectClicked = projectClicked;
		},
	},
};
</script>

<template>
	<div class="projects-container">
		<h2 class="projects-title sections-title-global">{{ title }}</h2>
		<div class="projects-list">
			<div
				class="projects-project"
				v-for="project in projects"
				:key="project.name"
			>
				<div class="projects-project-thumb">
					<img :src="`/img/${project.img}`" alt="" />
				</div>
				<div class="projects-project-desc">
					<h3>{{ project.name }}</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
						consequuntur?
					</p>
					<BaseButton
					@click.native="toggleShowMore(project)"
						text="See more"
						icon="fa-solid fa-eye"
						:iconAccent="true"
						id="toggleProject"
					/>
				</div>
			</div>
			<div v-if="showMore" class="project-detail">
				<ProjectDetail
					:projectClicked="projectClicked"
					@fireToggleShowMore="toggleShowMore(projectClicked)"
				/>
			</div>

			<div class="project-cards-container">
				<div class="cards-youtube project-cards">
					<h4>watch</h4>
					<p>me discuss tech implementation in my projects</p>
					<div class="card-link">
						<a class="resetLink card-link-link" href="">@martz_code</a>
						<font-awesome-icon
							icon="fa-solid fa-angle-right"
							class="angle-right"
						/>
					</div>
				</div>
				<div class="card-blog project-cards">
					<h4>Read</h4>
					<p>articles about my work and my learning from them.</p>
					<div class="card-link">
						<a class="resetLink card-link-link" href="">Check it out</a>
						<font-awesome-icon
							icon="fa-solid fa-angle-right"
							class="angle-right"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.projects-container {
	min-height: 100vh;
	padding: 4em 1.5em;
	background: $bg-2;
	color: $white;
}
.projects-title {
	// font: $font-title-mb;
}

.project-list {
}

.projects-project {
	margin-bottom: 1.5em;
	// box-shadow: rgba(252, 252, 252, 0.185) 0px 4px 12px;
	box-shadow: rgba(236, 236, 236, 0.12) 0px 1px 3px,
		rgba(230, 227, 227, 0.24) 0px 1px 2px;
}

.projects-project-thumb {
	// min-height: 8em;
	// max-height: 10em;
	height: 14em;

	img {
		border-radius: 5px 5px 0 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.projects-project-desc {
	background: rgba(255, 255, 255, 0.075);
	padding: 0.5em;

	h3 {
		font: $font-title-mb;
		color: rgba($white, 0.4);
	}
	p {
		font: $font-thin-text-mb;
		margin-bottom: 0.5em;
	}
}
.project-cards-container {
	margin-block: 6em;
}
.project-cards {
	padding: 0.5em;
	&:nth-child(1) {
		border-bottom: 1px solid $white;
		padding-bottom: 3em;
		margin-bottom: 3em;
	}

	h4 {
		font: $font-title-mb;
		color: rgba($white, 0.4);
	}
	p {
		font: $font-thin-text-mb;
		margin-block: 0.5em;
	}
}
.card-link {
	display: flex;
	align-items: center;
	gap: 1em;
	justify-content: flex-end;

	&-link {
		padding-bottom: 0.1em;
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
</style>
