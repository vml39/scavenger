<template>
  <div id="progress">
    <div id="progress-container" >
      <div id="progress-background" :class="{'offset':allfilled}" v-bind:style="{backgroundImage: 'linear-gradient(0, '+ colorArray[colorIndices[0]] + ' 0%, ' + colorArray[colorIndices[1]] + ' 50%, ' + colorArray[colorIndices[2]] + ' 100%)'}"></div>
			<div id="tokens">
				<Token v-for="token in tokenArray" :key="token.number" :number="token.number" :collected="token.collected" ></Token>
			</div>    
    </div>
		<div id="actions-container">
      <div class="action-button" @click="openModal('QRcode')">
				<div>Scan</div>
				<svg width="56.54px" height="56.54px" viewBox="0 0 56.54 56.54" style="enable-background:new 0 0 56.54 56.54;" xml:space="preserve">
					<path d="M2.27,19.16L2.27,19.16C1.02,19.16,0,18.15,0,16.89V8.01C0,3.59,3.59,0,8.01,0h8.89c1.25,0,2.27,1.02,2.27,2.27v0
						c0,1.25-1.02,2.27-2.27,2.27H8.01c-1.92,0-3.47,1.55-3.47,3.47v8.89C4.54,18.15,3.52,19.16,2.27,19.16z"/>
					<path d="M16.89,56.54H8.01C3.58,56.54,0,52.95,0,48.53v-8.89c0-1.25,1.02-2.27,2.27-2.27h0c1.25,0,2.27,1.02,2.27,2.27v8.89
						c0,1.92,1.55,3.47,3.47,3.47h8.89c1.25,0,2.27,1.02,2.27,2.27v0C19.16,55.52,18.14,56.54,16.89,56.54z"/>
					<path d="M48.53,56.54h-8.89c-1.25,0-2.27-1.02-2.27-2.27v0c0-1.25,1.02-2.27,2.27-2.27h8.89c1.92,0,3.47-1.55,3.47-3.47v-8.89
						c0-1.25,1.02-2.27,2.27-2.27h0c1.25,0,2.27,1.02,2.27,2.27v8.89C56.54,52.95,52.95,56.54,48.53,56.54z"/>
					<path d="M54.27,19.16L54.27,19.16c-1.25,0-2.27-1.02-2.27-2.27V8.01c0-1.92-1.55-3.47-3.47-3.47h-8.89c-1.25,0-2.27-1.02-2.27-2.27
						v0c0-1.25,1.02-2.27,2.27-2.27h8.89c4.42,0,8.01,3.58,8.01,8.01v8.89C56.54,18.15,55.52,19.16,54.27,19.16z"/>
					<path d="M27.05,33.05v8.64c0,1.97-1.6,3.57-3.57,3.57h-8.64c-1.97,0-3.57-1.6-3.57-3.57v-8.64c0-1.97,1.6-3.57,3.57-3.57h8.64
						C25.45,29.48,27.05,31.08,27.05,33.05z"/>
					<path d="M45.27,33.05v8.64c0,1.97-1.6,3.57-3.57,3.57h-8.64c-1.97,0-3.57-1.6-3.57-3.57v-8.64c0-1.97,1.6-3.57,3.57-3.57h8.64
						C43.67,29.48,45.27,31.08,45.27,33.05z"/>
					<path d="M45.27,14.84v8.64c0,1.97-1.6,3.57-3.57,3.57h-8.64c-1.97,0-3.57-1.6-3.57-3.57v-8.64c0-1.97,1.6-3.57,3.57-3.57h8.64
						C43.67,11.27,45.27,12.87,45.27,14.84z"/>
					<path d="M27.05,23.48L27.05,23.48c0,1.97-1.6,3.57-3.57,3.57h0c-1.97,0-3.57-1.6-3.57-3.57v0c0-1.97,1.6-3.57,3.57-3.57h0
						C25.45,19.91,27.05,21.51,27.05,23.48z"/>
					<path d="M27.05,14.84L27.05,14.84c0,1.97-1.6,3.57-3.57,3.57h0c-1.97,0-3.57-1.6-3.57-3.57v0c0-1.97,1.6-3.57,3.57-3.57h0
						C25.45,11.27,27.05,12.87,27.05,14.84z"/>
					<path d="M18.41,23.48L18.41,23.48c0,1.97-1.6,3.57-3.57,3.57h0c-1.97,0-3.57-1.6-3.57-3.57v0c0-1.97,1.6-3.57,3.57-3.57h0
						C16.81,19.91,18.41,21.51,18.41,23.48z"/>
					<path d="M18.41,14.84L18.41,14.84c0,1.97-1.6,3.57-3.57,3.57h0c-1.97,0-3.57-1.6-3.57-3.57v0c0-1.97,1.6-3.57,3.57-3.57h0
						C16.81,11.27,18.41,12.87,18.41,14.84z"/>
					<path d="M45.27,33.05v8.64c0,1.97-1.6,3.57-3.57,3.57h-8.64c-1.97,0-3.57-1.6-3.57-3.57v-8.64c0-1.97,1.6-3.57,3.57-3.57h8.64
						C43.67,29.48,45.27,31.08,45.27,33.05z"/>
				</svg>
			</div>
		<div class="action-button"  @click="openModal('SocialMediaTag')">
				<div>Share</div>
				<svg width="62.5px" height="56px" viewBox="0 0 62.5 56" style="enable-background:new 0 0 62.5 56;" xml:space="preserve">
					<circle cx="12" cy="30.5" r="12"/>
					<circle cx="41.5" cy="9" r="9"/>
					<circle cx="53.5" cy="47" r="9"/>
					<polyline class="st0" points="53.5,47 11.5,30 41.5,9 	"/>
				</svg>
			</div>
      <div class="action-button"  @click="openModal('Referral')"> <!-- v-on:click="add()"> -->
				<div>Refer</div>
				<svg width="60.5px" height="46.13px" viewBox="0 0 60.5 46.13" style="enable-background:new 0 0 60.5 46.13;" xml:space="preserve">
					<circle cx="20.12" cy="12" r="12"/>
					<path d="M37.98,46L37.98,46c-1.16,0-2.1-0.88-2.25-2.04c-1-7.72-7.62-13.69-15.6-13.69s-14.6,5.98-15.6,13.69
						C4.37,45.12,3.43,46,2.27,46h0c-1.38,0-2.42-1.22-2.25-2.6c1.28-9.95,9.81-17.67,20.1-17.67s18.82,7.72,20.1,17.67
						C40.4,44.78,39.36,46,37.98,46z"/>
					<circle cx="45.12" cy="20" r="9"/>
					<path d="M45.12,30.56c-2.57,0-4.99,0.64-7.12,1.74c0.92,1.2,1.73,2.5,2.4,3.87c1.43-0.68,3.03-1.08,4.72-1.08
						c5.44,0,9.98,3.96,10.88,9.15c0.19,1.09,1.12,1.89,2.23,1.89h0c1.4,0,2.48-1.27,2.24-2.65C59.21,36.15,52.81,30.56,45.12,30.56z"
						/>
				</svg>
			</div>
    </div>
		<Modal v-show="modalOpen" v-bind:selectedModal="selectedModal" @closeandcollectpoints="closeModalAndCollectPoint" @close="closeModal"/>
		<EmojiRain v-if="rain" />
  </div>
