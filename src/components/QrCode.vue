<script>
    import { QrcodeStream } from 'vue-qrcode-reader'
    
    export default {
        name: 'QRcode',
        components: {
            QrcodeStream,
        },
        data () {
            return {
            result: '',
            error: '',
            vendorresponse: '',
            checkedin: false,
            }
        },
        methods: {
        close() {
            this.$emit('close');
            this.result = "";
            this.error = "";
            this.checkedin = false;
            
        },
        closeandcollectpoints () {
            this.$emit('closeandcollectpoints');
            this.result = "";
            this.error = "";
            this.checkedin = false;
        },
        onDecode (result) {
            this.result = result
            // if result exists in visited table, then print out:
            // this.vendorresponse= "Looks like we've already been here before."
            // else
            //this.vendorresponse= "<b>Congrats on visiting a new vendor!</b>"
            //this.checkedin=true
            // then show the check in and level up button

        },
        async onInit (promise) {
            try {
                await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                this.error = "ERROR: you need to grant camera access permisson"
                } else if (error.name === 'NotFoundError') {
                this.error = "ERROR: no camera on this device"
                } else if (error.name === 'NotSupportedError') {
                this.error = "ERROR: secure context required (HTTPS, localhost)"
                } else if (error.name === 'NotReadableError') {
                this.error = "ERROR: is the camera already in use?"
                } else if (error.name === 'OverconstrainedError') {
                this.error = "ERROR: installed cameras are not suitable"
                } else if (error.name === 'StreamApiNotSupportedError') {
                this.error = "ERROR: Stream API is not supported in this browser"
                }
            }
        },
        // insert additional functions here
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
            <h1 id="popupheader">Check in at a Vendor Booth</h1>
                <p id="popupinstructions">
                    Scan the QR code at a vendor booth to record you've visited this vendor.
                </p>
                <p class="error">{{ error }}</p>
                <qrcode-stream id="readerwindow" @decode="onDecode" @init="onInit" />

                <p class="decode-result"> <b>{{ result }}</b> </p>
                <p class="vendorresponse">{{vendorresponse}}</p>
                <sui-button color="green" @click="closeandcollectpoints" content="Check In and Level Up!" />
            </slot>
          </section>
          </div>
        </div>
    </transition>
</template>


<style lang="scss">
  @import "../css/modal.scss"
</style>