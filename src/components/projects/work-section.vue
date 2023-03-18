<script>
export default {
	data() {
		return {
			title: "Work",

			projects: [
				{
					name: "Project 1",
					desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
          img:'project1.jpeg'
				},
				{
					name: "Project 2",
					desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
          img:'project2.jpeg'
				},
				{
					name: "Project 3",
					desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit so every si",
          img:'project3.jpeg'
				},
			],
		};
	},
};
</script>

<template>
	<div class="projects-container">
		<h2 class="projects-title sections-title-global">{{ title }}</h2>
		<div class="projects-list">
			<div class="projects-project" v-for="project in projects" :key="project.name">
				<div class="projects-project-thumb">
          <img :src="`/img/${project.img}`" alt="">
        </div>
				<div class="projects-project-desc">
					<h3>This is a project</h3>
					<p
						>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis, consequuntur?</p
					>
					<div class="projects-project-btn"
						><font-awesome-icon
							icon="fa-solid fa-eye"
							class="see-more-icon" />
						<span>See More</span></div
					>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.projects-container {
	// height: 100vh;
	padding: 1em 1.5em;
	background: $background-2;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: $white;
}
.projects-title {
	// font: $font-title-mb;
}

.project-list {
}

.projects-project {
  margin-bottom: 1em;
}

.projects-project-thumb {
  height: 15em;
  margin-bottom: .5em;

  
}

.projects-project-desc {
	h3 {
		font: $font-subtitle-mb;
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
}
</style>
