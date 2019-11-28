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
  }
}
</script>

<style lang="scss">
  @import "./css/main.scss"
</style>
