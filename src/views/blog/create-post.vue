<script>
import { quillEditor } from "vue-quill-editor";
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import BaseButton from "@/components/baseButton.vue";

export default {
	components: {
		quillEditor,
		BaseButton,
	},
	data() {
		return {
			isSubmitted: false,
			blog: {},
			blogThumbnail: {},
		};
	},
	validations: {
		blog: {
			title: { required },
			content: { required },
		},
		// blogThumbnail: { required },
	},
	methods: {
		...mapActions("blogPosts", ["createPost"]),
		async tryCreatePost() {
			this.$v.$touch;
			this.isSubmitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				try {
					const response = await this.createPost(this.blog);
					this.blog = {};
					this.blogThumbnail = {};

					this.isSubmitted = false;
				} catch (error) {
					throw error;
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
		<h2 class="blog-list-title">Create New Post</h2>
		<form action="" @submit.prevent="tryCreatePost">
			<div class="field">
				<label class="label-field" for="title">Title</label>
				<input
					v-model="blog.title"
					type="text"
					id="title"
					:class="[
						'input-field',
						{ invalid: isSubmitted && $v.blog.title.$invalid },
					]"
				/>
				<p v-if="isSubmitted && !$v.blog.title.required" class="text-small">
					Please enter a title
				</p>
			</div>

			<div>
				<label class="label-field" for="content">Content</label>
				<quill-editor
					:class="{ invalid: isSubmitted && $v.blog.content.$invalid }"
					v-model="blog.content"
					ref="quillEditor"
				></quill-editor>
				<p v-if="isSubmitted && !$v.blog.content.required" class="text-small">
					Content can not be empty
				</p>
			</div>
			<div class="btn-container">
				<BaseButton
					icon="writing"
					text="Create Post"
					size="30"
					class="custom-btn"
				/>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
/* Custom CSS to display images inline */
.field {
	margin-bottom: 2em;
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
	height: 2.2em;
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
	}
}
</style>
