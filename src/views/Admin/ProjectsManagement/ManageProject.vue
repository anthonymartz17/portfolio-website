<script>
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	components: {
		MartzIcon,
		BaseButton,
	},
	data() {
		return {
			loading: {
				isLoading: false,
				projectId: null,
			},
			projectActions: [
				{
					icon: "see",
					text: "View",
					route: "ViewProjectDetail",
				},
				{
					icon: "write",
					text: "Edit",
					route: "CreateProject",
				},
				{
					icon: "public",
					text: "Publish",
				},
				{
					icon: "hide",
					text: "Hide",
				},
			],
		};
	},

	mounted() {
		this.$aos.init();
		this.setProjects();
	},
	methods: {
		...mapActions("workProjects", ["setProjects", "updateProjectsVisibility"]),
		...mapActions("auth", ["setAlertMsg"]),

		async postAction(action) {
			switch (action.text) {
				case "Edit":
					this.$router.push({
						name: action.route,
						query: { postId: action.id },
					});
					break;
				case "Publish":
				case "Hide":
					try {
						this.loading.isLoading = true;
						this.loading.postId = action.id;
						await this.updateProjectsVisibility({
							postId: action.id,
							isPublic: !action.isPublic,
						});
					} catch (error) {
						throw error;
					} finally {
						this.loading.isLoading = false;
						this.loading.postId = null;
					}
					break;
				default:
					this.$router.push({
						name: action.route,
						params: { postId: action.id },
					});
					break;
			}
		},
		showHideBtn({ postStatus, icon }) {
			let show = true;
			if (!postStatus && icon == "hide") {
				show = false;
			}
			if (postStatus && icon == "public") {
				show = false;
			}

			return show;
		},
		fitTitle(title) {
			const words = title.split(" ");
			return words.length > 10 ? `${words.slice(0, 10).join(" ")}...` : title;
		},
	},
	computed: {
		...mapGetters("workProjects", ["projects"]),
		// ...mapGetters("auth", ["isLoggedIn"]),

		projectsSorted() {
			return this.projects.sort(
				(a, b) => new Date(b.date_posted) - new Date(a.date_posted)
			);
		},
	},
};
</script>

<template>
	<div
		class="home-blogs-main-container"
		data-aos="fade-up"
		data-aos-duration="800"
		data-aos-delay="400"
	>
		<div class="blog-list-title">
			<h2>Manage Projects</h2>
		</div>
		<div class="blog-list-body">
			<div v-if="projectsSorted.length == 0" class="noBlogs">
				<p class="text-thin">No Projects have been added</p>
			</div>
			<template v-else>
				<div
					data-aos="fade-up"
					data-aos-duration="800"
					:data-aos-delay="250 * idx"
					v-for="(project, idx) in projectsSorted"
					:key="project.id"
					class="blog-card"
				>
					<div
						class="loading"
						v-if="loading.isLoading && loading.projectId == project.id"
					>
						<img src="/icons/loading.gif" alt="loading animation" />
					</div>

					<template v-else>
						<div v-if="!project.isPublic" class="unpublished">Unpublished</div>
						<div class="gear">
							<MartzIcon icon="gear" size="30" />
						</div>
						<div v-if="project.thumbnail_data" class="blog-img-container">
							<img
								:src="project.thumbnail_data.dataURL"
								alt="blog post thumbnail"
							/>
						</div>
						<div class="card-desc">
							<h4 class="card-title">{{ fitTitle(project.name) }}</h4>

							<p class="text-thin">{{ project.preview_description }}</p>
							<div class="btn-container">
								<BaseButton
									v-show="
										showHideBtn({
											postStatus: project.isPublic,
											icon: action.icon,
										})
									"
									@click.native="
										postAction({
											...project,
											...action,
										})
									"
									v-for="action in projectActions"
									:key="action.icon"
									:icon="action.icon"
									:text="action.text"
									:size="30"
									class="btn-blogActions"
								/>
							</div>
						</div>
					</template>
				</div>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.noBlogs {
	min-height: 30vh;
}
.blog-list-body {
	display: grid;
	gap: 1em;
}
.blog-list-title {
	font: $font-title-mb;
	margin-bottom: 1em;
	font-size: 1.2em;
}
.blog-card {
	position: relative;
	display: block;
	border-radius: 5px;
	text-decoration: none;
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.151);
	border: 1px solid rgba($white, 0.1);
	background: rgba(255, 255, 255, 0.075);
	transition: all 0.3s ease-in-out;
	&:hover .btn-container {
		opacity: 1;
		backdrop-filter: blur(5px);
		background: #15002690;
	}
}
.loading {
	position: absolute;
	width: 100%;
	padding: 0.5em;
	z-index: 100;
	opacity: 0.3;

	img {
		max-width: 100%;
	}
}
.unpublished {
	position: absolute;
	width: 35%;
	padding: 0.5em;
	background: $bg-2;
	border: 1px solid rgba($white, 0.4);
	border-radius: 5px 0px 0 0;
	text-align: center;
	font: $font-text-mb;
	top: 0;
}
.gear {
	position: absolute;
	width: 12%;
	background: $bg-2;
	border: 1px solid rgba($white, 0.4);
	border-radius: 0px 5px 0 0;
	display: flex;
	justify-content: center;
	padding: 0.2em;
	font: $font-text-mb;
	top: 0;
	right: 0;
}
.blog-img-container {
	border-radius: 5px;
	height: 16em;
	padding: 0.4em;

	img {
		border-radius: 5px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.card-desc {
	padding: 1em 0.5em;
}
.btn-container {
	position: absolute;
	opacity: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 1em;
}
.btn-blogActions {
	margin-bottom: 0.5em;
	width: 100%;
}

.home-blogs-main-container {
	@include breakpoint(tablet) {
		.blog-list-body {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1em;
		}
	}
	@include breakpoint(desktop) {
		.blog-list-body {
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1em;
		}
	}
}
</style>
