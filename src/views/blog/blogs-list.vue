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
	mounted() {
    AOS.init();
  },
};
</script>

<template>
	<div class="home-blogs-main-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
		<div class="blog-list-title" >
			<h2>Blogs</h2>
		</div>
		<div class="blog-list-body">
			<!-- <divclass="blog-container"> -->
			<router-link
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="250 * idx"
				v-for="(blog, idx) in blogs"
				:key="blog.id"
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
			<!-- </div> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
// .blog-container {
// 	min-height: 40vh;
// 	margin-bottom: 1em;
// 	border: 1px solid;
// }
.blog-list-body {
	display: grid;
	gap: 1em;
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
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.151);
	border: 1px solid rgba($white, 0.1);
	background: rgba(255, 255, 255, 0.075);
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
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1em;
		}
		.blog-card {
			transition: 250ms ease-in-out;

			&:hover {
				transform: scale(1.05);
			}
		}
	}
}
</style>
