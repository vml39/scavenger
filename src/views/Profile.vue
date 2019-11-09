<template>
  <div class="profile">
    <h2>Level {{ level }}</h2>
    <img alt="profile image" src="" />
    <h2>{{ name }}</h2>
    
    <div class="badges">
        <Badge name="photographer" /> <!-- display on click -->
    </div>
    <div class="favvendors">
        <FavVendor name="Apple Farms" />
        <VendorInfo /> <!-- display on click -->
    </div>
  </div>
</template>

<script>

import Badge from '@/components/Badge.vue'
import FavVendor from '@/components/FavVendor.vue'
import VendorInfo from '@/components/VendorInfo.vue'

export default {
  name: "Profile",
  components: {
    Badge, 
    FavVendor,
    VendorInfo
  },
  data () {
    return {
      day: "",
      forecast: "",
      low: "", // convert int to string
      high: "" // convert int to string
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
