<template>
	<div class="pdf-view">
		<object
			:data="resumeURL"
			type="application/pdf"
			width="100%"
			height="600px"
		>
			<div class="noPdfView">
				<p>
					Your browser does not support PDF viewing. You can download the resume
					here.
				</p>
				<ResumeDownload class="button" />
			</div>
		</object>
	</div>
</template>

<script>
import { methods, mounted } from "vue2-dropzone";
import ResumeDownload from "../components/buttons/ResumeDownloadButton.vue";
export default {
	components: { ResumeDownload },
	data() {
		return {
			resumeURL: "",
		};
	},

	mounted() {
		this.resumeURL = process.env.VUE_APP_RESUME_URL + "&v=" + Date.now(); // to prevent caching
	},
};
</script>

<style lang="scss" scoped>
.pdf-view {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;

	div {
		color: $white;
		font: $font-text-mb;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 1em;
	}
	.button {
		width: 30em;
		margin-block: 2em;
	}
}
</style>
