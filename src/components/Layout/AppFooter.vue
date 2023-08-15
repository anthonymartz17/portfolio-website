<script>
import SocialMedia from "@/components/SocialMedia.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";
export default {
	components: {
		SocialMedia,
		MartzIcon,
	},

	data() {
		return {
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
	<div class="footer-wrapper" data-aos="fade-up" data-aos-duration="800">
		<div class="the-footer">
			<div class="logo-socialMedia">
				<MartzIcon icon="logo" size="80" />
				<SocialMedia class="media" />
			</div>

			<div class="copyRight">
				<p>Designed and built by</p>
				<p>Antonio Martinez</p>
				<small>© {{ year }}</small>
			</div>
		</div>
		<div class="backhome" @click="emitScrollToEvent('Home')">
			<MartzIcon class="angleUp" icon="angleUp" size="50" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
	position: relative;
	z-index: 2;
	background: $bg-2-lighter;
	box-shadow: 0 -3px 5px rgba(255, 255, 255, 0.288);
	padding-inline: 1em;
	display: flex;
	align-items: center;
	min-height: 50vh;
}
.backhome {
	// background: blue;

	position: absolute;
	top: -45px;
	left: 50%;
	transform: translate(-50%);
	background: $bg-2-lighter;
	width: 100px;
	height: 100px;
	border-radius: 50px;
	display: grid;
	justify-items: center;
	padding-top: 0.5em;

	&::before {
		content: "";
		position: absolute;
		border-radius: 50px 50px 0 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		background-color: transparent;
		box-shadow: 0 -3px 5px rgba(255, 255, 255, 0.288);
		z-index: 1;
	}
}
.the-footer {
	flex: 1;
	height: 20em;
	color: $white;
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

.logo-socialMedia {
	display: grid;
	place-items: center;
	gap: 2em;
}
.logo {
	text-align: center;
	margin-bottom: 3em;
}
.media {
	font-size: 1.2em;
	margin-bottom: 1.5em;
}
.copyRight {
	font: $font-small-mb;
	text-align: center;
}

.footer-wrapper {
	@include breakpoint(tablet) {
		.media {
			width: 20em;
		}
	}
}
</style>
