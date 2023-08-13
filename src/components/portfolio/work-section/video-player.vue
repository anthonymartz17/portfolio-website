<script>
export default {
	name: "MainVideo",
	props: {
		videoId: {
			type: String,
			required: true,
		},
	},
	// data() {
	//   return {
	//     player: null,
	//   };
	// },
	// mounted() {
	//   // Load and initialize the YouTube iframe player for the main video
	//   this.player = new YT.Player(this.$refs.mainVideoPlayer, {
	//     height: "360",
	//     width: "640",
	//     videoId: this.videoId,
	//   });
	// },
	// beforeDestroy() {
	//   // Clean up the player instance before component destruction
	//   if (this.player) {
	//     this.player.destroy();
	//   }
	// },
};
</script>
<template>
	<div>
	
	</div>
</template>

<style></style>
