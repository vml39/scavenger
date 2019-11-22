<template>
  <div class="vendors">
    <h2 v-if="!vendorInfoShow">Vendor Directory</h2>
    <div class="search" v-if="!vendorInfoShow">
      <autocomplete :search="search" placeholder="Search for a vendor" aria-label="Search for a vendor"></autocomplete>
    </div>
    <VendorInfo class="vendorinfo" v-if="vendorInfoShow" :name="vendorInfo.name" :cash="vendorInfo.cash" :credit="vendorInfo.credit" :phone="vendorInfo.phone" :email="vendorInfo.email" :site="vendorInfo.site" />
    <ul v-if="!vendorInfoShow">
      <li :key="vendor" v-for="vendor in vendors">
        <div>
          <img src="/img/vendorlogo.jpg" alt="vendor logo" />
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
      vendorInfoShow: false,
      vendorInfo: {
        name: "Apple Farms",
        phone: "1234567890",
        email: "applefarms@ithaca.com",
        site: "https://applefarms.com",
        cash: true,
        credit: false
      },
     vendors: [
        {
          name: "Apple Farms",
          phone: "1234567890",
          email: "applefarms@ithaca.com",
          site: "https://applefarms.com",
          cash: true,
          credit: false
        },
        {
          name: "Abe Farms",
          phone: "1234567890",
          email: "abefarms@ithaca.com",
          site: "https://abefarms.com",
          payment: ["cash", "credit"]
        },
        {
          name: "Beecher's Cheese",
          phone: "1234567890",
          email: "beecherscheese@ithaca.com",
          site: "https://beecherscheese.com",
          payment: ["credit"]
        },
        {
          name: "Bethany's Botanical Garden",
          phone: "1234567890",
          email: "bethanysbotanicalgarden@ithaca.com",
          site: "https://bethanysbotanicalgarden.com",
          payment: ["cash"]
        },
        {
          name: "Daisy Farm",
          phone: "1234567890",
          email: "daisyfarm@ithaca.com",
          site: "https://daisyfarm.com",
          payment: ["cash", "credit"]
        },
        {
          name: "Elena Eatery",
          phone: "1234567890",
          email: "elenaeatery@ithaca.com",
          site: "https://elenaeatery.com",
          payment: ["cash", "credit"]
        },
        {
          name: "Georgian Winery",
          phone: "1234567890",
          email: "georgianwinery@ithaca.com",
          site: "https://georgianwinery.com",
          payment: ["cash", "credit"]
        },
        {
          name: "Indian Creek Farm",
          phone: "1234567890",
          email: "indiancreekfarm@ithaca.com",
          site: "https://indiancreekfarm.com",
          payment: ["credit"]
        },
        {
          name: "Renee's Bakery",
          phone: "1234567890",
          email: "reneesbakery@ithaca.com",
          site: "https://reneesbakery.com",
          payment: ["cash"]
        }
      ] 
    }
  },
  methods: {
    search () {
      console.log("searching...");
    },
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

  img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid gray;
  }

  .vendorinfo {
    width: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
  }
</style>
