<template>
  <div class="socialmedia">
    <h1>{{ theme }}</h1>
    <p>Upload a photo to a social media platform of your choice using one these hashtags!</p>
    <ul>
      <li :key="tag" v-for="tag in tags">
        #{{ tag }}
      </li>
    </ul>
    <button>Done<button> <!-- onclick would close the modal -->
  </div>
</template>

<script>
export default {
  name: 'SocialMediaTag',
  props: {
    theme: String
  }, 
  data: {
    themes: {
      "fall": ["fall", "thanksgiving", "pumpkinspice", "cider", "appleseason"],
      "thanksgiving": ["turkey", "farmtotable", "pumpkin", "squash", "localfood"]
    },
    tags: []
  },
  methods: {
    getTags (theme) {
      this.tags = themes[theme];
    }
  },
  mounted: function () {
    this.getTags(this.theme);
  },

}
</script>

<style scoped>
  li {

  }
</style>