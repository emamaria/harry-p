<template>
<main>
 <p>{{name}}</p>
</main>
 
</template>

<script>
export default {

   props: {
      name:{
        required: true,
        type: String
      }
   }
}
</script>

<style scoped>
main{
 display: flex;
     flex-direction: column;
     min-height: 100vh;    
}
</style>