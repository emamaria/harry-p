<template>
  <div>
     <p>{{name}}</p>
     <img :src="image" :alt="name">
  </div>
 
</template>

<script>
export default {
   
   props:{
    name:{
      required: true,
      type: String
    },
   
    image:{
      
      type: String
    }
   }
}
</script>

<style scoped>
 
  div{
   
    background-color: rebeccapurple;
    width: 300px;
    margin: 2rem;
  }

 img{
  width: 300px;
 }


</style>