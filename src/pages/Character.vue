<template>
<main>
  <div class="character_detail_container">
    <h3>{{characterData.name}}</h3>
     <CharacterDetail v-if="characterData"  :char-data="characterData"/>
  </div>

</main>
 
</template>

<script>

import {getApiData} from '../api/getApiData'
import {getCharacterColor} from '../helpers/getCharacterColor'
import { defineAsyncComponent } from 'vue'
export default {

   components:{
     
      CharacterDetail: defineAsyncComponent(() => import('../components/CharacterDetail.vue'))
    },
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
                     

                     let color = getCharacterColor(house.toLowerCase())

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
                       image,
                       color
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

.character_detail_container{
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
}

h3{
  margin-top: 3rem;
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