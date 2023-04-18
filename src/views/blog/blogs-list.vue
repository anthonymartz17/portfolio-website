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
		<div class="sections-title-global"><h2>Blogs</h2></div>
		<div class="blog-list-body">
			<div v-for="blog in blogs" :key="blog.id">
				<router-link class="blog-card" :to="{name:'blog-details',query:{id:blog.id}}" >
					<div class="blog-img-container">
						<img :src="`/img/${blog.img}`" alt="" />
					</div>
					<div class="card-desc">
						<h3 class="card-title">{{ blog.title }}</h3>

						<p class="text-p">Posted on: {{ blog.datePosted }}</p>
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
.blog-card {
	margin-bottom: 2em;
	min-height: 50vh;
	background: rgba(255, 255, 255, 0.075);
	border-radius: 5px;
	box-shadow: rgba(236, 236, 236, 0.12) 0px 1px 3px;
}
.blog-img-container {
	border-radius: 5px;
	width: 100%;
	height: 70%;
	margin-bottom: 1em;

	img {
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
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
</style>
