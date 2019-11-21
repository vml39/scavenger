<template>
  <div id="app">
    <button type="button" class="btn" @click="showModal">
      Test Pop Up
    </button>
    <QRcode v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
  import QRcode from '@/components/QrCode.vue';

  export default {
    name: 'popup',
    components: {
      QRcode,
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
  };
</script>