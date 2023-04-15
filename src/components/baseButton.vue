<script>
import MartzIcon from "./icons/martz-icons.vue";
export default {
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
			<MartzIcon v-bind="$props"/>
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

}
.basebutton {
	padding: 0;
	background: none;
	font: $font-btn-mb;
	color: $white;
	border: 1px solid rgba($white, 0.5);
	border-radius: 5px;
	display: flex;
	// justify-content: center;
	// align-items: center;
	cursor: pointer;
	text-decoration: none;
	width: 60%;
	// margin-bottom: 0.3em;
	// gap: 1em;
	@include breakpoint(tablet) {
			font: $font-btn-tb;
		}
}
</style>
