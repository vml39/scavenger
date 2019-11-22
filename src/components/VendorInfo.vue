<template>
  <div class="vendorinfo">
    <button @click="close">x</button>
    <img class="logo" src="/img/vendorlogo.jpg" alt="vendor logo" />
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
    close () {
      // send vendor info false to the vendors page
    }
  }
}
</script>

<style scoped>
  .vendorinfo {
    margin-top: 10px;
    background-color: lightgray;
  }

  .logo {
    width: 40%;
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