<template>
	<div>
		<!-- <canvas ref="pdfCanvas"></canvas> -->
    <BaseButton @click.native="downloadPDF" text="Download Resume" icon="download" size="30"/>
	</div>
</template>

<script>
import pdfjsLib from "pdfjs-dist";
import BaseButton from "../baseButton.vue"

export default {
  components:{BaseButton},
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
		// renderPage() {
		// 	this.pdfDocument.getPage(this.pageNumber).then((page) => {
		// 		// const canvas = this.$refs.pdfCanvas;
		// 		const context = canvas.getContext("2d");
		// 		const viewport = page.getViewport({ scale: 1.0 });

		// 		canvas.height = viewport.height;
		// 		canvas.width = viewport.width;

		// 		const renderContext = {
		// 			canvasContext: context,
		// 			viewport: viewport,
		// 		};
		// 		page.render(renderContext);
		// 	});
		// },
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
