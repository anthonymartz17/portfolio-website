<template>
	<div class="basebutton">
		<font-awesome-icon :icon="icon" :class="{icon: iconAccent}" />
		<span>{{ text }}</span>
	</div>
</template>

<script>
export default {
	props: ["text", "icon", "iconAccent"]
};
</script>

<style lang="scss" scoped>
.basebutton {
	font: $font-btn-mb;
  padding: .8em 1em;
	color: $white;
	border: 1px solid rgba($white, 0.5);
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
  width: 60%;
  margin-bottom: 0.3em;
  gap: .5em;
}
.icon{
	color: $accent;
	// margin-inline: .5em;
}
</style>
