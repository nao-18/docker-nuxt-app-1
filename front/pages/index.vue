<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr>
    <router-link to="/price">Price Page</router-link>
    <div>
      <img src="~/assets/cat.jpg" alt="">
    </div>
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