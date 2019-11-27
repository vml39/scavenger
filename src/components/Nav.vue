<template>
    <nav>
        <router-link to="/">
            <div class="nav-button">Progress</div>
        </router-link>
        <router-link to="/vendors">
            <div class="nav-button">Vendors</div>
        </router-link>
    </nav>
</template>

<script>
export default {
   name: 'Nav'
}
</script>

<style lang="scss">
  @import "../css/main.scss"
</style>