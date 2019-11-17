<template>
  <div class="socialmedia">
    <h1>{{ theme }}</h1>
    <ul>
      <li :key="tag" v-for="tag in tags">
        {{ tag }}
      </li>
    </ul>
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