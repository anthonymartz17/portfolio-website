<script>
import baseButton from "../baseButton.vue";
import ProjectDetail from "./project-details.vue";
export default {
	components: {baseButton, ProjectDetail},
	data() {
		return {
			title: "Work",
			showMore: false,
			projects: [
				{
					name: "Project 1",
					desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
					img: "project1.jpeg",
				},
				{
					name: "Project 2",
					desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
					img: "project2.jpeg",
				},
				{
					name: "Project 3",
					desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
					img: "project3.jpeg",
				},
			],
		};
	},
	methods: {
		toggleShowMore(e) {
			if (e.target.id == "toggleProject") {
				this.showMore = !this.showMore;
			}
			console.log(e.currentTarget);
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
				:key="project.name">
				<div class="projects-project-thumb">
					<img :src="`/img/${project.img}`" alt="" />
				</div>
				<div class="projects-project-desc">
					<h3>This is a project</h3>
					<p
						>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis, consequuntur?</p
					>
					<div
						id="toggleProject"
						class="projects-project-btn"
						@click="toggleShowMore($event)"
						><font-awesome-icon
							icon="fa-solid fa-eye"
							class="see-more-icon" />
						<span>See More</span></div
					>
				</div>
			</div>
			<div v-if="showMore" class="project-detail">
				<ProjectDetail @fireToggleShowMore="toggleShowMore($event)" />
			</div>

			<div class="project-cards-container">
				<div class="cards-youtube project-cards">
					<h4>watch</h4>
					<p>me discuss tech implementation in my projects</p>
					<base-button
						text="Watch"
						icon="fa-brands fa-youtube"></base-button>
				</div>
				<div class="card-blog project-cards">
					<h4>Read</h4>
					<p>articles about my work and my learning from them.</p>
					<base-button text="Watch" icon="fa-brands fa-readme">
					</base-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.projects-container {
	min-height: 100vh;
	padding: 1em 1.5em;
	background: $background-2;
	color: $white;
}
.projects-title {
	// font: $font-title-mb;
}

.project-list {
}

.projects-project {
	margin-block: 1em;
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

	.projects-project-btn {
		@include baseButton($white);

		.see-more-icon {
			color: $accent;
		}
		span {
			display: inline-block;
		}
	}
	.cards-youtube {
	}
}
.project-cards-container {
}
.project-cards {
	margin-bottom: 1em;
	padding: 0.5em;
	&:nth-child(1) {
		border-bottom: 1px solid $white;
		padding-bottom: 2em;
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

.project-detail {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;
}
</style>
