<template>
	<div class="basebutton">
		<font-awesome-icon :icon="icon" />
		<span>{{ text }}</span>
	</div>
</template>

<script>
export default {
	props: ["text", "icon"]
};
</script>

<style lang="scss" scoped>
.basebutton {
	@include baseButton($white);
}
</style>
