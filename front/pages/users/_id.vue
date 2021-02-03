<template>
  <section class="container">
    <h1>{{ message}}</h1>
    <p>id: {{ this.$route.params.id }}</p>
  </section>
</template>

<script>
export default {
  name: "_id",
  data: function () {
    return {
      message: "/users/_id.vue",
    }
  },
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>

</style>