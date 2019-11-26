<template>
  <div id="map">
    <div id="map-container" >
      <div id="map-background" :class="{'offset':allfilled}" v-bind:style="{backgroundImage: 'linear-gradient(0, '+ colorArray[colorIndices[0]] + ' 0%, ' + colorArray[colorIndices[1]] + ' 50%, ' + colorArray[colorIndices[2]] + ' 100%)'}"></div>
			<div id="tokens">
				<Token v-for="token in tokenArray" :key="token.number" :number="token.number" :collected=token.collected  ></Token>
			</div>    
    </div>
		<div id="actions-container">
      <div class="action-button"  v-on:click="add()">Scan</div>
      <div class="action-button"  v-on:click="add()">Share</div>
      <div class="action-button"  v-on:click="add()">Refer</div>
    </div>
    <div class="popup" v-show="scanMode"></div>
    <div class="popup" v-show="shareMode"></div>
    <div class="popup" v-show="referMode"></div>
  </div>
</template>

<script>
import Token from "../components/Token.vue"
export default {
  name: 'map',
  components: {
    Token
  },
  data() {
    return {
      scanMode: false,
      shareMode: false,
			referMode: false,
			tokens: 0,
			allfilled: false,
			tokenArray:[{number: 1, collected: false}, {number: 2, collected: false}, {number: 3, collected: false}, {number: 4, collected: false}],
			colorArray: ["#ff9999", "#ffd699", "#ebff99", "#adff99", "#99ffc2", "#99ffff", "#99c2ff", "#ad99ff", "#eb99ff", "#ff99d6"],
			colorIndices: [0, 1, 2],
    }
  },
  methods: {
    add() {
			this.tokens++
			this.tokenArray.forEach((elem,index)=> {
				if(elem.number==this.tokens) {
					this.tokenArray[index].collected=true
				}
			})
			if(this.tokenArray[this.tokenArray.length-1].collected) {
				this.allfilled=true
				this.tokenArray.push({number: this.tokens+1, collected:false})
				this.tokenArray.push({number: this.tokens+2, collected:false})
				this.tokenArray.push({number: this.tokens+3, collected:false})
				setTimeout(() => {
					this.colorIndices.forEach((number, index) => {
						this.colorIndices[index] = number+1>=this.colorArray.length ? 0 : number+1
					})
					this.allfilled = false
					this.tokenArray.shift()
					this.tokenArray.shift()
					this.tokenArray.shift()
				}, 1000)
			}
		},
	},
	
	mounted() {
	},

}
</script>

<style lang="scss">
  @import "../css/map.scss"
</style>
