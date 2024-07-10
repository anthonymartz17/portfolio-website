<script>
import BaseButton from "@/components/buttons/baseButton.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";

export default {
	components: {
		BaseButton,
		MartzIcon,
	},
	mounted() {
		this.$aos.init({
			duration: 800,
			offset: 200,
		});
	},
};
</script>
<template>
	<section class="notfound-wrapper">
		<div class="notfound-container">
			<MartzIcon
				icon="404"
				:size="200"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="250"
			/>
			<h2
				class="page-title"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="300"
			>
				Page not found
			</h2>
			<router-link
				to="/portfolio"
				class="link"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="350"
			>
				<BaseButton class="custom-btn" icon="home" text="Back Home" size="30" />
			</router-link>
		</div>
	</section>
</template>
<style lang="scss" scoped>
/* Custom CSS to display images inline */

.notfound-container {
	min-width: 20em;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.page-title {
	font: $font-title-mb;
	color: $white;
	margin-bottom: 1em;
	font-size: 1.2em;
}

.custom-btn {
	width: 100%;
}
.link {
	width: 80%;
	text-decoration: none;
}

.notfound-wrapper {
	background: $bg-1;
	display: grid;
	place-items: center;
	height: 100vh;
}
</style>
