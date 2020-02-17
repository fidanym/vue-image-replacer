<template>
  <div id="app" class="container">
    <h1>Image Replacer</h1>
    <br>

    <convert-form></convert-form>
  </div>
</template>

<script>
import ConvertForm from './components/ConvertForm.vue'

export default {
  name: 'App',
  components: {
    ConvertForm
  }
}
</script>

<style>

</style>
