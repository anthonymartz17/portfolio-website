<template>
	<div class="pdf-view">
		<object
			data="https://firebasestorage.googleapis.com/v0/b/portfolio-2023-166e2.appspot.com/o/pdfs%2Fantoniomartinez_cv_resume.pdf?alt=media&token=abc73407-4a80-4efd-a37c-682fc1bd8a21"
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
import ResumeDownload from "../components/buttons/ResumeDownloadButton.vue";
export default {
	components: { ResumeDownload },
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
