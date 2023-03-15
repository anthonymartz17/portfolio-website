<script>
export default {
	data() {
		return {
			navLinks: [
				{icon: "fa-solid fa-house", link: "Home"},
				{icon: "fa-solid fa-hands-holding-circle", link: "Work"},
				{icon: "fa-regular fa-lightbulb", link: "Skills"},
				{icon: "fa-regular fa-address-card", link: "About"},
				{icon: "fa-brands fa-blogger", link: "Blogs"},
				{icon: "fa-solid fa-handshake", link: "Hire Me"},
			],
		};
	},
};
</script>

<template>
	<div class="nav-container">
		<ul class="nav-container-links">
			<li class="nav-container-link" v-for="link in navLinks" :key="link">
				<font-awesome-icon :icon="link.icon" /> <span>{{ link.link }}</span>
			</li>
		</ul>
    <div>
      
    </div>
	</div>
</template>

<style lang="scss" scoped>
.nav-container {
	background: $background-2;
	height: 100vh;
 &-links{
  background: red;
  
 }
	&-link {
		color: $white;
		list-style: none;
		font: $font-text-mb;
	}
}
</style>
