<template>
  <div class="badge">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    name: String,
    icon: String,
    description: String,
  }
}
</script>

<style>
</style>