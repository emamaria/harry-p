<template>
<main>
 <p v-if="characterData">{{characterData.name}}</p>
</main>
 
</template>

<script>

import {getApiData} from '../api/getApiData'

export default {

   props: {
      id:{
        required: true,
        type: String
      }
   },
   data(){
     return{
        characterData: null
     }
   },
   async created(){
     let charactersArray = await getApiData()

       this.characterData = charactersArray.slice(0,25).filter(character => character.id === this.id)
                                          .map( data => {
           const {id, name,species, gender, house, dateOfBirth,yearOfBirth, wizard, ancestry, eyeColour, hairColour,wand, patronus,hogwartsStudent, hogwartsStaff, actor,alive,image} = data
                      return {
                       id,
                       name,
                       species,
                       gender,
                       house,
                       dateOfBirth,yearOfBirth,
                       wizard,
                       ancestry,
                       eyeColour,
                       hairColour,
                       wand,
                       patronus,
                       hogwartsStudent, 
                       hogwartsStaff,
                       actor,
                       alive,
                       image
                       }
                    })[0]

                    console.log("dato personaje", this.characterData)
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