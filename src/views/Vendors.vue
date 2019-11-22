<template>
  <div class="vendors">
    <h2>Vendor Directory</h2>
    <div class="search">
      <autocomplete :search="search" placeholder="Search for a vendor" aria-label="Search for a vendor"></autocomplete>
    </div>
    <VendorInfo class="vendorinfo" :opened="true" :logo="vendorInfo.logo" :name="vendorInfo.name" :cash="vendorInfo.cash" :credit="vendorInfo.credit" :phone="vendorInfo.phone" :email="vendorInfo.email" :site="vendorInfo.site" />
    <ul>
      <li :key="vendor" v-for="vendor in vendors" @click="updateVendor(vendor)">
        <div>
          <div class="imgContainer">
            <img :src="vendor.logo" alt="vendor logo" />
          </div>
          <h3>{{ vendor.name }}</h3>
        </div>
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
      },
     vendors: [
        {
          name: "Apple Farms",
          phone: "1234567890",
          email: "applefarms@ithaca.com",
          site: "https://applefarms.com",
          cash: true,
          credit: false,
          logo: "/img/applefarms.jpg",
          // Source: https://www.thrillist.com/lifestyle/new-york/best-apple-picking-near-nyc
        },
        {
          name: "Abe Farms",
          phone: "1234567890",
          email: "abefarms@ithaca.com",
          site: "https://abefarms.com",
          cash: true,
          credit: true,
          logo: "/img/abefarms.jpg",
          // Source: https://www.massaudubon.org/get-outdoors/wildlife-sanctuaries/drumlin-farm
        },
        {
          name: "Beecher's Cheese",
          phone: "1234567890",
          email: "beecherscheese@ithaca.com",
          site: "https://beecherscheese.com",
          cash: false,
          credit: true,
          logo: "/img/beecherscheese.jpg"
          // Source: https://www.farmanddairy.com/top-stories/8-tips-to-start-a-dairy-farm/423679.html
        },
        {
          name: "Bethany's Botanical Garden",
          phone: "1234567890",
          email: "bethanysbotanicalgarden@ithaca.com",
          site: "https://bethanysbotanicalgarden.com",
          cash: true,
          credit: false,
          logo: "img/bethanysbotanicalgarden.jpg"
          // Source: https://www.atlasobscura.com/articles/worlds-most-beautiful-botanical-gardens
        },
        {
          name: "Daisy Farm",
          phone: "1234567890",
          email: "daisyfarm@ithaca.com",
          site: "https://daisyfarm.com",
          cash: true,
          credit: true,
          logo: "/img/daisyfarm.jpg"
          // Source: https://www.countryliving.com/gardening/a22109231/outdoor-daisy-flower-care/
        },
        {
          name: "Elena Eatery",
          phone: "1234567890",
          email: "elenaeatery@ithaca.com",
          site: "https://elenaeatery.com",
          cash: true,
          credit: true,
          logo: "img/elenaeatery.png"
          // Source: https://emojipedia.org/fork-and-knife/
        },
        {
          name: "Georgian Winery",
          phone: "1234567890",
          email: "georgianwinery@ithaca.com",
          site: "https://georgianwinery.com",
          cash: true,
          credit: true,
          logo: "img/georgianwinery.jpg"
          // Source: https://singletreewinery.com/abbotsfords-singletree-winery-opens-a-second-location-in-the-okanagan/
        },
        {
          name: "Indian Creek Farm",
          phone: "1234567890",
          email: "indiancreekfarm@ithaca.com",
          site: "https://indiancreekfarm.com",
          cash: false,
          credit: true, 
          logo: "img/indiancreekfarm.jpg"
          // Source: https://www.visitithaca.com/attractions/indian-creek-farm
        },
        {
          name: "Renee's Bakery",
          phone: "1234567890",
          email: "reneesbakery@ithaca.com",
          site: "https://reneesbakery.com",
          cash: true,
          credit: false,
          logo: "img/reneesbakery.jpg"
          // Source: https://dansfoods.com/departments/bakery
        }
      ] 
    }
  },
  methods: {
    search () {
      console.log("searching...");
    },
    updateVendor (vendor) {
      console.log("clicked");
      console.log(vendor.name);
      this.vendorInfo = vendor;
      
    }
  }
}
</script>

<style scoped>
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

  .vendorinfo {
    width: 80%;
    position: absolute;
    top: 20%;
    left: 10%;
    z-index: 5;
  }
</style>
