<script>
import { quillEditor } from "vue-quill-editor";
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import blogPostApi from "@/ApiHelper/blogPostApi";

export default {
	components: {
		quillEditor,
	},
	data() {
		return {
			isSubmitted: false,
			content: "",
		};
	},
	validations: {
		content: { required },
	},
	methods: {
		...mapActions("blogPosts", ["createPost"]),
		async tryCreatePost() {
			this.$v.$touch;
			this.isSubmitted = true;
			if (this.$v.$invalid) {
				console.log(this.$v.content.$invalid);
				return;
			} else {
				try {
					const response = await blogPostApi.createPost(this.content);
					console.log(response, "klk");
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
			<div>
				<quill-editor
					:class="{ invalid: isSubmitted && $v.content.$invalid }"
					v-model="content"
				></quill-editor>
			</div>
			<button>Create post</button>
		</form>
	</div>
</template>

<style lang="scss" scoped>
/* Custom CSS to display images inline */
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
