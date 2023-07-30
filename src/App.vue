	
	<script>
	import store from "./store/index"
	export default {
		created() {
			console.log(store, 'pleaseee');
			console.log(this.$store, 'kkkkkk');
	}
	}
	</script>
<template>
	<div id="app">
		<router-view />
	</div>
</template>



<style>

</style>
