<template>
  <div class="vendors">
    <h2>Vendor Directory</h2>
    <!-- search bar -->
    <autocomplete :search="search" placeholder="Search for a vendor" aria-label="Search for a vendor"></autocomplete>
    <!-- vendor info components -->

  </div>
</template>

<script>

import VendorInfo from '@/components/VendorInfo.vue'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

export default {
  name: "Vendors",
  components: {
    VendorInfo, 
    Autocomplete
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
