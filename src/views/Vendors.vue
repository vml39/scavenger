<template>
  <div class="vendors" :style="{top: top+'px', position: position}">
    <VendorInfo class="vendorinfo" :opened="vendorInfo.opened" :logo="vendorInfo.logo" :id="vendorInfo.id" :name="vendorInfo.name" :cash="vendorInfo.cash" :credit="vendorInfo.credit" :phone="vendorInfo.phone" :email="vendorInfo.email" :site="vendorInfo.site" :favorite="vendorInfo.favorite" @updateFavoriteVendor="updateFavoriteVendor" :openAgain="openAgain" @closeVendorInfo="closeVendorInfo"/>
    <div id="top">
    <h2>Vendor Directory</h2>
    <div class="search">
      <autocomplete :getResultValue="getResultValue" :search="searchVendor" @submit="searchResult" placeholder="Search for a vendor" aria-label="Search for a vendor"></autocomplete>
    </div>
    </div>
    <div id="vendoroverlay">
      <div v-if="this.searching">
        <h3>{{ this.searchInput }}</h3>
        <ul>
          <li :key="vendor.name" v-for="vendor in vendors" @click="updateVendor(vendor)">
            <div>
              <div class="imgContainer">
                <img :src="vendor.logo" alt="vendor logo" />
              </div>
              <h4>{{ vendor.name }}</h4>
            </div>
          </li>
        </ul>
        <p v-if="this.vendors.length == 0">No vendors match your search.</p>
      </div>
      <div v-if="!this.searching">
        <h3>Favorite Vendors</h3>
        <ul>
          <li :key="vendor.name" v-for="vendor in favVendors" @click="updateVendor(vendor)">
            <div>
              <div class="imgContainer">
                <img :src="vendor.logo" alt="vendor logo" />
              </div>
              <h4>{{ vendor.name }}</h4>
            </div>
          </li>
        </ul>
        <p v-if="this.favVendors.length == 0">No favorite vendors.</p>
        <h3>All Vendors</h3>
        <ul>
          <li :key="vendor.name" v-for="vendor in vendors" @click="updateVendor(vendor)">
            <div>
              <div class="imgContainer">
                <img :src="vendor.logo" alt="vendor logo" />
              </div>
              <h4>{{ vendor.name }}</h4>
            </div>
          </li>
        </ul>
      </div>
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
      searching: false,
      searchInput: "",
      vendorInfo: {
        id: 1,
        name: "Apple Farms",
        phone: "1234567890",
        email: "applefarms@ithaca.com",
        site: "https://applefarms.com",
        cash: true,
        credit: false,
        logo: "/img/applefarms.jpg",
        favorite: true,
        opened: false
      },
      vendors: this.sortVendors(vendorsList.default),
      favVendors: this.sortVendors(this.getFavoriteVendors(vendorsList.default)),
      openAgain: false,
      scrolled: 0,
      top: 0,
      position: ""
    }
  },
  methods: {
    sortVendors (vendors) {
      function compareFunction (v1, v2) {
        if (v1.name < v2.name) {
          return -1;
        } else if (v1.name > v2.name) {
          return 1;
        } else {
          return 0;
        }
      }
      return vendors.sort(compareFunction);
    },
    getFavoriteVendors (vendors) {
      let favVendorsId = JSON.parse(localStorage.getItem("favorited"));
      let favVendors = [];
      for (let vendor of vendors) {
        if (favVendorsId.includes(vendor.id)) {
          favVendors.push(vendor);
        }
      }
      return favVendors;
    },
    searchResult (result) {
      if (result) {
        this.position = "";
        this.searching = true;
        this.vendors = [result];
      } else {
        this.position = "fixed";
      }
    },
    searchVendor (input) {
      if (input.length > 0) {
        this.searching = true;
        this.searchInput = input;
        let searchVendors = [];
        for (let vendor of vendorsList.default) {
          if (vendor.name.toLowerCase().search(input.toLowerCase()) != -1) {
            searchVendors.push(vendor);
          }
        }
        this.vendors = searchVendors;
      } else {
        this.vendors = vendorsList.default;
        this.searching = false;
      }
      return this.vendors;
    },
    getResultValue (result) {
      return result.name;
    },
    updateVendor (vendor) {
      if (!this.vendorInfo.opened) {
        this.top = -this.scrolled;
        this.position = "fixed";
        window.scroll(0, this.scrolled);
        document.getElementById("vendoroverlay").classList.add("vendorinfooverlay");
        this.vendorInfo = vendor;
        this.vendorInfo.favorite = JSON.parse(localStorage.getItem("favorited")).includes(vendor.id);
        this.vendorInfo.opened = true;
        this.openAgain = !this.openAgain;
      }
    },
    closeVendorInfo () {
      this.vendorInfo.opened = false;
      this.position = "";
    },
    updateFavoriteVendor (vendorid) {
      let favVendorsId = JSON.parse(localStorage.getItem("favorited"));
      if (!favVendorsId.includes(vendorid)) {
        favVendorsId.push(vendorid);
      } else {
        favVendorsId.splice(favVendorsId.indexOf(vendorid), 1);
      }
      localStorage.setItem("favorited", JSON.stringify(favVendorsId));
      this.favVendors = this.sortVendors(this.getFavoriteVendors(vendorsList.default));
    },
    handleScroll () {
      this.scrolled = window.scrollY;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
  .vendors {
    width: 100%;
    padding-bottom: 10vh;
  }

  #top {
    width: 100%;
    background: white;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  h2 {
    padding-top: 20px;
  }

  .search {
    margin: 0 2.5% 20px 2.5%;
    background: white;
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

  h3 {
    font-size: 1.5em;
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

  h4 {
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
    position: fixed;
    top: 20%;
    left: 10%;
    z-index: 5;
  }
</style>
