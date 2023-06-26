<template>
  
  <main :class="charData.color">
 
    <div class="img_contanier" >
        
    <img :src="charData.image" :alt="charData.name">   
    </div>

    <div class="character_data_container">
    <p>Species: &nbsp;{{charData.species}}</p>
    <p>Gender: &nbsp;{{charData.gender}}</p>
    <p>House:&nbsp;{{charData.house}}</p>
     <p>Date of Birth:&nbsp;{{charData.dateOfBirth}}</p>
     <p>Year of Birth:&nbsp;{{charData.yearOfBirth}}</p>
     <p>Wizard:&nbsp;{{charData.wizard}}</p>
     <p>Ancestry: &nbsp;{{charData.ancestry}}</p>
     <p>Eye Colour:&nbsp; {{charData.eyeColour}}</p>
     <p>Hair Colour:&nbsp;{{charData.hairColour}}</p>
     <p>Patronus:&nbsp;{{charData.patronus}}</p>
     <p>Hogwarts Student:&nbsp;{{charData.hogwartsStudent}}</p>
     <p>Hogwarts Staff:&nbsp; {{charData.hogwartsStaff}}</p>
     <p>Actor:&nbsp;{{charData.actor}}</p>
     <p>Alive:&nbsp;{{charData.alive}}</p>
     <ul>
        <h4>Wand:</h4>
        <li>Wood:&nbsp;{{charData.wand.wood}} </li>
        <li>Core:&nbsp;{{charData.wand.core}} </li>
        <li>Length:&nbsp;{{charData.wand.length}}</li>
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
    margin: 5px;
 }

 h4{
    margin: 5px;
 }


 main{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    min-width:300px;
    height: 600px;
    margin: 50px;
    padding: 2rem;
    justify-content: center;
 }

 

 .img_container{
    background-color: pink;
   
 }

 img{
    object-fit: contain;
    width: 270px;
    height: 350px;
 }

 .character_data_container{
    display: flex;
    flex-direction: column;
 
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