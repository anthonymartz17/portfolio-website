<script>
import { mapActions } from "vuex";
// import store from "./store/index"
export default {
	beforeDestroy() {
		// Attach the 'beforeunload' event listener when the component is about to be destroyed
		window.removeEventListener("unload", this.signOut);
	},
	created() {
		// Attach the 'beforeunload' event listener when the component is created
		window.addEventListener("unload", this.signOut);
	},
	methods: {
		...mapActions("auth", ["signOut"]),
	},
};
</script>
<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style></style>
