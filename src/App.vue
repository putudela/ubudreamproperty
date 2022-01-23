<template>
	<div id="app">
		
	</div>
	<router-view/>
</template>
<script>
export default {
	setup() {
		function scrollToTop(){
			window.scrollTo(0,0)
		}
		
		return{
			scrollToTop
		}
	},
}
</script>
<style>
#app {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	/* color: #2c3e50; */
}
/* #nav a.router-link-exact-active {
	color: #42b983;
} */
</style>
