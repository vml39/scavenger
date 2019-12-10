<script>
    import QRcode from '@/components/QrCode.vue';
    import SocialMediaTag from '@/components/SocialMediaTag.vue';
    import Referral from '@/components/Referral.vue';
    export default {
        name: 'Modal',
        props: {
            selectedModal : String,
        },
        components: {
            QRcode,
            SocialMediaTag,
            Referral
        },
        data() {
          return {

          }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            closeandcollectpoints () {
                this.$emit('closeandcollectpoints');
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
                <QRcode v-if="selectedModal == 'QRcode'" @completeTask="closeandcollectpoints" />
                <SocialMediaTag v-if="selectedModal == 'SocialMediaTag'" @completeTask="closeandcollectpoints" theme="fall" />
                <Referral v-if="selectedModal == 'Referral'" @completeTask="closeandcollectpoints" />

          </section>
          </div>
        </div>
    </transition>
</template>


<style lang="scss">
  @import "../css/modal.scss"
</style>