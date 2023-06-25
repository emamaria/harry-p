<template>
   <nav>  
  <router-link :to="{name: 'home'}" v-slot="{isActive}">
    <li><a :class="isActive?'is-active':'not-active'">Home</a></li>
   </router-link>
  <router-link :to="{name: 'characters'}" v-slot="{isActive}" >
     <li><a :class="isActive?'is-active':'not-active'">Characters</a></li>
  </router-link>
   <router-link :to="{name: 'movies'}" v-slot="{isActive}">
    <li><a :class="isActive?'is-active':'not-active'">Movies</a></li>
   </router-link>
  </nav>
 
</template>

<script>
export default {

 
}
</script>

<style scoped>

nav{

display: flex;
 

}

nav li{
  list-style-type: none;
  margin: 3px;
  background-color:#a6332e;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
 
}
nav a{
  text-decoration: none;
  color: white;
}

.is-active{
    color: #F5C518;
}
.not-active {
    color: #c6c5c5;
}

</style>