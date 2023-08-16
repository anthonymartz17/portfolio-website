<script>
export default {
	props: ["post"],
	methods: {
		fitTitle(title) {
			const words = title.split(" ");
			return words.length > 10 ? `${words.slice(0, 10).join(" ")}...` : title;
		},
	},
};
</script>
<template>
	<router-link :to="`postDetail/${post.id}`" class="blog-card">
		<div v-if="post.thumbnail_data" class="blog-img-container">
			<img :src="post.thumbnail_data.dataURL" alt="blog post thumbnail" />
		</div>
		<div class="card-desc">
			<h4 class="card-title">{{ fitTitle(post.title) }}</h4>

			<p class="text-thin">Posted on: {{ post.date_posted }}</p>
		</div>
	</router-link>
</template>

<style lang="scss" scoped>
a {
	text-decoration: none;
}
.blog-card {
	display: block;
	border-radius: 5px;
	text-decoration: none;
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.151);
	border: 1px solid rgba($white, 0.1);
	background: rgba(255, 255, 255, 0.075);
	padding-bottom: 1em;
	max-height: 25em;

	&:hover {
		box-shadow: 0 3px 40px rgba(255, 255, 255, 0.151);
	}
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
</style>
