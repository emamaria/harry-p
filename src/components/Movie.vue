<template>
  <div class="movie_container" :class="movieColor"> 
    <header>
       <h4>{{movieTitle}} &nbsp; ({{movieYear}})</h4>
    </header>
    <main>
      <p>
        {{movieStory}}
    </p>
    </main>
  </div>
</template>

<script>
export default {
   props:{
      movieTitle:{
        type: String,
        required: true
      },
      movieStory:{
         type: String,
        required: true
      },
      movieYear:{
         type: Number,
        required: true
      },
      movieColor:{
         type: String,
        required: true
      }
   }
}
</script>

<style scoped>
  
  .movie_container{
    width: 35rem;
    border: 1.5px solid #c17b00;
    margin: 2rem;
  }

  header, main{
     border: 1.5px solid #c17b00;
     padding: 0.8rem;
  }

  .red{
    background-color:#a6332e;
  }

  .blue{
    background-color: #3c4e91;
  }

  .green{
   background-color:#366447;
  }

  .yellow{
    background-color:#efbc2f;
  }


</style>