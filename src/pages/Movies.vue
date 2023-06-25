<template>
  <h1>movies</h1>
  <Navbar/>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {

    components:{
      Navbar: defineAsyncComponent(() => import('../components/shared/Navbar.vue'))
    }
}
</script>

<style scoped>

h1{
    color: white;
}
</style>