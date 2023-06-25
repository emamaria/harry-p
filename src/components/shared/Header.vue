<template>
 <header>
  <h1 v-if="title === harry">{{title}}</h1>
  <h2 v-else>{{title}}</h2>
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
    },
    data(){
      return{
        harry: "Harry Potter"
      }
    }
}
</script>

<style scoped>

h1{
  font-size: 6rem;
   margin: 1.7rem;
color:#a6332e;
/* text-shadow: white 1px 1px; */
}

h2{
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