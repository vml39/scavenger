<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
