<template>
  
  <main>
 
    <div class="img_data_container"   :class="charData.color"  >
      
    <img :src="charData.image" :alt="charData.name"> 
    <div class="under_img_data_container">
     <p>Actor:&nbsp;{{charData.actor}}</p>  
     <p>Gender: &nbsp;{{charData.gender}}</p>
     <p>Date of Birth:&nbsp;{{charData.dateOfBirth}}</p>
     <p>Year of Birth:&nbsp;{{charData.yearOfBirth}}</p>
      <p>Eye Colour:&nbsp; {{charData.eyeColour}}</p>
     <p>Hair Colour:&nbsp;{{charData.hairColour}}</p>
     </div>
    </div>

    <div class="character_data_container"  :class="charData.color">
     
    <p id="first_p">Species: &nbsp;{{charData.species}}</p>
   
    <p>House:&nbsp;{{charData.house}}</p>
     
     <p>Wizard:&nbsp;{{charData.wizard}}</p>
     <p>Ancestry: &nbsp;{{charData.ancestry}}</p>
    
     <p>Patronus:&nbsp;{{charData.patronus}}</p>
     <p>Hogwarts Student:&nbsp;{{charData.hogwartsStudent}}</p>
     <p>Hogwarts Staff:&nbsp; {{charData.hogwartsStaff}}</p>
     
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
    margin: 3px;
    list-style-type:none;
   
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
    min-width:300px;
    margin: 100px 50px 200px 50px;
    justify-content: center;
    border: 3px solid #c17b00;
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