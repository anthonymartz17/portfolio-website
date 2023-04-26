<script>
import BaseButton from "./baseButton.vue";
export default {
	components: {
		BaseButton,
	},
	emit: ["scrollToEvent"],
	methods: {
		emitScrollTo() {
			this.$emit("scrollToEvent", "Work");
		},
	},
};
</script>
<template>
	<div class="hero-wrapper">
		<div class="hero-section">
			<div class="photo-wrapper">
				<div class="hero-section-headshot">
					<img
						class="headshot"
						src="/img/headshotMobile.png"
						alt="head shot photo of developer"
					/>
					<img
						class="fullbody"
						src="/img/lookingStraight.png"
						alt="full body photo of developer"
					/>
				</div>
			</div>
			<div class="hero-section-text-container">
				<div class="hero-text">
					<h1 class="hero-section-title">
						Hi,<br />
						I'm Antonio Martinez,<br /><span>Front-end </span>developer
					</h1>
					<p class="hero-section-text">
						I care about the responsibilities that I'm trusted with.
					</p>
				</div>
				<div class="btn-container">
					<BaseButton
						class="cta"
						icon="mywork"
						text="View work"
						color="accent"
						size="30"
						@click.native="emitScrollTo"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero-wrapper {
	padding-top: 1em;
	background: $bg-1;
	height: 90vh;
	width: 100wh;
	display: flex;
	justify-content: center;
}
.hero-section {
	display: grid;
	align-items: center;
	margin: 2em 1em;


	.fullbody {
		display: none;
 
		@include breakpoint(desktop) {
			display: block;
		}
	}
	.photo-wrapper {
		// border: 1px solid;
		display: flex;
		justify-content: center;
		@include breakpoint(desktop) {
			order: 2;
		}
	}
	&-headshot {
		display: flex;
		justify-self: center;

		width: 50%;
		// margin-bottom: 2em;
		@include breakpoint(tablet) {
			width: 60%;
			display: flex;
			justify-content: center;
		}
		@include breakpoint(desktop) {
			width: 90%;
			display: flex;
			align-self: flex-end;
			margin: 0;
		}
		@include breakpoint(lg-device) {
			// width: 100%;
		}
	}
	.headshot {
		@include breakpoint(desktop) {
			display: none;
		}
	}
	.hero-section-text-container {
		padding-left: 1em;
		display: grid;
		justify-content: center;
		@include breakpoint(desktop) {
			display: block;
			align-self: center;
		}
	}
	&-title {
		color: $white;
		font: $font-title-mb;
		margin-bottom: 1em;
		@include breakpoint(tablet) {
			font: $font-title-tb;
			justify-content: center;
			br:first-child {
				display: none;
			}
		}
		@include breakpoint(tablet) {
			font: $font-title-dsk;
			justify-content: center;
			br:first-child {
				display: none;
			}
		}

		span {
			color: $accent;
		}
	}
	&-text {
		color: $white;
		font: $font-text-mb;
		margin-bottom: 2em;
		@include breakpoint(tablet) {
			font: $font-text-tb;
		}
	}
	.btn-container {
		@include breakpoint(tablet) {
			width: 70%;
		}
		@include breakpoint(desktop) {
		}
	}
}
.hero-wrapper {
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		.hero-section {
			height: 100%;
			display: flex;
			justify-content: space-between;
			width: 70%;
		}
	}
}
</style>
