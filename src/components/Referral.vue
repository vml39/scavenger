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
                <h3> Refer a vendor to a friend! </h3>
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

  .modal-mask {
  position: fixed;
  /* z-index: 9998; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  
}

.modal-body {
  margin: 20px 0;
  justify-content: left;
  margin-bottom: 7px;
}

.modal-footer {
  height: 20px;
}

.modal-default-button {
  float: right;
}

input {
  margin-bottom: 10px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

/* .modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */


 
</style>