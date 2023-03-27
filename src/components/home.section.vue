<script>
export default {

};
</script>
<template>
	<div class="hero-section">
		<div class="hero-section-headshot">
			<img src="/img/headshotMobile.png" alt="" />
		</div>
		<div class="hero-section-text-container">
			<h1 class="hero-section-title">
				Hi,<br />
				I'm Antonio Martinez,<br /><span>Front-end </span>developer
			</h1>
			<p class="hero-section-text">
				I care about the responsibilities that I'm trusted with.
			</p>
			<div></div>
		</div>
		<div class="hero-section-cta" @click="scrollTo('work')">
			<font-awesome-icon icon="fa-solid fa-hands-holding" />
			<span>View Work</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero-section {
	padding: 3em 1.5em;
	background: $background-1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 90vh;

	&-headshot {
		display: flex;
		justify-content: center;
		width: 12em;
		align-self: center;
	}
	&-title {
		color: $white;
		font: $font-title-mb;
		margin-bottom: 1em;

		span {
			color: $accent;
		}
	}
	&-text {
		color: $white;
		font: $font-text-mb;
		margin-bottom: 2em;
	}

	&-cta {
		@include baseButton($white);
		position: relative;
		z-index: 0;
		span {
			display: block;
		}
		&::after {
			content: ">>";
			position: absolute;
			top: 7px;
			right: 5px;
			color: $accent;
		}

	}
}


</style>
