<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <div class="nav-button">Map</div>
      </router-link>
      <router-link to="/vendors">
        <div class="nav-button">Vendors</div>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./css/main.scss"
</style>
