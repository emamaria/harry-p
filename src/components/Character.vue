<template>
  <div :class="color">
     <header >
      {{name}}
     </header>
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
    },
    color: {
      type: String,
      required: true
    }
   }
}
</script>

<style scoped>
 
 header{
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
 }
  div{
    border: 2px solid #c17b00;
   
    width: 250px;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  }

  div:hover{
    opacity: 0.6;
    cursor: pointer;
  }

 img{
  object-fit: cover;
  width: 100%;
  border-top: 2px solid #c17b00;
  height: 320px;
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