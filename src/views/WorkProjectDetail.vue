<script>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
import { mapActions } from "vuex";
export default {
	components: { BaseButton, MartzIcon },
	data() {
		return {
			alertEmptyLink: "",
			project: {},
			videoPlayingId: null,
			projectId: null,
		};
	},

	created() {
		this.$aos.init({
			duration: 800,
			offset: 200,
		});

		//get id to fetch project to view
		this.projectId = this.$route.params.projectId;
		if (this.projectId) {
			this.fetchProjectById(this.projectId).then((data) => {
				this.project = data;
				//sets videoPlayingId which can be changed dynamically in play more section
				this.videoPlayingId = this.project.videos[0].id;
			});
		}
	},

	methods: {
		...mapActions("workProjects", ["fetchProjectById"]),

		//switches video displaying and autoplays it
		changeVideo(videoId) {
			this.videoPlayingId = `${videoId}?autoplay=1`;
		},
		goBack() {
			window.history.back();
		},
		openCodeOrProject(link) {
			if (link.link) {
				window.open(link.link, "_blank");
			} else {
				this.alertEmptyLink = link.id;
			}
		},
	},

	computed: {
		alertLinks() {
			let msg;
			if (this.alertEmptyLink) {
				msg =
					this.alertEmptyLink == "project"
						? "Project still in development"
						: "Private soure code, please contact developer";
			}
			return msg;
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
				@click="goBack"
			>
				<MartzIcon icon="angleLeft" size="20" class="backToProjects-arrow" />
				<p>Back to Projects</p>
			</div>
			<div class="detail-content">
				<div class="video-section">
					<h2 class="title" data-aos="fade-up" data-aos-duration="800">
						{{ project.name }}
					</h2>
					<div
						class="video-player"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="250"
					>
						<iframe
							class="iframe"
							v-if="project.videos"
							:src="`https://www.youtube.com/embed/${videoPlayingId}`"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
						<img
							v-else
							:src="`/img/working-on-video.png`"
							alt="thumbnail project 2"
						/>
					</div>

					<div>
						<h3 class="subtitle">Play more</h3>
						<ol class="videos-list">
							<li
								v-for="link in project.videos"
								:key="link.id"
								@click="changeVideo(link.id)"
							>
								<MartzIcon icon="youtubetv" size="20" />
								<a href="#">{{ link.name }}</a>
							</li>
						</ol>
					</div>
				</div>
				<article
					class="article-section"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<div class="project-about">
						<h3 class="subtitle">About</h3>
						<div v-html="project.content" class="paragraph-container"></div>
					</div>
					<div class="project-techs">
						<h3 class="subtitle">Technologies</h3>
						<div class="tech-icons">
							<MartzIcon
								class="icon"
								v-for="icon in project.techs_implemented"
								:key="icon"
								:icon="icon"
								color="white"
								:size="70"
							/>
						</div>
					</div>
					<div class="project-btn-container">
						<BaseButton
							@click.native="
								openCodeOrProject({ id: 'project', link: project.website_link })
							"
							class="project-btn"
							text="Open Project"
							color="accent"
							size="30"
							icon="web"
						/>
						<BaseButton
							@click.native="
								openCodeOrProject({ id: 'code', link: project.code_link })
							"
							class="project-btn"
							text="View Code"
							color="accent"
							size="30"
							icon="code"
						/>
					</div>
					<p class="alertLink-msg" v-show="alertEmptyLink">
						{{ alertLinks }}
						<span @click="alertEmptyLink = ''"> X</span>
					</p>
				</article>
			</div>

			<div
				id="toggleProject"
				class="backToProjects back-bottom"
				@click="goBack"
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
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	color: $white;
}

.backToProjects {
	display: flex;
	justify-content: space-between;
	padding: 0.5em;
	font: $font-text-mb;
	align-items: baseline;
	margin-bottom: 1.5em;
	&-arrow {
		color: $accent;
	}
}

.back-top {
	border-bottom: 1px solid rgba($white, 0.3);
}
.back-bottom {
	border-top: 1px solid rgba($white, 0.3);
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

.paragraph-container {
	position: relative;
	font: $font-thin-text-mb;
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
.video-section {
	margin-bottom: 2em;
	display: flex;
	flex-direction: column;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.video-player {
		position: relative;
		border: 1px solid rgba($white, 0.4);
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
		margin-bottom: 2em;
	}
}
.iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.videos-list {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-height: 150px;
	gap: 1em;
	font: $font-thin-text-mb;
	margin-bottom: 1em;
	list-style: none;
	padding: 0;
	li {
		display: flex;
		gap: 0.5em;
		padding-block: 0.3em;
	}

	a {
		color: $white;
		padding: 0;
		text-decoration: none;
		border-bottom: 1px solid $accent;
	}
}

.video-sec {
	border: 1px solid white;
	flex: 1;
	img {
		width: 100%;
		height: 100%;
	}
}

.project-about {
	margin-bottom: 3em;
	font: $font-thin-text-mb;
}

.project-techs {
	margin-bottom: 4em;
}
.tech-icons {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1em;
}

.icon {
	width: 60%;
	display: grid;
	place-items: center;
}

.project-btn {
	width: 100%;
	margin-bottom: 0.8em;
}
.project-btn-container {
	margin-bottom: 2em;
}
.alertLink-msg {
	position: relative;
	border: 1px solid $accent;
	padding: 0.5em;
	span {
		cursor: pointer;
		position: absolute;
		height: 100%;
		width: 2em;
		padding: 0.2em 0.5em;
		top: 0;
		right: 0;
		border-left: 1px solid $accent;
	}
}

.project-detail-wrapper {
	@include breakpoint(tablet) {
		.project-detail-container {
			width: 85%;
		}
		.project-about {
			flex: 2;
		}
		.project-techs {
			flex: 1;
			margin-bottom: 3em;
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
	}
	@include breakpoint(desktop) {
		.project-detail-container {
			margin-block: 2em;
			width: 85%;
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
			width: 40%;
			justify-self: flex-end;
		}
		.project-btn-container {
			margin-bottom: 1em;
		}
		.video-section {
			flex: 1.5;
		}

		.article-section {
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

		.tech-icons {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
}
</style>
