<script>
    import { 
                QrcodeStream, 
                // QrcodeDropZone,
                // QrcodeCapture 
            } 
    from 'vue-qrcode-reader'
    
    export default {
        name: 'QRcode',
        components: {
            QrcodeStream,
            // QrcodeDropZone,
            // QrcodeCapture
        },
        data () {
            return {
            result: '',
            error: '',
            vendorresponse: '',
            }
        },
        methods: {
        close() {
            this.$emit('close');
            this.result = "";
            this.error = "";
            
        },
        onDecode (result) {
            this.result = result
            // if result exists in visited table, then print out:
            // this.vendorresponse= "Looks like we've already been here before."
            // else
            //this.vendorresponse= "<b>Congrats on visiting a new vendor!</b>"
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

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <slot name="body">
            <h1 id="popupheader">Check in at a Vendor Booth</h1>
            <p id="popupinstructions">
                Scan the QR code at a vendor booth to record you've visited this vendor.
            </p>
            <p class="error">{{ error }}</p>
            <p class="decode-result"> <b>{{ result }}</b> </p>
            <p class="vendorresponse">{{vendorresponse}}</p>

            <qrcode-stream id="readerwindow" @decode="onDecode" @init="onInit" />

            <button type="button" class="btn-green" @click="close"> Close me!</button>
        </slot>
       </section>
    </div>
  </div>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(86, 155, 8, 0.623);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 5px 5px 30px 2px;
    width: 90%;
    height: 80vh;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    text-align: right;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 20px;
    text-align: center;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .error {
    font-weight: bold;
    color: red;
  }
  #readerwindow {
      width: 100%;
      height: 40vh;
  }
</style>