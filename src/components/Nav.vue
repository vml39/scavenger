<template>
    <div class = "nav">
        <nav>
            <router-link to="/map">Map</router-link>
            <router-link to="/vendors">Vendor</router-link>
        </nav>
    </div>
</template>

<script>
export default {
   name: 'Nav'
}
</script>

// Add import statements to map and vendor and merge to dev.  Do git checkout dev and get merge nav.