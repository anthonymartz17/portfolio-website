<script>
import { mapActions } from "vuex";
// import BaseButton from "../baseButton.vue";
export default {
	// components: { BaseButton },
	data() {
		return {
			post: {},
		};
	},
	props: ["projectClicked"],
	created() {
		const postId = this.$route.params.postId;

		if (postId) {
			this.fetchPostById(postId).then((post) => {
				this.post = post;
			});
		}
	},
	methods: {
		...mapActions("blogPosts", ["fetchPostById"]),
	},
};
</script>

<template>
	<div class="blog-detail-wrapper">
		<div class="blog-detail-container">
			<div
				class="blog-body"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="250"
			>
				<div class="blog-img-container">
					<!-- waits till img is ready -->
					<img
						v-if="post.thumbnail_data"
						:src="post.thumbnail_data.dataURL"
						:alt="`img of blog ${post.title}`"
					/>
				</div>
				<h2 class="blog-title">
					{{ post.title }}
				</h2>
				<div v-html="post.content" :class="{ 'custom-class': true }"></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.custom-class{
	font: $font-thin-text-mb;
}
.blog-title {
	font: $font-subtitle-mb;
	color: rgba($white, 0.5);
	margin-bottom: 1em;
}
.blog-img-container {
	margin-bottom: 1em;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
.blog-description {
	margin-bottom: 2em;
}
.resources-container {
	li {
		margin-bottom: 1em;
	}
}
.resource {
	color: $white;
}
.blog-detail-wrapper {
	padding-block: 2em;
	display: flex;
	justify-content: center;

	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		.blog-detail-container {
			width: 75%;
		}
		.blog-title {
			font: $font-title-mb;
		}
		.blog-img-container {
			margin-bottom: 1em;
		}
	}
}
</style>
