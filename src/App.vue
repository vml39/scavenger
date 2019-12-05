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
    localStorage.setItem("visited", JSON.stringify([1, 2, 3, 4, 8]));
    localStorage.setItem("favorited", JSON.stringify([1, 3, 8]));
  }
}
</script>

<style lang="scss">
  @import "./css/main.scss"
</style>
