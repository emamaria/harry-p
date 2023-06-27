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
  font-size: 5.3rem;
margin: 40px;
color:#a6332e;
/* text-shadow: white 1px 1px; */
}

h2{
 font-size: 4.3rem;
 color:#a6332e;
 margin-top: 50px;
 text-align: center;
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

@media screen and (max-width:900px){
  h1{
    font-size: 3.5rem;
    text-align: center;
  }

   h2{
    font-size: 3rem;
    text-align: center;
  }

.nav{

position: absolute;
top: 180px;
left: 0;
right: 0;
margin: 0 auto;
display: flex;
justify-content: center;

}
}
</style>