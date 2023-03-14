<script>
export default {};
</script>

<template>
	<div class="container">
		<header>
			<h1 class="lg-title">Antonio Martinez</h1>
			<h2 class="l-title">Front-End Dev</h2>
		</header>
		<div class="headshot-img">
			<img src="/img/headshotMobile.png" alt="" />
		</div>
		<div class="links">
			<router-link :to="{name:'portfolio'}" class="btn btn-main">
				<font-awesome-icon icon="fa-solid fa-briefcase" class="icon" />
				<span>Portfolio</span>
			</router-link>
			<div class="btn btn-second">
				<font-awesome-icon icon="fa-brands fa-youtube" />
				<span
					>Watch

					<small>me talk projects</small>
				</span>
			</div>
			<div class="btn btn-second">
				<font-awesome-icon icon="fa-brands fa-blogger" />
				<span
					>Read
					<small>Projects articles</small>
				</span>
			</div>
		</div>

		<div class="social-media-container">
			<font-awesome-icon
				icon="fa-regular fa-envelope"
				size="2x"
				class="icon"
			/>

			<font-awesome-icon
				icon="fa-brands fa-linkedin-in"
				size="2x"
				class="icon"
			/>

			<font-awesome-icon icon="fa-brands fa-github" size="2x" class="icon" />

			<font-awesome-icon
				icon="fa-brands fa-instagram"
				size="2x"
				class="icon"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-family: $font-poppins;
	background: $background-1;
	height: 100vh;
	color: $white;
	padding: 1em;
}
.headshot-img {
	display: flex;
	justify-content: center;
	width: 13em;
}
.lg-title {
	font: $font-xl-mb;
	color: rgba($white, 0.3);
}
.l-title {
	font: $font-title-mb;
	text-align: center;
}
.links {
	width: 70%;
}
.btn-main {
	color: rgba($white, 0.9);
	border: 1px solid $accent !important;
}
.btn {
	font: $font-btn-mb;
	display: flex;
	align-items: center;
	padding: 0.3em;
	border: 1px solid rgba($white, 0.5);
	margin-bottom: 0.3em;
	border-radius: 5px;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s ease-in-out;
	&:hover {
		color: $white;
	}
	span {
		display: block;
		width: 100%;
		margin-inline: 0.3em;
		position: relative;
	}
	small {
		color: rgba($white, 0.7);
		position: absolute;
		bottom: -10px;
		left: 0px;
		display: block;
		font: $font-small-mb;
	}
}
.btn-second {
	color: rgba($white, 0.8);
}

.social-media-container {
	width: 100%;
	display: flex;
	justify-content: space-around;
	color: rgba($white, 0.8);
	cursor: pointer;

	.icon {
		transition: 0.3s ease-in-out;

		&:hover {
			color: $white;
		}
	}
}
</style>
