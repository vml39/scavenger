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
    <p id="popupinstructions">
        Upload a photo to a social media platform of your choice using one these hashtags!
    </p>
    <ul class="tags">
      <li :key="tag" v-for="tag in tags">
        #{{ tag }}
      </li>
    </ul>
    <ul class="icons">
      <li><a href="http://facebook.com/"><img src="/img/facebook.png" alt="Facebook"></a></li>
      <!-- Source: https://seeklogo.net/facebook-icon-vector-91510.html -->
      <li><a href="http://instagram.com/"><img src="/img/instagram.png" alt="Instagram"></a></li>
      <!-- Source: https://en.instagram-brand.com/assets/icons -->
      <li><a href="http://twitter.com/"><img src="/img/twitter.png" alt="Twitter"></a></li>
      <!-- Source: https://www.iconfinder.com/icons/317723/social_social_media_tweet_twitter_icon -->
    </ul>
  </div>
</template>


<style scoped>
  .tags {
    padding-left: 0;
  }
  
  .tags li {
    list-style: none;
    padding-left: 0;
  }

  .icons {
    width: 50%;
    margin: 0 auto 15px auto;
    padding-left: 0;
  }

  .icons li {
    width: 33%;
    list-style: none;
    display: inline-block;
    padding: 0 5px;
  }

  img {
    width: 100%;
  }
</style>