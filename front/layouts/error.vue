<template>
  <section class="container">
    <h1 v-if="error.statusCode === 404">Error! 404</h1>
  </section>
</template>

<script>
export default {
  name: "error",
  props: ["error"]
}
</script>

<style scoped>

</style>