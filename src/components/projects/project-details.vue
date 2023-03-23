<script>
export default {
	data() {
		return {};
	},
	methods: {
		fireToggleMobileMenue() {
			this.$emit("fireToggleMobileMenue");
		},
	},
};
</script>

<template>
	<div class="project-detail-container">
		<div class="backToProjects" @click="fireToggleMobileMenue">
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
				class="backToProjects-arrow" />
			<p>Back to project</p>
		</div>
		<div class="backToProjects" @click="fireToggleMobileMenue">
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
				class="backToProjects-arrow" />
			<p>Back to project</p>
		</div>
	
	</div>
</template>

<style lang="scss" scoped>
.project-detail-container {
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2em;
	background: $background-1;
	height: 100vh;
	font: $font-text-mb;

	.backToProjects {
		flex: 0.5;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 1px solid rgba($white, 0.3);

		&-arrow {
			color: $accent;
		}
	}
}
</style>
