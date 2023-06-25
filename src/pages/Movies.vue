<template>
  <main>
  <h1>movies</h1>
  <Navbar/>
  </main>
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

main{
   display: flex;
   flex-direction: column;
    min-height: 100vh;
}
</style>