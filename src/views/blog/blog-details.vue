<script>
// import BaseButton from "../baseButton.vue";
export default {
	// components: { BaseButton },
	data() {
		return {
			blog: {},
			blogs: [
				{
					id: 1,
					datePosted: "04/18/2023",
					img: "project1.jpeg",
					title: "Testing blog",
					body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam dignissimos animi sunt nostrum velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam dignissimos animi sunt nostrum velit?",
					resources: [
						{ id: 1, name: "chat gpt", link: "https://chat.openai.com/" },
						{
							id: 2,
							name: "youtube",
							link: "https://www.youtube.com/watch?v=ISv22NNL-aE&t=509s",
						},
					],
				},
				{
					id: 2,
					datePosted: "04/18/2023",
					img: "project2.jpeg",
					title: "Another blog testing",
					body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam dignissimos animi sunt nostrum velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam dignissimos animi sunt nostrum velit?",
					resources: [
						{ id: 1, name: "chat gpt", link: "https://chat.openai.com/" },
						{
							id: 2,
							name: "youtube",
							link: "https://www.youtube.com/watch?v=ISv22NNL-aE&t=509s",
						},
					],
				},
			],
		};
	},
	props: ["projectClicked"],
	created() {
		this.setBlog();
	},
	methods: {
		setBlog() {
			this.blog = this.blogs.find((x) => x.id == this.$route.query.id);
			console.log(this.blog);
		},
	},
};
</script>

<template>
	<div class="blog-detail-wrapper">
		<div class="blog-detail-container">
			<h2 class="blog-title" data-aos="fade-up" data-aos-duration="800">
				{{ blog.title }}
			</h2>
			<div class="blog-body"  data-aos="fade-up" data-aos-duration="800" 	:data-aos-delay="250">
				<div class="blog-img-container">
					<img :src="`/img/${blog.img}`" :alt="`img of blog ${blog.title}`" />
				</div>
				<div class="blog-description-container">
					<div class="blog-description">
						<p class="text-thin">{{ blog.body }}</p>
					</div>
					<ul class="resources-container">
						<li
							class="text-thin"
							v-for="resource in blog.resources"
							:key="resource.id"
						>
							<a class="resource" :href="resource.link">{{ resource.link }}</a>
						</li>
					</ul>
				</div>
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
