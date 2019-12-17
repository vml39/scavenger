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
				<div>Referral</div>
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
		<transition name="rain">
		<div v-if="rain" id="congrats">
			<svg x="0px" y="0px" width="450.12px" height="512px" viewBox="0 0 450.12 512">
        <path class="st0" d="M432.78,29.83h-43.4c-1.68,0-2.97-1.51-2.7-3.17l1.06-6.54C389.47,9.57,381.33,0,370.64,0H79.48
          C68.79,0,60.65,9.57,62.37,20.11l1.06,6.54c0.27,1.66-1.01,3.17-2.7,3.17h-43.4C7.76,29.83,0,37.59,0,47.16v115.99
          c0,64.41,48.24,117.75,110.48,125.82c0.89,0.12,1.66,0.66,2.07,1.46c13.92,27.04,37.17,48.13,65.21,59.44
          c12.11,4.88,18.23,18.44,13.91,30.77l-28.02,79.97c-0.38,1.09-1.42,1.83-2.58,1.83h-40.74c-9.57,0-17.34,7.76-17.34,17.34v14.89
          c0,9.57,7.76,17.34,17.34,17.34h209.4c9.57,0,17.34-7.76,17.34-17.34v-14.89c0-9.57-7.76-17.34-17.34-17.34h-40.72
          c-1.16,0-2.19-0.73-2.58-1.83l-28.02-79.97c-4.32-12.33,1.8-25.88,13.91-30.77c28.04-11.31,51.29-32.41,65.21-59.44
          c0.41-0.8,1.18-1.34,2.07-1.46c62.24-8.07,110.48-61.41,110.48-125.82V47.16C450.12,37.59,442.36,29.83,432.78,29.83z M96.57,255.87
          c-38.99-12.78-67.25-49.5-67.25-92.71V61.88c0-1.51,1.22-2.73,2.73-2.73h34.33c1.34,0,2.48,0.97,2.7,2.29l31.08,191.35v0
          C100.49,254.84,98.53,256.51,96.57,255.87z M199.56,68.77l1.48-0.84l0.16-1.7c0.55-5.91,3.27-11.39,7.68-15.44
          c4.43-4.07,10.18-6.31,16.19-6.31c6,0,11.75,2.24,16.19,6.31c4.41,4.04,7.13,9.53,7.68,15.44l0.16,1.7l1.49,0.85
          c5.77,3.29,9.36,9.43,9.36,16.03c0,5.54-2.47,10.74-6.77,14.25c-5.97,4.88-11.2,10.48-15.58,16.65c-3.86-0.99-8.06-1.49-12.52-1.49
          c-4.47,0-8.67,0.5-12.52,1.49c-4.4-6.2-9.63-11.8-15.58-16.66c-4.3-3.51-6.76-8.71-6.76-14.25C190.2,78.2,193.79,72.06,199.56,68.77
          z M235.95,186.12h26.5c-1.16,10.2-3.67,21.45-6.9,32.68h-19.6c-3.01,0-5.45,2.43-5.45,5.45c0,3.01,2.43,5.45,5.45,5.45h16.27
          c-9.35,29.04-21.4,56.05-22.23,57.81c-0.89,1.91-2.82,3.14-4.93,3.14c-2.11,0-4.03-1.22-4.93-3.14
          c-0.72-1.53-9.99-22.56-18.56-46.91h12.59c3.01,0,5.45-2.43,5.45-5.45s-2.43-5.45-5.45-5.45H197.9c-2.32-7.19-4.46-14.54-6.23-21.79
          h33.39c3.01,0,5.45-2.43,5.45-5.45s-2.43-5.45-5.45-5.45h-35.73c-1.47-7.75-2.4-15.18-2.4-21.79c0-3.88,0.22-7.44,0.5-10.9h26.74
          c3.01,0,5.45-2.43,5.45-5.45c0-3.01-2.43-5.45-5.45-5.45h-25.23c4.38-21.85,16.26-32.68,36.12-32.69
          c25.66,0,38.13,17.82,38.13,54.47h-27.23c-3.01,0-5.45,2.43-5.45,5.45S232.94,186.12,235.95,186.12z M420.8,163.16
          c0,43.21-28.25,79.93-67.25,92.71c-1.96,0.64-3.92-1.03-3.59-3.07l31.08-191.35c0.21-1.32,1.36-2.29,2.7-2.29h34.33
          c1.51,0,2.73,1.22,2.73,2.73V163.16z"/>
      </svg>
			<div>Level {{tokens}}</div>
		</div>
		</transition>
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
		// this.selectedModal = null;
	},
	closeModalAndCollectPoint() {
		this.modalOpen = false;
		// this.selectedModal = null;
		setTimeout(()=>{
			this.add()
		}, 500)
	},
    add() {
			this.tokens++
			if(this.tokens % 10 == 0) {
				this.rain = true
				setTimeout(() => {
					this.rain = false
				}, 3000)
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
