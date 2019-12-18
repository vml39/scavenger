<script>
    import * as vendorsList from '../assets/js/vendorsList.js'
    export default {
        name: 'Referral',
        data  () {
          return {
            friendsEmail:'',
            selectedVendor:'',
            email: '',
            theVendor: '',
            vendorName:'',
            allVendors: vendorsList.default,
            // visitedVendors: allVendors.default.filter(vendor => vendor.visited)
          }      
        },
        methods: {
            store() {
                this.friendsEmail = document.getElementById("friendsEmail");
                this.selectedVendor = document.getElementByID("selectedVendor");
               
            },
            completeTask() {
              this.friendsEmail = '',
              this.selectedVendor = '',
              this.email = "";
              this.theVendor = "",
              this.vendorName = ""
              this.$emit('completeTask');
          }
        }
    };
</script>


<template>
   <div class="referral_modal">
   
    
                <h1 id="popupheader">Refer a Vendor to a Friend!</h1>
               
              
                <div> 
                    <label> Vendor Name: </label>
                    <select v-model="selectedVendor" class="vendorsDropDown" id="selectedVendor">
                      <option v-for="vendor in allVendors" :key="vendor.name" > {{vendor.name}} </option>
                    </select>
                </div>
                <div>
                    <label> Friend's Email: </label>
                    <input v-bind="friendsEmail" id= "friendsEmail">
                </div>
                
           
                <div>
                  <button class="button" id="sendButton" @click="store">
                    <a :href="'mailto:' + this.friendsEmail + '?subject=Ithaca%20Farmers%20Market%20Vendor%20Referral&body=Hey!%20I%20just%20visited%20'+ this.selectedVendor + '%20at%20the%20Ithaca%20Farmers%20Market%20and%20they%20are%20awesome!%20Check%20them%20out%20next%20time%20you%20go%20to%20the%20Farmers%20Market!'">Send referral email</a>
                  </button>
                  <sui-button color="green" @click="completeTask" content="Complete Task!" />
                </div>

               


  </div>



</template>


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
  color: #2274A5;
}

#sendButton {
  background-color: #FFFFFF; /* Green */
  border: 1px solid #2274A5 ;
  color: #2274A5;
  margin-left: 10px;
  padding: 2px 4px;
  
}

.vendorsDropDown {
  margin-left: 1px;
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

 
</style>