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
            displayCompletedButton: false,
          }
        },
        methods: {
        onDecode (result) {
            this.result = result;
            this.error= '';
            this.vendorresponse= '';
            this.displayCompletedButton= false;
            this.checkIfVendorWasVisitedBefore(this.result);
        },
        checkIfVendorIsValid(name) 
        {
          var index= -1;
          (vendorsList.default).forEach(vendor => {
            if (name == vendor.name) {
              index= vendor.id;
            }
          });
          return index;
        },
        checkIfVendorWasVisitedBefore(name) 
        {
          var visitedArray = JSON.parse( (localStorage).getItem("visited") );
          var nameId = this.checkIfVendorIsValid(name);
          if (nameId != -1) {
            if (nameId in visitedArray) {
              this.vendorresponse= "Looks like we've already been here before.";
            }
            else {
              this.vendorresponse= "Congrats on visiting a new vendor!";

              visitedArray.push(nameId);
              localStorage.setItem("visited", JSON.stringify(visitedArray));
              this.displayCompletedButton = true;
            }
          }
          else {
            this.vendorresponse= "Weird! This isn't a valid vendor in our list."
          }
        },
        completeTask() {
          this.result= '';
          this.error= '';
          this.vendorresponse= '';
          this.displayCompletedButton= false;
          this.$emit('completeTask');
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
      <p class="decode-result"> {{ vendorresponse }}</p>
      <sui-button v-if="displayCompletedButton" color="green" @click="completeTask" content="Complete Task!" />

  </div>
</template>


<style lang="scss">
  @import "../css/modal.scss"
</style>