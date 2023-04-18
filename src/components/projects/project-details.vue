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
	<div class="project-detail-wrapper">
		<div class="project-detail-container">
			<div
				id="toggleProject"
				class="backToProjects back-top"
				@click="fireToggleShowMore()"
			>
				<font-awesome-icon
					icon="fa-solid fa-angle-left"
					class="backToProjects-arrow"
				/>
				<p>Back to project</p>
			</div>

			<h2 class="project-title">{{ projectClicked.name }}</h2>
			<div class="project-videos">
				<div class="videos-container">
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
			</div>
			<div class="desc-container">
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
			</div>

			<div
				id="toggleProject"
				class="backToProjects back-bottom"
				@click="fireToggleShowMore()"
			>
				<font-awesome-icon
					icon="fa-solid fa-angle-left"
					class="backToProjects-arrow"
				/>
				<p>Back to project</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.project-detail-wrapper {
	background: $bg-1;
	overflow: auto;
	height: 100vh;
	display: flex;
	justify-content: center;
}
.project-detail-container {
	margin-bottom: 3em;
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	font: $font-text-mb;

	@include breakpoint(tablet) {
		// font: $font-text-tb;
		width: 85%;
	}
	@include breakpoint(desktop) {
		margin-block: 2em;
		width: 70%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		grid-template-rows: auto;
		grid-template-areas:
			". backTop"
			"video  text"
			"backBottom  .";
		.back-top {
			cursor: pointer;
			grid-area: backTop;
			margin: 0;
			padding: 0;
		}
		.project-videos {
			grid-area: video;
		}
		.desc-container {
			grid-area: text;
		}
		.back-bottom {
			grid-area: backBottom;
			display: none;
		}
	}
}

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

.project-title {
	color: rgba($white, 0.3);
	margin-bottom: 1em;
	@include breakpoint(desktop) {
	font-size: 2em;
	}

}
.project-videos {
	min-height: 50vh;
	margin-bottom: 5em;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
.videos-container {
	height: 50vh;
}

.video-default {
	min-height: 60%;
	flex: 1;
	border: 1px solid;
	height: 45%;
	margin-bottom: 0.5em;
}
.video-secondary-container {
	display: flex;
	gap: 0.5em;
	height: 40%;
}
.video-sec {
	border: 1px solid white;
	flex: 1;
	img {
		width: 100%;
		height: 100%;
		// object-fit: cover;
	}
}
.desc-container {
	@include breakpoint(tablet) {
		// display: flex;
		gap: 2em;
	}

}
.project-about {
	margin-bottom: 1.5em;
	@include breakpoint(tablet) {
		flex: 2;
		h3 {
			font: $font-title-tb;
		}
	}
	h3 {
		font: $font-title-mb;
		color: rgba($white, 0.3);
		margin-bottom: 1em;
		@include breakpoint(tablet) {
			font: $font-title-tb;
		}
		@include breakpoint(desktop) {
			font: $font-title-mb;
		}
	}
	p {
		font: $font-thin-text-mb;
		@include breakpoint(tablet) {
			// font: $font-thin-text-tb;
		}
	}
}
.project-techs {
	margin-bottom: 1.5em;
	@include breakpoint(tablet) {
		flex: 1;
		margin-bottom: 3em;
	}
	h3 {
		font: $font-title-mb;
		margin-bottom: 1em;
		color: rgba($white, 0.3);
		@include breakpoint(tablet) {
			// font: $font-title-tb;
			margin: 0;
		}
	}
}
.tech-icons {
	margin-bottom: 1.5em;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 1em;

	@include breakpoint(tablet) {
		flex-wrap: nowrap;
	}
	@include breakpoint(desktop) {
		flex-wrap: nowrap;
	  font-size: 3em;
		margin: 0;
	}
}

.icon {
	display: grid;
	place-items: center;
	opacity: 0.8;
	width: 23%;
	aspect-ratio: 1/1;
	// border: 1px solid;
	// height: 6em;
	// width: 6em;
}
.project-btn-container {
	margin-bottom: 3em;
	display: grid;
	place-items: center;
	gap: 1em;
	@include breakpoint(tablet) {
		display: flex;
	}
}
.project-btn {
	width: 80%;
}
</style>
