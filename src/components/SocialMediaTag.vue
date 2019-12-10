<script>
export default {
  name: 'SocialMediaTag',
  props: {
    theme: String,
  }, 
  data: function () {
    return {
      themes: {
      "fall": ["fall", "thanksgiving", "pumpkinspice", "cider", "appleseason"],
      "thanksgiving": ["turkey", "farmtotable", "pumpkin", "squash", "localfood"]
      },
      tags: [],
    }
  },
  methods: {
    getTags (theme) {
      this.tags = this.themes[theme];
    },
    completeTask() {
      this.$emit('completeTask');
    }
  },
  mounted: function () {
    this.getTags(this.theme);
  },
}
</script>

<template>
  <div class="socialmediatag_modal">
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
    <sui-button color="green" @click="completeTask" content="Complete Task!" />

  </div>
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