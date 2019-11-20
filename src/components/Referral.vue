<template>
  <div class="socialmedia">
    <h1>{{ theme }}</h1>
    <p>Refer a favorite vendor to a friend!</p>
    <label> Vedor Name: </label>
    <input>
    <label> Friend's Number </label>
    <input>
    <button>Send<button> <!-- onclick would close the modal and send a text -->
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