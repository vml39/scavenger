<template>
   <div class="referral_modal">
    <!-- <h2>Refer a vendor to a friend!</h2>
    <p>Refer a favorite vendor to a friend!</p>
    <label> Vendor Name: </label>
    <input>
    <label> Friend's Number: </label>
    <input>
    <button>Send<button> onclick would close the modal and send a text -->
    <!-- <transition name="modal">
        <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

            <div class="modal-header">
                <slot name="header"> -->
                <h1 id="popupheader">Check in at a Vendor Booth</h1>
                <!-- </slot>
            </div> -->

            <!-- <div class="modal-body"> -->
               
                    <label> Vendor Name: </label>
                    <select class="vendorsDropDown" id="selectedVendor">
                      <option> </option>
                      <option :key="vendor.name" v-for="vendor in visitedVendors"> {{vendor.name}} </option>
                    </select>
                    <label> Friend's Email: </label>
                    <input id= "friendsEmail">
                
            <!-- </div> -->

            <!-- <div class="modal-footer">
                <slot name="footer"> -->
                  <button class="button" id="doneButton" @click="$emit('close')">
                      Done
                  </button>
                  <button class="button" id="sendButton" @click="store">
                    <a :href="'mailto:' + this.email + '?subject=Ithaca%20Farmers%20Market%20Vendor%20Referral&body=Hey!%20I%20just%20visited%20out%20'+ this.vendorName + '%20and%20they%20are%20awesome!%20Check%20them%20out%20next%20time%20you%20go%20to%20the%20farmers%20market!'">Send referral email</a>
                  </button>
                  <sui-button color="green" @click="completeTask" content="Complete Task!" />

                <!-- </slot>
            </div>
            </div>
        </div>
        </div>
    </transition> -->


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
    import * as vendorsList from '../assets/js/vendorsList.js'
    export default {
        data: function () {
                return {
                    email: '',
                    theVendor: '',
                    vendorName:'',
                    allVendors: vendorsList.default,
                    visitedVendors: allVendors.default.filter(vendor => vendor.visited)
                }
                
        },
        methods: {
            store() {
                this.email = document.getElementById("friendsEmail");
                this.theVendor = document.getElementByID("selectedVendor");
                this.vendorName = theVendor.options[theVendor.selectedIndex].text;
            },
            close() {
                this.$emit('close');
                this.email = "";
                this.theVendor = "",
                this.vendorName = ""
            },
          completeTask() {
              this.$emit('completeTask');
          }
        }
    };





// register modal component
// Vue.component('modal', {
//   template: '#modal-template'
// })
// // start app
// new Vue({
//   el: '#app',
//   data: {
//     showModal: false
//   }
// })
// export default {
  
// }
</script>

<style scoped>
  #app {
  text-align: left;
}

.button {
  margin-left: 10px;
  border-radius: 3px;
  padding: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

#doneButton {
  background-color: White; /* Green */
  border: 0px solid #2C3E50 ;
  color: #2C3E50;
  margin-left: 38px;
  
}

#sendButton a {
  color: white;
}

#sendButton {
  background-color: #2C3E50; /* Green */
  border: 1px solid white ;
  color: white;
  margin-left: 10px;
}


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
  text-align: center;
  
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
  width: 240px;
}
select {
  margin-bottom: 10px;
  width: 240px;
  height: 23px;
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