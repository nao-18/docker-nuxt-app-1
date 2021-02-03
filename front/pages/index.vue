<template>
  <section class="container">
    <p>{{ $store.state.message }}</p>
<!--  コミットメソッドでミューテーションを呼び出す  -->
<!--    <button v-on:click="$store.commit('updateMessage')">Update</button>-->
    <button v-on:click="$store.commit('updateMessage', 'Commit with payload')">Update</button>
  </section>
</template>

<script>
export default {

}
</script>