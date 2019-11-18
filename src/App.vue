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
    <div id="main-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./css/main.scss"
</style>
