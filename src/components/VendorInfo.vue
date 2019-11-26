<template>
  <div class="vendorinfo" v-if="opened">
    <button @click="close">&times;</button>
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
    credit: Boolean
  },
  data: function () {
    return {
      hasSite: true
    }
  },
  methods: {
    toPhoneNum (phone) {
      return "("+phone.substring(0, 3)+") "+phone.substring(3,6)+"-"+phone.substring(6);
    },
    close () {
      this.opened = false; // better way to do this?
    }
  }
}
</script>

<style scoped>
  .vendorinfo {
    margin-top: 10px;
    background-color: rgb(245, 245, 245);
  }

  button {
    position: absolute;
    right: 0;
    font-size: 1.5em;
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