<template>
<main>
 <p>{{name}}</p>
</main>
 
</template>

<script>

// import {getApiData} from '../api/getApiData'

export default {

   props: {
      id:{
        required: true,
        type: String
      }
   },
//    data(){
//      return{
//         charactersList: []
//      }
//    },
//    created(){
//      this.charactersList =  getApiData()
//       }
}
</script>

<style scoped>
main{
 display: flex;
     flex-direction: column;
     min-height: 100vh;    
}
</style>