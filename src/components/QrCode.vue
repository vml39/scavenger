<!--
QR Scanning is possible using the Vue Qrcode Reader package
Documentation: https://gruhn.github.io/vue-qrcode-reader/api/QrcodeStream.html
-->

<script>
    import { QrcodeStream } from 'vue-qrcode-reader'
    import * as vendorsList from '../assets/js/vendorsList.js'

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
            visitedVendors: vendorsList.default.filter(vendor => vendor.visited),
          }
        },
        methods: {
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
  <div class="qrcode_modal">
      <h1 id="popupheader">Check in at a Vendor Booth</h1>
      <p id="popupinstructions">
          Scan the QR code at a vendor booth to record you've visited this vendor.
      </p>
      <p class="error">{{ error }}</p>
      <qrcode-stream id="readerwindow" @decode="onDecode" @init="onInit" />
      <p class="decode-result"> <b>{{ result }}</b> </p>
      <p class="vendorresponse">{{vendorresponse}}</p>
  </div>
</template>


<style lang="scss">
  @import "../css/modal.scss"
</style>