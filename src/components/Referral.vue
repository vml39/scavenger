<template>
  <div class="Referral">
    <!-- <h2>Refer a vendor to a friend!</h2>
    <p>Refer a favorite vendor to a friend!</p>
    <label> Vendor Name: </label>
    <input>
    <label> Friend's Number: </label>
    <input>
    <button>Send<button> onclick would close the modal and send a text -->
    <transition name="modal">
        <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

            <div class="modal-header">
                <slot name="header">
                Refer a vendor to a friend!
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                    <label> Vendor Name: </label>
                    <input>
                    <label> Friend's Email: </label>
                    <input>
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                    Send
                </button>
                </slot>
            </div>
            </div>
        </div>
        </div>
    </transition>


    <!-- <div id="app">
        <button id="show-modal" @click="showModal = true">Show Modal</button>
         use the modal component, pass in the prop 
        <modal v-if="showModal" @close="showModal = false">
            
            you can use custom content here to overwrite
            default content
            
            <h3 slot="header">custom header</h3>
        </modal>
    </div> -->
  </div>


<!-- app -->

</template>

<script>
// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})
export default {
  
}
</script>

<style scoped>
 
</style>