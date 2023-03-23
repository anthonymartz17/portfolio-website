<script>
export default {
	data() {
		return {};
	},
	methods: {
		fireToggleShowMore(e) {
			this.$emit("fireToggleShowMore", e);
		},
	},
};
</script>

<template>
	<div class="project-detail-container">
		<div
			id="toggleProject"
			class="backToProjects"
			@click="fireToggleShowMore($event)">
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
				class="backToProjects-arrow" />
			<p>Back to project</p>
		</div>
		<div class="project-title-container">
			<h2 class="title">this is an incredible project</h2>
		</div>
		<div class="project-videos">
			<div class="video-default"></div>
			<div class="video-secondary-container">
				<div class="video-default"></div>
				<div class="video-default"></div>
			</div>
		</div>
		<div class="project-about">
			<h3>About</h3>
			<div>
				<p
					>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Architecto minus voluptas illo deleniti laboriosam unde harum,
					porro minima non. Vel quod aut velit fugit a laborum iure non
					voluptate ullam?</p
				>
				<p
					>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Architecto minus voluptas illo deleniti laboriosam unde harum,
					porro minima non. Vel quod aut velit fugit a laborum iure non
					voluptate ullam?</p
				>
			</div>
		</div>
		<div class="project-techs">
			<h3>Technologies</h3>
			<div class="tech-icons">
				<div class="icon">d</div>
				<div class="icon">d</div>
				<div class="icon">d</div>
				<div class="icon">d</div>
				<div class="icon">d</div>
			</div>
		</div>
		<div class="project-btn"></div>

		<div
			id="toggleProject"
			class="backToProjects"
			@click="fireToggleShowMore($event)">
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
				class="backToProjects-arrow" />
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
	background: $background-1;
	height: 100vh;
	font: $font-text-mb;
	overflow: auto;

	.backToProjects {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 1px solid rgba($white, 0.3);
		padding-bottom: 1em;
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
	min-height: 50%;

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
}
.project-about {
}
.project-techs {
	// flex: 5;
}
.tech-icons {
	display: flex;
	flex-wrap: wrap;
	gap: 1em;

}
.icon {
	border: 1px solid;
	height: 10em;
	flex: 1;
}
</style>
