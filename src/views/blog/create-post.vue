<script>
import { quillEditor } from "vue-quill-editor";

export default {
	components: {
		quillEditor,
	},
	data() {
		return {
			content: "<p>Write your content here...</p>",
		};
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
		<div class="richEdit-container">
			<quill-editor v-model="content"></quill-editor>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* Custom CSS to display images inline */
::v-deep .ql-editor {
  min-height: 400px; /* Adjust the min-height value as needed */
}
.blog-list-title {
	font: $font-title-mb;
	margin-bottom: 1em;
	font-size: 1.2em;
}
.richEdit {
	min-height: 25em;
}

.create-post-container {
	min-height: 25em;

	@include breakpoint(tablet) {
		/* Add tablet-specific styles here if needed */
	}
	@include breakpoint(desktop) {
		/* Add desktop-specific styles here if needed */
	}
}
</style>
