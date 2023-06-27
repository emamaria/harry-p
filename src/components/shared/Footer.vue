<template>
   <footer>
    <div class="copy">
     <p>&#169; 2023 all rights reserved</p>
    <p>Only for dev practicing purpose</p>
    </div>
   
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
  height: 13vh;
  background-color: #3c4e91;
  margin-top: auto;
  display:flex;
  justify-content: end;
  align-items: center;
}

.copy{
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.copy p{
  margin: 10px;
  
}


@media screen and (max-width:900px){

  footer{
    justify-content: center;
  }

 
}

</style>