</template>

<script>
import Token from "../components/Token.vue"
import EmojiRain from "../components/EmojiRain.vue"
import Modal from '@/components/Modal.vue';


export default {
  name: 'Progress',
  components: {
	Token,
	Modal,
	EmojiRain
  },
  data() {
    return {
			tokens: 0,
			allfilled: false,
			tokenArray:[{number: 1, collected: false}, {number: 2, collected: false}, {number: 3, collected: false}, {number: 4, collected: false}],
			colorArray: ["#ff9999", "#ffd699", "#ebff99", "#adff99", "#99ffc2", "#99ffff", "#99c2ff", "#ad99ff", "#eb99ff", "#ff99d6"],
			colorIndices: [0, 1, 2],
			modalOpen: false,
			selectedModal: null,
			rain: false,
    }
  },
  methods: {
	openModal(modalSelected) {
		this.modalOpen = true;
		this.selectedModal = modalSelected;
	},
	closeModal() {
		this.modalOpen = false;
		this.selectedModal = null;
	},
	closeModalAndCollectPoint() {
		this.modalOpen = false;
		this.selectedModal = null;
		setTimeout(()=>{
			this.add()
		}, 800)
	},
    add() {
			this.tokens++
			if(this.tokens % 10 == 0) {
				this.rain = true
				setTimeout(() => {
					this.rain = false
				}, 2000)
			}
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
					while(this.tokenArray.length>7) {
						this.tokenArray.shift()
					}
					this.updateLocalStorage()
				}, 1000)	
			}
			this.updateLocalStorage()
		},

		updateLocalStorage() {
			localStorage.setItem("tokens", JSON.stringify(this.tokens))
			localStorage.setItem("tokenArray", JSON.stringify(this.tokenArray))
			localStorage.setItem("colorIndices", JSON.stringify(this.colorIndices))
		}
	},
	
	mounted() {
		let tokens = JSON.parse(localStorage.getItem("tokens"))
		let tokenArray = JSON.parse(localStorage.getItem("tokenArray"))
		let colorIndices = JSON.parse(localStorage.getItem("colorIndices"))
		if(tokens) {
			this.tokens=tokens
		}
		if(tokenArray) {
			this.tokenArray=tokenArray
		}
		if(colorIndices) {
			this.colorIndices=colorIndices
		}
	},

}
</script>

<style lang="scss">
  @import "../css/progress.scss"
</style>
