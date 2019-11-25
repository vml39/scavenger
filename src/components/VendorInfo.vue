<template>
  <div class="vendorinfo" v-if="opened && this.openModal">
    <button @click="close">&times;</button>
    <div class="vendorinfomodal">
      <div class="imgContainer">
        <img class="logo" :src="logo" alt="vendor logo" />
      </div>
      <h1>{{ name }}</h1>
      <p>Payment options: <img class="payment" v-if="cash" src="/img/cashicon.jpg" alt="cash" /><img class="payment" v-if="credit" src="/img/crediticon.jpg" alt="credit" /></p>
      <p>Phone number: {{ phone }}</p>
      <p>Email: {{ email }}</p>
      <p v-if="hasSite">Website: {{ site }}</p>
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
      openModal: true,
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
</style>