<script>
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
export default {
	name: "WorkProjectPreview",
	components: { MartzIcon },
	data() {
		return {};
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<template>
	<router-link
		class="projects-project"
		:to="{ name: 'WorkProjectDetail', params: { projectId: project.id } }"
	>
		<div class="projects-project-thumb">
			<img
				:src="project.thumbnail_data.dataURL"
				:alt="`thumbnail of the project ${project.name}`"
			/>
		</div>
		<div class="projects-project-desc">
			<h3>{{ project.name }}</h3>
			<p class="text-description">{{ project.preview_description }}</p>
			<div class="see-more">
				<p class="text-p">See more</p>
				<MartzIcon icon="angleRight" :size="15" color="accent" />
			</div>
		</div>
	</router-link>
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
	text-decoration: none;
	color: $white;
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
