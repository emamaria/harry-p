<template>

  <main>

    <div class="img_data_container"   :class="charData.color"  >
      
    <img :src="charData.image" :alt="charData.name"> 
    <div class="under_img_data_container">
     <p v-show="charData.actor">Actor:&nbsp;{{charData.actor}}</p>  
     <p v-show="charData.gender">Gender: &nbsp;{{charData.gender}}</p>
     <p v-show="charData.dateOfBirth">Date of Birth:&nbsp;{{charData.dateOfBirth}}</p>
     <p v-show="charData.yearOfBirth">Year of Birth:&nbsp;{{charData.yearOfBirth}}</p>
     <p v-show="charData.eyeColour">Eye Colour:&nbsp; {{charData.eyeColour}}</p>
     <p v-show="charData.hairColour">Hair Colour:&nbsp;{{charData.hairColour}}</p>
     </div>
    </div>

    <div class="character_data_container"  :class="charData.color">
     
    <p v-show="charData.species" id="first_p">Species: &nbsp;{{charData.species}}</p>
   
    <p v-show="charData.house" >House:&nbsp;{{charData.house}}</p>
     
     <p v-show="charData.wizard">Wizard:&nbsp;{{charData.wizard}}</p>
     <p v-show="charData.ancestry">Ancestry: &nbsp;{{charData.ancestry}}</p>
    
     <p v-show="charData.patronus">Patronus:&nbsp;{{charData.patronus}}</p>
     <p v-show="charData.hogwartsStudent">Hogwarts Student:&nbsp;{{charData.hogwartsStudent}}</p>
     <p v-show="charData.hogwartsStaff">Hogwarts Staff:&nbsp; {{charData.hogwartsStaff}}</p>
     
     <p v-show="charData.alive">Alive:&nbsp;{{charData.alive}}</p>
     <ul>
        <h4 v-show="charData.wand.wood || charData.wand.core || charData.wand.length">Wand:</h4>
        <li v-show="charData.wand.wood">Wood:&nbsp;{{charData.wand.wood}} </li>
        <li v-show="charData.wand.core">Core:&nbsp;{{charData.wand.core}} </li>
        <li v-show="charData.wand.length">Length:&nbsp;{{charData.wand.length}}</li>
     </ul>
    </div>
   
  </main>
</template>

<script>
export default {

   props:{
     charData: {
        required: true,
        type: Object
     }
   }
}
</script>

<style scoped>
 p, li{
    margin: 3px;
    list-style-type:none;
   font-size: 1.3rem
 }

 #first_p{
   margin-top: 50px;
 }

 h4{
    margin: 3px;
 }


 main{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    min-width:270px;
    margin: 100px 50px 200px 50px;
    justify-content: center;
   
   }

 .under_img_data_container{
   width: 300px;
   margin-top: 5px;
   padding: 2rem;
 }

 .img_data_container{
    width: 300px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   border: 3px solid #c17b00;
 }

 img{
    object-fit: contain;
    width: 270px;
    height: 350px;
 }

 .character_data_container{
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 2rem;
    border: 3px solid #c17b00;
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

  @media screen and (max-width:900px){

   #first_p{
   margin-top: 0px;
 }

 .under_img_data_container, 
 .img_data_container,
  .character_data_container{
    padding: 0.8rem;
    width: 260px;
  }

   img{
    object-fit: contain;
    width: 250px;
    height: 330px;
 }


  }

 
</style>