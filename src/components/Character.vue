<template>
  <div>
     <p>{{name}}</p>
  </div>
 
</template>

<script>
export default {
   
   props:{
    name:{
      required: true,
      type: String
    }
   }
}
</script>

<style scoped>
  p{
    padding: 1rem;
  }
  div{
    width: 30rem;
    background-color: rebeccapurple;
    height: 20vh;
    margin: 2rem;
  }


</style>