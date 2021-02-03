<template>
  <section class="container">
    <p class="title">{{ message }}</p>
    <hr>
    <router-link to="/price">Price Page</router-link>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello World!!"
    }
  }
}
</script>

<style scoped>
.title {
  font-family: 'Permanent Marker', cursive;
}
</style>