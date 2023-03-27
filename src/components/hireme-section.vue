<script>
export default {
  data(){
    return{
      title:'Hire me'
    }
  }
};
</script>
<template>
	<div class="hireme-container"> 
    <h2 class="sections-title-global">{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.hireme-container {
  background: red;
	padding: 3em 1.5em;
	// background: $background-2;
	height: 100vh;
}
</style>
