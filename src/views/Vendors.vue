<template>
  <div class="vendors">
    <VendorInfo class="vendorinfo" :opened="vendorInfo.opened" :logo="vendorInfo.logo" :name="vendorInfo.name" :cash="vendorInfo.cash" :credit="vendorInfo.credit" :phone="vendorInfo.phone" :email="vendorInfo.email" :site="vendorInfo.site" />
      <h2>Vendor Directory</h2>
      <div class="search">
        <autocomplete :search="search" placeholder="Search for a vendor" aria-label="Search for a vendor"></autocomplete>
      </div>
      <div id="vendoroverlay">
      <ul>
        <li :key="vendor.name" v-for="vendor in vendors" @click="updateVendor(vendor)">
          <div>
            <div class="imgContainer">
              <img :src="vendor.logo" alt="vendor logo" />
            </div>
            <h3>{{ vendor.name }}</h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import VendorInfo from '@/components/VendorInfo.vue'
import * as vendorsList from '../assets/js/vendorsList.js'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

export default {
  name: "Vendors",
  components: {
    VendorInfo, 
    Autocomplete
  },
  data: function () {
    return {
      vendorInfo: {
        name: "Apple Farms",
        phone: "1234567890",
        email: "applefarms@ithaca.com",
        site: "https://applefarms.com",
        cash: true,
        credit: false,
        logo: "/img/applefarms.jpg",
        opened: false
      },
      vendors: vendorsList.default
    }
  },
  methods: {
    search () {
      console.log("searching...");
    },
    updateVendor (vendor) {
      document.getElementById("vendoroverlay").classList.add("vendorinfooverlay");
      this.vendorInfo = vendor;
      this.vendorInfo.opened = true;
      console.log(this.vendorInfo.opened);
    }
  },
  mounted() {
    console.log(vendorsList.default);
  }
}
</script>

<style scoped>
  h2 {
    margin-top: 20px !important;
  }

  .search {
    width: 95%;
    margin: 0 auto 20px auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
  }

  ul li {
    flex-basis: 33%;
    list-style: none;
    margin: 10px 0;
  }

  ul li div {
    width: 80%;
    margin: 0 auto;
  }

  .imgContainer {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }

  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }

  h3 {
    margin-top: 5px;
  }

  .fade {
    background-color: black;
  }

  .vendorinfooverlay {
    filter: blur(3px);
    -webkit-filter: blur(3px);
  }

  .vendorinfo {
    width: 80%;
    position: absolute;
    top: 20%;
    left: 10%;
    z-index: 5;
    filter: none;
    -webkit-filter: none;
  }
</style>
