<script>
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
export default {
	components: {
		MartzIcon,
	},
	data() {
		return {
			title: "About me",
			description: [
				{
					id: "p1",
					text: "I'm a passionate coder, dedicated father of two amazing girls, and an avid adventure seeker. When I'm not immersed in lines of code, I'm out exploring the world, seeking new thrills and experiences to share with my family.",
				},
				{
					id: "p2",
					text: "Another one of my cherished hobbies is photography; I find joy in capturing the beauty of moments and nature through my lens. This website is a reflection of my journey as both a developer and a family man, and I hope you enjoy exploring my work and interests. Let's connect and embark on exciting new projects together!",
				},
			],
			hobbiesIcons: [
				"audioBook",
				"workout",
				"meditation",
				"cooking",
				"salsaDance",
			],
		};
	},

	props: ["scrollPosition"],
	methods: {},
	computed: {},
};
</script>

<template>
	<div class="aboutme-wrapper">
		<div class="aboutme-container">
			<h2
				class="sections-title-global"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				{{ title }}
			</h2>
			<div
				class="about-body"
				data-aos="fade-up"
				data-aos-duration="800"
				:data-aos-delay="250"
			>
				<div class="aboutme-img">
					<img src="/img/aboutme.png" alt="pictures of antonio's hobbies" />
				</div>
				<div class="aboutme-description">
					<div class="parragraph">
						<p class="paragraph" v-for="para in description" :key="para.id">{{ para.text }}</p>
					</div>
					<div>
						<h5 class="other-hobbies">Other hobbies:</h5>
						<div class="hobbies-icons-container">
							<MartzIcon
								class="icon"
								:icon="icon"
								v-for="(icon, idx) in hobbiesIcons"
								:key="icon"
								:style="{ 'animation-delay': idx * 0.2 }"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accent {
	background: $accent;
}
.aboutme-wrapper {
	background: $bg-2;
	display: flex;
	justify-content: center;
	padding: 0 1em;
}
.aboutme-container {
	margin-bottom: 5em;
	color: $white;
	position: relative;
}
.paragraph {
	margin-bottom: 1em;
}
.other-hobbies {
	font: $font-subtitle-mb;
	color: rgba($white, 0.4);
	margin-bottom: 1em;
}
.aboutme-description {
	flex: 1.5;
	font: $font-thin-text-mb;
	margin-bottom: 1em;
}

.aboutme-img {
	margin-bottom: 1.5em;
	height: 50%;
	width: 100%;
	box-shadow: 0 3px 20px rgba(255, 255, 255, 0.151);

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
}
.hobbies-icons-container {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 1em;
}
.icon {
	height: 5em;
	width: 5em;
	margin-bottom: 0.5em;
	opacity: 0.2;
}

.aboutme-wrapper {
	@include breakpoint(tablet) {
		.aboutme-container {
			width: 85%;
			margin-bottom: 10em;
		}
		.aboutme-img {
			flex: 2;
		}
	}
	@include breakpoint(desktop) {
		.aboutme-container {
			width: 75%;
			// max-width: 60%;
		}
		.about-body {
			display: flex;
			gap: 1em;
		}
		.aboutme-description {
			display: flex;
			flex-direction: column;
		}
		.icon {
			height: 4em;
			width: 4em;
		}
	}
}
</style>
