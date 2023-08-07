<script>
import MartzIcon from "@/components/icons/martz-icons.vue";
import BaseButton from "@/components/baseButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	components: {
		MartzIcon,
		BaseButton,
	},
	data() {
		return {
			blogActions: [
				{
					icon: "see",
					text: "View post",
					authRequired: false,
				},
				{
					icon: "write",
					text: "Edit",
					routerLink: "admin-app",
					authRequired: true,
				},
				{ icon: "delete", text: "Delete", authRequired: true },
			],
		};
	},

	mounted() {
		this.$aos.init();
		this.setBlogPosts();
	},
	methods: {
		...mapActions("blogPosts", ["setBlogPosts", "deletePost"]),
		...mapActions("auth", ["setAlertMsg"]),
		postAction(action) {
			console.log(action);
			switch (action.text) {
				case "Edit":
					this.$router.push({
						name: "admin-app",
						query: { postId: action.id },
					});
					break;
				case "Delete":
					this.deletePost(action);
					// this.setAlertMsg({
					// 	type: "warning",
					// 	title: "Delete",
					// 	msg: `Are you sure you want to delete post ${action.blogTitle}`,
					// });
					break;
				default:
					this.$router.push({
						name: "blog-details",
						params: { postId: action.id },
					});
					break;
			}
		},
		guardAdminActions(action) {
			let show = true;
			if (action.authRequired && !this.isLoggedIn) {
				show = false;
			}

			return show;
		},
		fitTitle(title) {
			const words = title.split(" ");
			return words.length > 10 ? `${words.slice(0, 10).join(" ")}...` : title;
		},
	},
	computed: {
		...mapGetters("blogPosts", ["blogPosts"]),
		...mapGetters("auth", ["isLoggedIn"]),
	},
};
</script>

<template>
	<div
		class="home-blogs-main-container"
		data-aos="fade-up"
		data-aos-duration="800"
		data-aos-delay="400"
	>
		<div class="blog-list-title">
			<h2>Blogs</h2>
		</div>
		<div class="blog-list-body">
			<div v-if="blogPosts.length == 0" class="noBlogs">
				<p class="text-thin">No blogs have been added</p>
			</div>
			<template v-else>
				<div
					data-aos="fade-up"
					data-aos-duration="800"
					:data-aos-delay="250 * idx"
					v-for="(blog, idx) in blogPosts"
					:key="blog.id"
					class="blog-card"
				>
					<div v-if="blog.thumbnail_data" class="blog-img-container">
						<img :src="blog.thumbnail_data.dataURL" alt="blog post thumbnail" />
					</div>
					<div class="card-desc">
						<h4 class="card-title">{{ fitTitle(blog.title) }}</h4>

						<p class="text-thin">Posted on: {{ blog.date_posted }}</p>
						<div class="btn-container">
							<BaseButton
								v-show="guardAdminActions(action)"
								@click.native="
									postAction({
										...blog,
										...action,
									})
								"
								v-for="action in blogActions"
								:key="action.icon"
								:icon="action.icon"
								:text="action.text"
								:size="30"
								class="btn-blogActions"
							/>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.noBlogs {
	min-height: 30vh;
}
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
	margin-block: 1em;
}
.btn-blogActions {
	margin-bottom: 0.5em;
	width: 100%;
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
	}
}
</style>
