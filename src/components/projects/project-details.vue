<script>
import BaseButton from "../baseButton.vue";
import MartzIcon from "../icons/martz-icons.vue";
import MainVideo from "./main-video-player.vue";
export default {
	components: { BaseButton, MartzIcon, MainVideo },
	data() {
		return {
			readmore: false,
			mobile: false,
			isProjectLink: true,
		};
	},
	props: ["projectClicked"],
	created() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	destroy() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		handleResize() {
			this.mobile = true ? window.innerWidth < 600 : (this.mobile = false);
		},
		fireToggleShowMore() {
			//resets projectClicked
			let projectClicked = {};
			this.$emit("fireToggleShowMore", projectClicked);
		},
		readMoreAbout() {
			this.readmore = !this.readmore;
		},
		openCodeOrProject(link) {
			if (link) {
				window.open(link, "_blank");
			} else {
				this.isProjectLink = false;
			}
		},
	},
};
</script>

<template>
	<div class="project-detail-wrapper">
		<div class="project-detail-container">
			<div
				data-aos="fade-up"
				data-aos-duration="800"
				id="toggleProject"
				class="backToProjects back-top"
				@click="fireToggleShowMore()"
			>
				<MartzIcon icon="angleLeft" size="20" class="backToProjects-arrow" />
				<p>Back to project</p>
			</div>
			<div class="detail-content">
				<div class="project-videos">
					<h2 class="project-title" data-aos="fade-up" data-aos-duration="800">
						{{ projectClicked.name }}
					</h2>
					<div
						class="videos-container"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="250"
					>
						<div class="video-default">
							<img
								:src="`/img/working-on-video.png`"
								alt="thumbnail project 2"
							/>
							<!-- <iframe
								width="100%"
								height="100%"
								:src="`https://www.youtube.com/embed/${projectClicked.videoId}`"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe> -->
						</div>
						<div class="video-secondary-container">
							<div class="video-sec">
								<img
									:src="`/img/working-on-video.png`"
									alt="thumbnail project 2"
								/>
							</div>
							<div class="video-sec">
								<img
									:src="`/img/working-on-video.png`"
									alt="thumbnail project 3"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="desc-container" data-aos="fade-up" data-aos-duration="800">
					<div class="project-about">
						<h3>About</h3>
						<div
							:class="[
								'paragraph-container',
								{ readless: !this.readmore && mobile },
							]"
						>
							<p
								:class="['paragraph', { 'hide-paragraph': paragraph.hide }]"
								v-for="paragraph in projectClicked.description_complete"
								:key="paragraph.id"
							>
								{{ paragraph.text }}
							</p>
							<p
								v-show="mobile && !readmore"
								@click="readMoreAbout"
								class="readmore-btn"
							>
								Read more...
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
							@click.native="openCodeOrProject(projectClicked.siteLink)"
							class="project-btn"
							text="Open Project"
							color="accent"
							size="30"
							icon="web"
						/>
						<BaseButton
							@click.native="openCodeOrProject(projectClicked.codeLink)"
							class="project-btn"
							text="View Code"
							color="accent"
							size="30"
							icon="code"
						/>
					</div>
					<p class="isProjectLink-msg" v-show="!isProjectLink">Project still in development</p>
				</div>
			</div>

			<div
				id="toggleProject"
				class="backToProjects back-bottom"
				@click="fireToggleShowMore()"
			>
				<MartzIcon icon="angleLeft" size="20" class="backToProjects-arrow" />
				<p>Back to project</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.project-detail-wrapper {
	background: $bg-1;
	overflow: auto;
	display: grid;
	justify-items: center;
	height: 100vh;
}
.project-detail-container {
	margin-bottom: 3em;
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	gap: 2em;
	font: $font-text-mb;
}

.backToProjects {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin-bottom: 1.5em;
	&-arrow {
		color: $accent;
	}
}

.back-top {
	border-bottom: 1px solid rgba($white, 0.3);
	padding-bottom: 1em;
}
.back-bottom {
	border-top: 1px solid rgba($white, 0.3);
	padding-top: 1em;
}

.project-title {
	color: rgba($white, 0.3);
	margin-bottom: 1em;
}
.paragraph {
	margin-bottom: 1em;
}
.readless {
	height: 24em;
	overflow: hidden;
}

.hide-paragraph {
	display: none;
}
.paragraph-container {
	position: relative;
}
.readmore-btn {
	position: absolute;
	bottom: 0px;
	height: 4em;
	display: grid;
	align-items: end;
	width: 100%;
	background: rgb(25, 26, 25);
	background: linear-gradient(
		180deg,
		rgba(25, 26, 25, 0.7483368347338936) 0%,
		rgba(25, 26, 25, 1) 32%
	);
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
	flex: 1;
	border: 1px solid;
	margin-bottom: 0.5em;
	height: 13em;
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

.project-about {
	margin-bottom: 3em;

	h3 {
		font: $font-title-mb;
		color: rgba($white, 0.3);
		margin-bottom: 1em;
	}
	p {
		font: $font-thin-text-mb;
	}
}
.project-techs {
	margin-bottom: 4em;

	h3 {
		font: $font-title-mb;
		margin-bottom: 1em;
		color: rgba($white, 0.3);
	}
}
.tech-icons {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1em;
}

.icon {
	display: grid;
	place-items: center;
	// opacity: 0.8;
	// width: 23%;
	// aspect-ratio: 1/1;
	// border: 1px solid;
	// height: 6em;
	// width: 6em;
}

.project-btn {
	width: 100%;
	margin-bottom: 0.8em;
}
.project-btn-container {
	margin-bottom: 2em;
}
.isProjectLink-msg{
	border: 1px solid $accent;
	padding: .5em;
	text-align: center;
}

.project-detail-wrapper {
	@include breakpoint(tablet) {
		.video-default {
			height: 19em;
		}
		.project-detail-container {
			width: 85%;
			// margin-bottom: 60em;
		}
		.project-about {
			flex: 2;
			h3 {
				font: $font-title-tb;
			}
		}
		.project-techs {
			flex: 1;
			margin-bottom: 3em;
			h3 {
				margin: 0;
			}
		}
		.tech-icons {
			margin-top: 1.5em;
			gap: 1.5em;

			.icon {
				justify-content: flex-start;
			}
		}

		.project-btn-container {
			display: flex;
			gap: 0.5em;
		}

		.hide-paragraph {
			display: block;
		}

		.readmore {
			height: 100%;
		}
	}
	@include breakpoint(desktop) {
		.project-detail-container {
			margin-block: 2em;
			width: 75%;
		}
		.detail-content {
			display: flex;
			gap: 1em;
		}

		.back-top {
			cursor: pointer;
			align-self: flex-end;
			margin-bottom: 1em;
			padding: 0;
		}
		.backToProjects {
			width: 50%;
			padding-block: 1em;
			justify-self: flex-end;
		}
		.project-btn-container {
			margin-bottom: 1em;
		}
		.project-videos {
			flex: 1;
		}
		.desc-container {
			flex: 1;
		}
		.back-bottom {
			display: none;
		}

		.project-btn {
			max-width: 16.8em;
		}

		.project-title {
			font-size: 2em;
		}

		.project-about {
			h3 {
				font: $font-title-mb;
			}
		}

		.tech-icons {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
}
</style>
