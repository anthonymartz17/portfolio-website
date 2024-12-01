<script>
import { mapActions } from "vuex";
// import BaseButton from "../baseButton.vue";
export default {
	// components: { BaseButton },
	data() {
		return {
			post: {},
			isLinkCopied: false,
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
		...mapActions("blogPosts", ["fetchPostById", "updatePost"]),
		scrollTo() {
			this.$refs.TheHeader.$refs.header.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		},
		getUrl() {
			const { protocol, host } = window.location;
			const path = this.$route.fullPath;
			return `${protocol}//${host}${path}`;
		},
		copyToClipboard() {
			const text = this.getUrl();
			navigator.clipboard.writeText(text);
			alert("Link Copied!");
		},

		// async updateLikes() {
		// 	try {
		// 		this.post.likes++;
		// 		const postUpdatedLikes = await this.updatePost({ post: this.post });
		// 	} catch (error) {
		// 		throw error;
		// 	}
		// },
	},
};
</script>

<template>
	<div class="blog-detail-wrapper">
		<div class="blog-detail-container" ref="postStart">
			<div
				class="blog-body"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="250"
			>
				<h2 class="blog-title">
					{{ post.title }}
				</h2>
				<div class="post-info-container">
					<div class="post-info text-small">
						<p>{{ post.author }}</p>
						<p>{{ post.date_posted }}</p>
						<p>{{ post.read_time }} min read.</p>
					</div>
					<div class="post-likes">
						<!-- <span @click="updateLikes">
							<span class="material-symbols-outlined"> thumb_up </span>
							<span>{{ post.likes }}</span>
						</span> -->
						<span @click="copyToClipboard">
							<span class="material-symbols-outlined"> share</span>
							<span>Share Link</span>
						</span>
					</div>
				</div>
				<div class="blog-img-container">
					<img
						v-if="post.thumbnail_data"
						:src="post.thumbnail_data.dataURL"
						:alt="`img of blog ${post.title}`"
					/>
				</div>
				<div v-html="post.content" :class="{ 'custom-class': true }"></div>
			</div>
			<div class="resources-links">
				<ul>
					<li v-for="link in post.resources" :key="link">
						<p>{{ link.name }}</p>
						<a :href="link.link">{{ link.link }}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.custom-class {
	font: $font-thin-text-mb;
}
.blog-title {
	font: $font-subtitle-mb;
	color: rgba($white, 0.5);
	margin-bottom: 2em;
}
.post-likes {
	border-block: 1px solid rgba(128, 128, 128, 0.206);
	padding-block: 1em;
	margin-block: 1em;
	display: flex;
	align-items: center;
	gap: 1em;
	font: $font-thin-text-mb;
}
.post-likes span {
	display: flex;
	align-items: center;
	gap: 0.3em;
	cursor: pointer;
	min-width: 20px;
}

.post-info {
	width: 80%;
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	margin-bottom: 3em;
	p {
		padding-right: 1em;
		border-right: 1px solid $accent;
	}
	& p:last-child {
		border-right: none;
	}
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
		.blog-title {
			margin-bottom: 2em;
		}

		.post-info {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			gap: 1em;
			margin-bottom: 4em;
		}
		.blog-img-container {
			margin-bottom: 3em;
		}
	}
	@include breakpoint(desktop) {
		.blog-detail-container {
			width: 75%;
		}
		.blog-title {
			font: $font-title-mb;
		}
	}
}
</style>
