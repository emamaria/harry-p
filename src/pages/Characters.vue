<template>
<main>
 <Header :title="title"/>

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
      Header: defineAsyncComponent(() => import('../components/shared/Header.vue'))
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