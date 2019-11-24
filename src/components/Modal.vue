<script>
	import QRcode from '@/components/QrCode.vue';
    import SocialMediaTag from '@/components/SocialMediaTag.vue';
    export default {
        name: 'Modal',
        props: {
            selectedModal : null,
        },
        components: {
            QRcode,
            SocialMediaTag,
        },
        methods: {
        close() {
            this.$emit('close');
            this.selectedModal = null;
        },
        closeandcollectpoints () {
            this.$emit('closeandcollectpoints');
            this.selectedModal = null;
        },
    },
  };
</script>

<template land="html">
    <transition name="slide-fade">
      <div class="modal-cover">
        <div class="modal">
          <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile right aligned column">
            <sui-button class="closeoutbutton" circular basic floated="right" icon="close" @click="close" />
          </div>
          <section class="modal-body">
            <slot name="body">
                <QRcode v-if="selectedModal == 'QRcode'" @closeandcollectpoints="closeModalAndCollectPoint" @close="closeModal" />
                <SocialMediaTag v-if="selectedModal == 'SocialMediaTag'" @closeandcollectpoints="closeModalAndCollectPoint" @close="closeModal" theme="fall" />
                <sui-button color="green" @click="closeandcollectpoints" content="Complete Task!" />
            </slot>
          </section>
          </div>
        </div>
    </transition>
</template>


<style lang="scss">
  @import "../css/modal.scss"
</style>