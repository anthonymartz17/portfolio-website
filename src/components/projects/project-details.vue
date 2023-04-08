<script>
import BaseButton from "../baseButton.vue";
import MartzIcon from "../icons/martz-icons.vue";
export default {
	components: { BaseButton, MartzIcon },
	// data() {
	// 	return {
	// 		project: {},
	// 	};
	// },
	props: ["projectClicked"],
	methods: {
		fireToggleShowMore() {
			//resets projectClicked
			let projectClicked = {};
			this.$emit("fireToggleShowMore", projectClicked);
		},
	},
};
</script>

<template>
	<div class="project-detail-container">
		<div
			id="toggleProject"
			class="backToProjects"
			@click="fireToggleShowMore()"
		>
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
				class="backToProjects-arrow"
			/>
			<p>Back to project</p>
		</div>
		<div class="project-title-container">
			<h2 class="title">{{ projectClicked.name }}</h2>
		</div>
		<div class="project-videos">
			<div class="video-default">
				<img
					:src="`/img/${projectClicked.thumbnail_main}`"
					alt="thumbnail project 1"
				/>
			</div>
			<div class="video-secondary-container">
				<div class="video-sec">
					<img
						:src="`/img/${projectClicked.thumbnail_sec}`"
						alt="thumbnail project 2"
					/>
				</div>
				<div class="video-sec">
					<img
						:src="`/img/${projectClicked.thumbnail_third}`"
						alt="thumbnail project 3"
					/>
				</div>
			</div>
		</div>
		<div class="project-about">
			<h3>About</h3>
			<div>
				<p>
					{{ projectClicked.short_desc }}
				</p>
				<br />
				<p>
					{{ projectClicked.full_desc }}
				</p>
			</div>
		</div>
		<div class="project-techs">
			<h3>Technologies</h3>
			<div class="tech-icons">
				<MartzIcon
					class="icon"
					v-for="icon in projectClicked.technologies"
					:key="icon.id"
					:icon="icon.icon"
					color="white"
					:size="icon.size"
				/>
			</div>
		</div>
		<div class="project-btn-container">
			<BaseButton
				class="project-btn"
				text="Open Project"
				color="accent"
				size="30"
				icon="web"
			/>
			<BaseButton
				class="project-btn"
				text="View Code"
				color="accent"
				size="30"
				icon="code"
			/>
		</div>

		<div
			id="toggleProject"
			class="backToProjects"
			@click="fireToggleShowMore()"
		>
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
				class="backToProjects-arrow"
			/>
			<p>Back to project</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.project-detail-container {
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	background: $bg-1;
	height: 100vh;
	font: $font-text-mb;
	overflow: auto;

	.backToProjects {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 1px solid rgba($white, 0.3);
		padding-bottom: 1em;
		margin-bottom: 1.5em;
		&-arrow {
			color: $accent;
		}
	}
}

.project-title-container {
	color: rgba($white, 0.3);
}
.project-videos {
	// flex: 2;
	height: 50%;
	min-height: 50%;
	margin-bottom: 1.5em;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.video-default {
	min-height: 60%;
	flex: 1;
	border: 1px solid;
	height: 45%;
	margin-bottom: 0.5em;
}
.video-secondary-container {
	min-height: 60%;
	display: flex;
	gap: 0.5em;
	height: 50%;
}
.video-sec {
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.project-about {
	margin-bottom: 1.5em;
	h3 {
		font: $font-title-mb;
		color: rgba($white, 0.3);
	}
	p {
		font: $font-thin-text-mb;
	}
}
.project-techs {
	margin-bottom: 1.5em;
	h3 {
		font: $font-title-mb;
		margin-bottom: 0.5em;
		color: rgba($white, 0.3);
	}
}
.tech-icons {
	margin-bottom: 1.5em;
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
}

.icon {
	display: grid;
	place-items: center;
	opacity: 0.8;
	width: 25%;
	aspect-ratio: 1/1;
	// border: 1px solid;
	// height: 6em;
	// width: 6em;
}
.project-btn-container {
	margin-bottom: 1.5em;
	display: grid;
	place-items: center;
	gap: 1em;
}
.project-btn {
	width: 80%;
}
</style>
