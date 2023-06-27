<template>
<main>
  
  <div v-if="characterData"  class="character_detail_container">
    
    <h3>{{characterData.name}}</h3>
      <router-link class="back_link" :class="characterData.color" :to="{name: 'characters'}">←</router-link>
     <CharacterDetail  :char-data="characterData"/>
     
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

.back_link{
  margin: 2rem;
  font-size: 2rem;
  text-decoration: none;
  color: #c17b00;
  font-weight: bold;
   transition: .2s;
   width: 50px;
   border: 2px solid #c17b00;
   text-align: center;

  }

 .back_link:hover{
   transform: scale(1.2);
 }

.character_detail_container{
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
}

h3{
  margin-top: 4rem;
  font-size: 2rem;
  color: #c17b00;
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