<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    RouterView
  }
}

</script>

<style></style>
