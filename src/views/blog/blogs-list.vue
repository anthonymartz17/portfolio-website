<script>
import MartzIcon from "@/components/icons/martz-icons.vue";
export default {
	components: {
		MartzIcon,
	},
	data() {
		return {
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
};
</script>

<template>
	<div class="home-blogs-main-container">
		<div class="blog-list-title"><h2>Blogs</h2></div>
		<div class="blog-list-body">
			<div v-for="blog in blogs" :key="blog.id" class="blog-container">
				<router-link
					class="blog-card"
					:to="{ name: 'blog-details', query: { id: blog.id } }"
				>
					<div class="blog-img-container">
						<img :src="`/img/${blog.img}`" alt="" />
					</div>
					<div class="card-desc">
						<h4 class="card-title">{{ blog.title }}</h4>

						<p class="text-thin">Posted on: {{ blog.datePosted }}</p>
						<div class="btn-container">
							<p class="text-p">VIEW POST</p>
							<MartzIcon icon="angleRight" size="18" color="accent" />
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.blog-container {
	min-height: 40vh;
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.075);
	margin-bottom: 1em;
}
.blog-list-title {
	font: $font-title-mb;
	margin-bottom: 1em;
	font-size: 1.2em;
}
.blog-card {
	display: block;
	border-radius: 5px;
	text-decoration: none;
	height: 100%;
}
.blog-img-container {
	border-radius: 5px;
	height: 60%;

	img {
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.card-desc {
// background: red;
	// margin: 1em;
	padding: 1em 0.5em;
	background: rgba(255, 255, 255, 0.075);
	height: 40%;
	
}
.btn-container {
	display: flex;
	gap: 1em;
	align-items: center;
	margin-block: 1em;
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
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1em;
		}
		.blog-container {
			transition: 250ms ease-in-out;

			&:hover {
				transform: scale(1.05);
			}
		}
	}
}
</style>
