<template>
  <div class="vendorinfo" v-if="opened && this.openModal">
    <button @click="close">x</button>
    <img class="logo" :src="logo" alt="vendor logo" />
    <h1>{{ name }}</h1>
    <p>Payment options: <img class="payment" v-if="cash" src="/img/cashicon.jpg" alt="cash" /><img class="payment" v-if="credit" src="/img/crediticon.jpg" alt="credit" /></p>
    <p>Phone number: {{ phone }}</p>
    <p>Email: {{ email }}</p>
    <p v-if="hasSite">Website: {{ site }}</p>
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
      openModal: false,
      hasSite: true
    }
  },
  methods: {
    close () {
      this.openModal = false;
    }
  },
  watch: {
    opened: function () {
      this.openModal = true;
    }
  }
}
</script>

<style scoped>
  .vendorinfo {
    margin-top: 10px;
    background-color: lightgray;
  }

  button {
    position: absolute;
    right: 0;
  }

  .logo {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    margin: 10px auto 5px auto;
    border-radius: 50%;
  }

  h1 {
    margin: 0;
  }

  .payment {
    width: 10%;
  }
</style>