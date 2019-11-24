<script>
export default {
  name: 'SocialMediaTag',
  props: {
    theme: String
  }, 
  data: function () {
    return {
      themes: {
      "fall": ["fall", "thanksgiving", "pumpkinspice", "cider", "appleseason"],
      "thanksgiving": ["turkey", "farmtotable", "pumpkin", "squash", "localfood"]
      },
      tags: []
    }
  },
  methods: {
    getTags (theme) {
      this.tags = this.themes[theme];
    },
    close() {
      this.$emit('close'); 
    },
    closeandcollectpoints () {
      this.$emit('closeandcollectpoints');
    },
  },
  mounted: function () {
    this.getTags(this.theme);
  },

}
</script>


<template>
    <transition name="slide-fade">
      <div class="modal-cover">
        <div class="modal">
          <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile right aligned column">
            <sui-button class="closeoutbutton" circular basic floated="right" icon="close" @click="close" />
          </div>
          <section class="modal-body">
            <slot name="body">
            <h1 id="popupheader">Post on Social Media</h1>
                <h1>{{ theme }}</h1>
                <p id="popupinstructions">
                    Upload a photo to a social media platform of your choice using one these hashtags!
                </p>
                <ul>
                <li :key="tag" v-for="tag in tags">
                  #{{ tag }}
                </li>
              </ul>
                <sui-button color="green" @click="closeandcollectpoints" content="Complete Task and Level Up!" />
            </slot>
          </section>
          </div>
        </div>
    </transition>
</template>


<style scoped>
  ul {
    padding-left: 0;
  }
  
  li {
    list-style: none;
    padding-left: 0;
  }
</style>

<style lang="scss">
  @import "../css/modal.scss"
</style>