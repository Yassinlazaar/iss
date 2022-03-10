<template>
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png"  />

    <HelloWorld msg="Welcome in your threat sharing platform" />
    
    <form class="searchbar">
    <div class="searchbar-input">
    <input type="search" placeholder="Search ">
    <a href="#" class="searchbar-clear"></a>
    </div>
  
</form>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>

<style>
:root {
  background: #E7F2F9;
}
img{
  margin-top: 100px;
}
.searchbar{
  margin: 0auto;
  position: absolute;
    top: 10px;
    right: 250px;
}


</style>
