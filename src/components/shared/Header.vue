<template>
 <header>
  <h1>{{title}}</h1>
  <Navbar class="nav"/>
 
</header>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  props:{
     title:{
      type: String,
      required: true
     } 
    },
    components:{
      Navbar: defineAsyncComponent(() => import('./Navbar.vue'))
    }
}
</script>

<style scoped>

h1{
  font-size: 5rem;
   margin: 1.7rem;
color:#a6332e;
}

header{
  height: 40vh;
  position: relative;
 
}
.nav{
margin: 2rem;
position: absolute;
right: 3rem;
}
</style>