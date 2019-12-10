<template>
  <div id="app">
    <div id="main-container">
      <router-view/>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from "./components/Nav"
export default {
  name:"app",
  components: {
    Nav
  }, 
  created () {
    if (!localStorage.visited) {
      localStorage.setItem("visited", JSON.stringify([1, 2, 3, 4, 8]));
    }
    if (!localStorage.favorited) {
      localStorage.setItem("favorited", JSON.stringify([1, 8]));
    }
  }
}
</script>

<style lang="scss">
  @import "./css/main.scss"
</style>
