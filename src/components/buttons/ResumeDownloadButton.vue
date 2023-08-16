	<script>
	import pdfjsLib from "pdfjs-dist";
	import BaseButton from "./BaseButton.vue";
	
	export default {
		components: { BaseButton },
		data() {
			return {
				pdfUrl: "/my-CV/Antonio_Martinez_CV.pdf",
				pdfDocument: null,
				pageNumber: 2,
			};
		},
		mounted() {
			this.loadPDF();
		},
		methods: {
			async loadPDF() {
				if (pdfjsLib) {
					const pdfLoadingTask = pdfjsLib.getDocument(this.pdfUrl);
					this.pdfDocument = await pdfLoadingTask.promise;
					// this.renderPage();
				}
			},
	
			downloadPDF() {
				const link = document.createElement("a");
				link.href = this.pdfUrl;
				link.download = "Antonio_Martinez_CV.pdf";
				link.target = "_blank";
				link.click();
			},
		},
	};
	</script>
<template>
	<div>
		<BaseButton
			@click.native="downloadPDF"
			text="Download Resume"
			icon="download"
			size="30"
		/>
	</div>
</template>

