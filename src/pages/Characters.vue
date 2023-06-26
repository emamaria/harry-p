<template>
<main>
 <Header :title="title"/>
 <div class="character_container">
  <Character @click="goToCharacterPage(character.id)" v-for="character in charactersList" :key="character.id" :name="character.name" :image="character.image"  :color="character.color"/>
 </div>

</main>
 
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {getApiData} from '../api/getApiData'



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
    
         charactersList: []
      }
    },
    async created(){

      try{
      let data =  await getApiData()
      console.log("mi data", data)
      this.charactersList = data.slice(0, 25).map( data => {
          const {id, name,image, house} = data

          let characterHouse = house.toLowerCase()
          let color = ""

          switch(characterHouse){

            case "gryffindor":
              color = "red"
              break;
            case "ravenclaw":
              color = "green"
              break;
            case "hufflepuff":
              color = "yellow"
              break;
            case "slytherin":
              color = "blue"
              break;
            default:
              color = "black"
              break
          }

             return {id,name,image,color}
          })

      }catch(err){
                console.log(err)
      }
   
      },
    methods: {
        goToCharacterPage(id){
          console.log(id)
          this.$router.push(`characters/${id}`)
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

.character_container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
 
}
</style>