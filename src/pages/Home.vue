<template>
<main>
  <header>
  <h1>Harry Potter</h1>
  <Navbar class="nav"/>
 
</header>
 
  <section class="hogwarts_about">
  <img src="../assets/hogwarts.jpg" alt="hogwarts">
 <h3>{{hogwarts}}</h3>
  </section>
  <section class="green">

  </section>
  <section class="rowling_about">
  
   <h2>{{author.name}}</h2>
   <h3>{{author.description}}</h3> 
  
   </section>
  <section class="yellow">

  </section>
  <section class="dumbledore_about">
     <h2>{{dumbledore.name}}</h2>
   <h3>{{dumbledore.description}}</h3> 
  </section>

</main>

</template>

<script>
import author from '../data/author'
import dumbledore from '../data/dumbledore'
import hogwarts from '../data/hogwarts'
import Navbar from '../components/shared/Navbar.vue';


export default {



    data(){
      return{
        author,
        dumbledore,
        hogwarts
      }
    },
    components: {
      Navbar,
    
    }
}
</script>

<style scoped>

header{
  height: 40vh;
  position: relative;
 
}

.nav{
margin: 2rem;
position: absolute;
right: 3rem;
}


h1{
  font-size: 5rem;
   margin: 2rem;
color:#a6332e;
}





h2{
  margin-bottom: 30px;
}

section{
  font-size: 1.5rem;
 
  padding: 50px;
}
.green{
  background-color:#366447;
  height: 35vh;
}

.hogwarts_about{
  display: flex;
  flex-direction: column;
  padding: 30px;
}




.hogwarts_about img{

   margin-bottom: 30px;
 
}

.hogwarts_about{
 display: flex;
}


.rowling_about, .dumbledore_about{
 
  display: flex ;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
 
 
}

.yellow{
  background-color:#efbc2f;
   height: 35vh;
}

main{
   display: flex;
     flex-direction: column;
     min-height: 100vh;
}




</style>