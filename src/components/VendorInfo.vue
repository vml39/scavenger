<template>
  <div class="vendorinfo" v-if="opened">
    <sui-button id="favoriteIcon" class="favorite" icon="heart" @click="updateFavoriteVendor"></sui-button>
    <sui-button class="close" @click="close">&times;</sui-button>
    <div class="vendorinfomodal">
      <div class="imgContainer">
        <img class="logo" :src="logo" alt="vendor logo" />
      </div>
      <h1>{{ name }}</h1>
      <p>Payment options:
        <sui-icon v-if="cash" name="money bill alternate outline"></sui-icon>
        <sui-icon v-if="credit" name="credit card outline"></sui-icon>
      </p>
      <p>Phone number: {{ this.toPhoneNum(phone) }}</p>
      <p>Email: {{ email }}</p>
      <p class="site" v-if="hasSite">Website: </p><a :href="site">{{ site }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VendorInfo',
  props: {
    opened: Boolean,
    logo: String,
    name: String,
    phone: String,
    email: String,
    site: String,
    cash: Boolean,
    credit: Boolean,
    favorite: Boolean,
    openAgain: Boolean
  },
  data: function () {
    return {
      firstOpened: true,
      hasSite: true,
      // change starting condition
      vendorFavorite: false 
    }
  },
  methods: {
    toPhoneNum (phone) {
      return "("+phone.substring(0, 3)+") "+phone.substring(3,6)+"-"+phone.substring(6);
    },
    updateFavoriteVendor () {
      this.vendorFavorite = !this.vendorFavorite;
      if (this.vendorFavorite) {
        document.getElementById("favoriteIcon").classList.add("favorited");
      } else {
        document.getElementById("favoriteIcon").classList.remove("favorited");
      }
      this.$emit('updateFavoriteVendor', this.name, true);
    },
    close () {
      document.getElementById("vendoroverlay").classList.remove("vendorinfooverlay");
      this.opened = false;
      this.firstOpened = true;
    }
  },
  updated () {
    if (this.firstOpened && this.opened) {
      this.vendorFavorite = this.favorite;
      this.firstOpened = false;
    }
    if (this.opened) {
      if (this.vendorFavorite) {
        document.getElementById("favoriteIcon").classList.add("favorited");
      } else {
        document.getElementById("favoriteIcon").classList.remove("favorited");
      }
    }
  },
  // watch: {
  //   favorite: function () {
  //     console.log("watching ", this.vendorFavorite);
  //     if (this.opened) {
  //       if (this.vendorFavorite) {
  //         document.getElementById("favoriteIcon").classList.add("favorited");
  //       } else {
  //         document.getElementById("favoriteIcon").classList.remove("favorited");
  //       }
  //     }
  //   }
  // }
}
</script>

<style scoped>
  .vendorinfo {
    margin-top: 10px;
    background: rgb(245, 245, 245);
  }

  button {
    position: absolute;
    background: none !important;
    padding: 0 !important
  }

  .favorite {
    left: 0;
    padding-left: 8px !important;
    padding-top: 8px !important;
    font-size: 1.2em !important;
  }

  .favorited {
    color: red !important;
  }

  .close {
    right: 0;
    font-size: 2em !important;
  }

  .vendorinfomodal {
    padding: 30px 20px 20px 20px;
  }

  .imgContainer {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 10px auto;
  }

  img {
    display: inline;
    height: 100%;
    width: auto;
  }

  h1 {
    margin: 0;
  }

  .payment {
    width: 10%;
  }

  .site {
    display: inline-block;
    padding-right: 5px;
    margin-top: 0;
  }
</style>