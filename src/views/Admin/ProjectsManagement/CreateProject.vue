<script>
import { quillEditor } from "vue-quill-editor";
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
	components: {
		quillEditor,
		BaseButton,
		vue2Dropzone,
	},
	data() {
		return {
			submitted: false,
			projectId: null,
			project: {
				videos: [{ name: "", id: null }],
			},
			projectThumbnail: [],
			videoThumbnails: [],
			dropzoneOptions: {
				url: "https://httpbin.org/post",
				thumbnailWidth: 150,
				thumbnailHeight: 150,
				maxFiles: 1,
				acceptedFiles: ".jpg, .jpeg, .png",
				headers: { "My-Awesome-Header": "header value" },
				dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD IMAGE",
				addRemoveLinks: true,
			},
		};
	},
	validations: {
		project: {
			name: { required },
			preview_description: { required },
			techs_implemented: { required },
			content: { required },
			// video_ids: {
			// 	requiredIf: (value) => {
			// 	return this.videoThumbnails.length == value.length
			// } },
		},
		//-------------------------------------other props
		// code_link: { required },
		// code_link: { required },
		// code_link: { required },
		// website_link: { required },
		//-------------------------------------
		projectThumbnail: { required },
	},
	created() {
		this.projectId = this.$route.query.projectId;
		if (this.projectId) {
			this.fetchProjectById(this.projectId).then((data) => {
				this.project = data;
				this.uploadThumbnailManually(this.project.thumbnail_data);
			});
		}
	},
	methods: {
		...mapActions("workProjects", [
			"fetchProjectById",
			"createProject",
			"updateProject",
		]),

		afterCompleteProjectThumbnail(file) {
			this.projectThumbnail.push(file);
		},
		removeProjectThumbnail(file) {
			this.projectThumbnail = this.projectThumbnail.filter(
				(img) => img.dataURL != file.dataURL
			);
		},
		afterCompleteVideoThumbnails(file) {
			this.videoThumbnails.push(file);
		},
		removeVideoThumbnails(file) {
			this.videoThumbnails = this.videoThumbnails.filter(
				(img) => img.dataURL != file.dataURL
			);
		},
		async uploadThumbnailManually({ projectThumbnail, videoThumbnails }) {
			//add images to vuedropzone
			this.$refs.projectThumbnail.manuallyAddFile(
				projectThumbnail,
				projectThumbnail.dataURL
			);
			if (videoThumbnails.length > 0)
				videoThumbnails.forEach((thumbnail) => {
					this.$refs.videoThumbnails.manuallyAddFile(
						thumbnail,
						thumbnail.dataURL
					);
				});
		},
		addVideoField() {
			this.project.videos.push({ name: "", id: null });
		},
		removeVideoField(idx) {
			this.project.videos.splice(idx, 1);
		},
		async tryCreateProjectPost() {
			this.$v.$touch;
			this.submitted = true;
			if (this.$v.$invalid) {
				console.log(this.$v);
				return;
			} else {
				if (this.projectId) {
					try {
						await this.updateProject({
							project: this.project,
							projectThumbnail: this.projectThumbnail[0],
							videoThumbnails: this.videoThumbnails,
						});
						this.project = {};
						this.projectThumbnail = [];
						this.videoThumbnails = [];
						this.submitted = false;
						this.$router.push({ name: "ManageProject" });
					} catch (error) {
						throw error;
					}
				} else {
					try {
						console.log(this.project)
						// const response = await this.createProject({
						// 	project: this.project,
						// 	projectThumbnail: this.projectThumbnail[0],
						// 	videoThumbnails: this.videoThumbnails,
						// });
						// this.project = {};
						// this.projectThumbnail = [];
						// this.videoThumbnails = [];
						// this.submitted = false;
						// this.$router.push({ name: "ManageProject" });
					} catch (error) {
						throw error;
					}
				}
			}
		},
	},
};
</script>
<template>
	<div
		class="create-post-container"
		data-aos="fade-up"
		data-aos-duration="800"
		data-aos-delay="400"
	>
		<h2 class="blog-list-title">Create Poject Post</h2>
		<form action="" @submit.prevent="tryCreateProjectPost">
			<div class="field">
				<label class="label-field" for="name">Project Name</label>
				<input
					v-model.trim="project.name"
					type="text"
					id="name"
					:class="[
						'input-field',
						{ invalid: submitted && $v.project.name.$invalid },
					]"
				/>
				<p v-if="submitted && !$v.project.name.required" class="text-small">
					Please enter Project Name
				</p>
			</div>
			<div class="field">
				<label class="label-field" for="title">Preview Description</label>
				<textarea
					v-model.trim="project.preview_description"
					name="preview_description"
					id="preview_description"
					cols="30"
					rows="10"
					:class="[
						'textarea-field',
						{ invalid: submitted && $v.project.preview_description.$invalid },
					]"
				></textarea>
				<p
					v-if="submitted && !$v.project.preview_description.required"
					class="text-small"
				>
					Please enter a preview description
				</p>
			</div>
			<div class="field">
				<label class="label-field" for="techs_implemented"
					>Technologies Implemented</label
				>
				<input
					v-model.trim="project.techs_implemented"
					placeholder="Separate technologies by comma"
					type="text"
					id="techs_implemented"
					:class="[
						'input-field',
						{ invalid: submitted && $v.project.techs_implemented.$invalid },
					]"
				/>
				<p
					v-if="submitted && !$v.project.techs_implemented.required"
					class="text-small"
				>
					Please enter technologies implemented in project
				</p>
			</div>
			<div>
				<label class="label-field" for="title">Thumbnail</label>
				<vue2Dropzone
					@vdropzone-removed-file="removeProjectThumbnail"
					@vdropzone-complete="afterCompleteProjectThumbnail"
					:destroyDropzone="false"
					ref="projectThumbnail"
					id="dropzone"
					:options="dropzoneOptions"
					:class="{
						invalid: submitted && $v.projectThumbnail.$invalid,
					}"
				></vue2Dropzone>
				<div
					v-if="submitted && !$v.projectThumbnail.required"
					class="text-small"
				>
					A thumbnail for the project is required.
				</div>
			</div>
			<div class="add-video-container">
				<button type="button" class="add-video-btn" @click="addVideoField">
					+ Add Video
				</button>
				<div
					class="row-fields"
					v-for="(field, idx) in project.videos"
					:key="idx"
				>
					<div class="field">
						<label class="label-field" for="video_ids">Video name</label>
						<input
							placeholder="Separate ids by comma"
							v-model.trim="field.name"
							type="text"
							id="video_ids"
							:class="['input-field']"
						/>
					</div>
					<div class="field">
						<label class="label-field" for="video_ids">Video id</label>
						<input
							placeholder="Separate ids by comma"
							v-model.trim="field.id"
							type="text"
							id="video_ids"
							:class="['input-field']"
						/>
					</div>
					<button
						type="button"
						class="add-video-btn"
						@click="removeVideoField(idx)"
					>
						Delete
					</button>
				</div>
			</div>
			<div class="row-field">
				<div class="field">
					<label class="label-field" for="website_link">Link to Website</label>
					<input
						placeholder="Separate ids by comma"
						v-model.trim="project.website_link"
						type="text"
						id="website_link"
						:class="['input-field']"
					/>
				</div>
				<div class="field">
					<label class="label-field" for="code_link">Link to Code</label>
					<input
						placeholder="Separate ids by comma"
						v-model.trim="project.code_link"
						type="text"
						id="code_link"
						:class="['input-field']"
					/>
				</div>
			</div>

			<div>
				<label class="label-field" for="content">Content</label>
				<quill-editor
					:class="{ invalid: submitted && $v.project.content.$invalid }"
					v-model.trim="project.content"
					ref="quillEditor"
				></quill-editor>
				<p v-if="submitted && !$v.project.content.required" class="text-small">
					Content can not be empty
				</p>
			</div>
			<div class="btn-container">
				<BaseButton
					icon="write"
					:text="this.projectId ? 'Update Project' : 'Create Project'"
					size="30"
					class="custom-btn"
				/>
			</div>
		</form>
	</div>
