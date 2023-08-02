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
			<!-- <h2 class="blog-title" data-aos="fade-up" data-aos-duration="800">
				{{ post.title }}
			</h2> -->
			<div
				class="blog-body"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="250"
			>
				<div class="blog-img-container">
					<!-- <img :src="post.thumbnail_data.url" :alt="`img of blog ${post.title}`" /> -->
				</div>
				<div v-html="post.content"></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.blog-detail-wrapper {
	padding-block: 2em;
	display: flex;
	justify-content: center;
}
.blog-detail-container {
	margin-bottom: 3em;

	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		width: 60%;
	}
}

.blog-title {
	font: $font-title-mb;
	color: rgba($white, 0.5);
	margin-bottom: 1em;
}
.blog-img-container {
	margin-bottom: 1em;
	height: 40vh;

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
</style>
