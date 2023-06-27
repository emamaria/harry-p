<template>
  <main>
 
  <Header :title="title"/>

  <div class="movies_container">
 <Movie  v-for="movie in movies" :key="movie.id" :movie-title="movie.name" :movie-year="movie.year" :movie-color="movie.color" :movie-story="movie.synopsis"/>
  </div>
 

  </main>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import movies from '../data/movies.js'

export default {
    props:{
     title:{
      type: String,
      required: true
     } 
    },
    components:{
    Header: defineAsyncComponent(() => import('../components/shared/Header.vue')),
    Movie: defineAsyncComponent(() => import('../components/Movie.vue'))
    },
    data(){
      return{
        movies
      }
    }
}
</script>

<style scoped>



main{
   display: flex;
   flex-direction: column;
    min-height: 100vh;
     margin-bottom: 100px;
}


.movies_container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>