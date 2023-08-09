<script>
import MartzIcon from "../icons/martz-icons.vue";
export default {
	name: 'BaseButton',
	components: {
		MartzIcon,
	},
	props: ["text", "icon", "color", "size"],
};
</script>
<template>
	<button class="basebutton">
		<span class="btn-text">{{ text }}</span>
		<div class="btn-icon">
			<MartzIcon class="mainIcon" v-bind="$props" />
			<MartzIcon class="angleRight" icon="angleRight" :size="25" color="accent"/>
		</div>
	</button>
</template>

<style lang="scss" scoped>
.btn-text {
	position: relative;
	padding: 1em;
	flex: 4;
	&::after {
		content: "";
		height: 50%;
		position: absolute;
		opacity: 0.2;
		border-right: 1px solid rgba($white, 0.8);
		right: 0;
	}
}
.btn-icon {
	display: flex;
	flex: 1;
	padding: 0.7em;
	align-self: center;
	justify-content: center;
}

.basebutton {
	position: relative;
	padding: 0;
	background: none;
	font: $font-btn-mb;
	color: $white;
	border: 1px solid rgba($white, 0.5);
	border-radius: 5px;
	display: flex;
	cursor: pointer;
	text-decoration: none;
	width: 60%;
	box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
	transition: all 0.5s;
	@include breakpoint(tablet) {
		// font: $font-btn-tb;
	}
}

.angleRight {
	display: none;
	@include breakpoint(desktop) {
		display: block;
		position: absolute;
		opacity: 0;
		top: 50%;
		right: -20px;
		transform: translate(-50%, -50%);
		transition: 0.5s;
		font: $font-title-tb;
	}
}
.mainIcon {
	@include breakpoint(desktop) {
		transition: 0.3s;
	}
}

.basebutton:hover {
	@include breakpoint(desktop) {
		padding-right: 24px;
		padding-left: 8px;
	}
}
.basebutton:hover .angleRight {
	@include breakpoint(desktop) {
		opacity: 1;
		right: 10px;
	}
}
.basebutton:hover .mainIcon {
	@include breakpoint(desktop) {
		transform: translate(-50%);
		opacity: 0;
	}
}
</style>