</template>
<style lang="scss" scoped>
/* Custom CSS to display images inline */
#dropzone {
	background: none;
	border: 1px solid rgba($white, 0.3);
	margin-bottom: 1em;
}

.field {
	margin-bottom: 2em;
	flex: 1;
}
.invalid {
	border: 2px solid $accent !important;
}
.label-field {
	display: block;
	font: $font-text-mb;
}
.input-field {
	border: 1px solid rgba($white, 0.3);
	width: 100%;
	color: $white;
	height: 2.5em;
	padding-inline: 0.5em;
	background: none;
}
.textarea-field {
	border: 1px solid rgba($white, 0.3);
	width: 100%;
	color: $white;
	padding-inline: 0.5em;
	background: none;
}
.btn {
	background: none;
	color: $white;
	font: $font-text-mb;
	padding: 1em 2em;
	border: 1px solid $white;
	border-radius: 5px;
	box-shadow: 0 3px 20px rgba(255, 255, 255, 0.151);
}
::v-deep .ql-editor {
	min-height: 400px; /* Adjust the min-height value as needed */
}
::v-deep .ql-editor.invalid {
	border: 2px solid $accent !important;
}
.blog-list-title {
	font: $font-title-mb;
	margin-bottom: 1em;
	font-size: 1.2em;
}
.richEdit {
	min-height: 25em;
}
.btn-container {
	margin-block: 1em;
}
.custom-btn {
	width: 100%;
}
.row-fields {
	padding: 0.5em;
	border: 1px solid rgba(white, 0.3);
}
.add-video-container {
	display: flex;
	flex-direction: column;
	gap: 0.3em;
}
.add-video-btn {
	font: $font-text-mb;
	color: $white;
	cursor: pointer;
	background: none;
	border: 1px solid rgba(white, 0.3);
	width: 10em;
	height: 2.5em;
	transition: color 0.25s ease-in-out;

	&:hover {
		border: 1px solid $accent;
	}
}
.create-post-container {
	min-height: 25em;

	@include breakpoint(tablet) {
		/* Add tablet-specific styles here if needed */
	}
	@include breakpoint(desktop) {
		/* Add desktop-specific styles here if needed */
		.custom-btn {
			width: 20em;
		}
		.btn-container {
			display: flex;
			justify-content: flex-end;
			margin-block: 1em;
		}
		.row-fields {
			display: flex;
			align-items: center;
			gap: 1em;
			padding-bottom: 0.5em;
		}
	}
}
</style>
