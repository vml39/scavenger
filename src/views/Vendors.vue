<template>
  <div class="vendors">
    <h2>Vendor Directory</h2>
    <autocomplete :search="search" placeholder="Search for a vendor" aria-label="Search for a vendor"></autocomplete>
    <ul>
      <li :key="vendor" v-for="vendor in vendors">
        <VendorInfo {{ vendor }} /> <!-- render each vendor component here -->
      </li>
    </ul>
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
      vendors: []
    }
  },
  methods: {
  }
}
</script>

<style>
  .search {
    width: 90%;
    margin: 0 auto;
  }
</style>
