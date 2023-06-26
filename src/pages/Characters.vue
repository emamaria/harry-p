<template>
<main>
 <Header :title="title"/>
<Character @click="goToCharacterPage(name)" v-for="(name, index) in names" :key="index" :name="name"/>
</main>
 
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
      Header: defineAsyncComponent(() => import('../components/shared/Header.vue')),
      Character: defineAsyncComponent(() => import('../components/Character.vue'))
    },
    data(){
      return{
        names: ["ron", "hermione"] 
      }
    },
    methods: {
        goToCharacterPage(name){
          console.log(name)
          this.$router.push(`characters/${name}`)
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