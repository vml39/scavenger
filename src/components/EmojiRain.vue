<template>
  <transition name="rain">
  <div id="emojiRain">
    <transition-group name="emoji">
      <div v-for="emoji in emojiArray" :key="emoji.x" class="emoji" :style="{left: emoji.x + 'px'}">{{emoji.emoji}}</div>
    </transition-group>
  </div>
  </transition>
</template>

<script>
  export default {
    name:"emojiRain",
    data() {
      return {
        emojiArray: []
      }
    },
    methods: {
      addEmoji() {
        this.emojiArray.push({
          x: Math.random()*window.innerWidth,
          emoji: ["🥕", "🥳", "🥕", "🥕", "😃", "🥕"][Math.round(Math.random()*5)]
        })
      }
    },
    mounted() {
      let start=setInterval(() => {
        this.addEmoji()
        this.addEmoji()
        this.addEmoji()
      }, 50);
      setTimeout(() => {
        clearInterval(start)
      }, 1000);
    }
  }
</script>

<style lang="scss">
  #emojiRain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    &.rain-enter-active {
    transition: opacity .5s;
    }
    &.rain-enter {
      opacity: 0;
    }

    .emoji {
      display: inline;
      position: absolute;
      transform: translate(-50%, 0);
      top: 110%;
      font-size: 24px;

      &.emoji-enter-active {
        transition: top 1.5s ease-in;
      }
        
      &.emoji-enter {
        top: -10%;
      }
    }
  }
</style>