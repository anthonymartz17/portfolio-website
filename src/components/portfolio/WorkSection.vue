<script>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import WorkProjectPreview from "@/components/Portfolio/WorkProjectPreview.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
import { mapActions, mapGetters } from "vuex";
export default {
	components: { BaseButton, MartzIcon, WorkProjectPreview },
	data() {
		return {
			title: "Work",
			showMore: false,
		
		};
	},
	created() {
		this.getProjects();
	},
	methods: {
		...mapActions("workProjects", ["getProjects"]),
		toggleShowMore(projectClicked) {
			this.showMore = !this.showMore;
			this.projectClicked = projectClicked;
			// this.$emit("emitToggleShowMore", this.showMore);
		},
	},
	computed: {
		...mapGetters("workProjects", ["projects"]),
		//show only those with published status
		filteredProjects() {
			return this.projects.filter((x) => x.isPublic);
		
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
				<WorkProjectPreview
					:project="project"
					v-for="(project, idx) in filteredProjects"
					:key="project.id"
					data-aos="fade-up"
					data-aos-duration="800"
					:data-aos-delay="250 * idx"
				/>
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
					<p>
						Discover tech insights, projects, and learning experiences in my
						blogs.
					</p>
					<div class="card-link">
						<router-link
							:to="{ name: 'PostList' }"
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
