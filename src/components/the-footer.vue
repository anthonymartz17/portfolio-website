<script>
export default {
	data() {
		return {
			navLinks: [
				{ icon: "fa-solid fa-house", name: "Home", active: true },
				{
					icon: "fa-solid fa-hands-holding-circle",
					name: "Work",
					active: false,
				},
				{ icon: "fa-regular fa-lightbulb", name: "Skills" },
				{ icon: "fa-regular fa-address-card", name: "About" },
				{ icon: "fa-brands fa-blogger", name: "Blogs", route: "home-blog" },
				{ icon: "fa-solid fa-handshake", name: "Hire Me", accent: true },
			],
			year: new Date().getFullYear(),
		};
	},
	methods: {
		emitScrollToEvent(section) {
			this.$emit("scrollToEvent", section);
		},
	},
};
</script>
<template>
	<div class="the-footer">
		<div class="bottom-links">
			<div class="footer-nav">
				<ul>
					<template v-for="link in navLinks">
						<li class="link-item"  v-if="!link.route" @click="emitScrollToEvent(link.name)" :key="link.name">
							{{ link.name }}
						</li>
						<router-link class="link-item"  v-if="link.route" :to="{name: link.route}" :key="link.name">{{ link.name }}</router-link>
					</template>
				</ul>
			</div>
			<div class="copyRight">
				<p>Designed and built by</p>
				<p>Antonio Martinez</p>
				<small>© {{ year }}</small>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.the-footer {
	background: $bg-2;
	padding: 1.5em;
	padding-bottom: 3em;
	color: $white;
	padding-top: 7em;
}

.bottom-links {
	border-top: 1px solid rgba($white, 0.3);
	padding-block: 1em;
}
.footer-nav {
	font: $font-small-mb;

	ul {
		margin: 0;
		padding: 0;
		text-indent: 0;
		list-style-type: 0;
		display: flex;
		justify-content: space-between;
		margin-bottom: 3em;
	}
	li {
		list-style: none;
	}
	.link-item{
		color: $white;
		text-decoration: none;
	}
}
.copyRight {
	font: $font-small-mb;
	text-align: center;
}
</style>
