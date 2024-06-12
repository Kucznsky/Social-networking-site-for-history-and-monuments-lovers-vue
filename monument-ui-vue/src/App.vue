<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
    RouterView
  }
}

</script>

<style></style>
