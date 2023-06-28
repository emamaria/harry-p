<template>
 <header>
  <div class="titles_container">
   <h1 v-if="title === harry">{{title}}</h1>
   <h2 v-else>{{title}}</h2>
  </div> 
  <div class="nav_container">
     <Navbar class="nav"/>
  </div>
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
margin-top: 30px;
color:#a6332e;
padding: 2rem;
}

h2{
  margin-top: 30px;
 font-size: 4.3rem;
 color:#a6332e;
 text-align: center;
 padding: 2rem;
}

.nav_container{
  display: flex;
  justify-content: end;
}

header{
  height: 45vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

}
.nav{
margin: 4rem;

}

@media screen and (max-width:900px){
  h1{
    font-size: 3.5rem;
    text-align: center  ;
  }

   h2{
    font-size: 3rem;
   
  }

.nav_container{
  justify-content: center;
}

.nav{

display: flex;
justify-content: center;

}
}


@media screen and (max-width:300px){
 header{
 
  margin-bottom: 30px;

}
}
</style>