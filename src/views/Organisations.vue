<template>
  <h1>
  Organisations :
  </h1>

 <h2>Name</h2>

  <h2>Status</h2>
  
  
  


  
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>
<style>
h1{
  color: rgb(13, 61, 94);
  margin-top: 5%;

}

:root {
  background: #E7F2F9;
}
h2{
  margin-top: 120px;
  background:#D9EAF4 ;
  
  font-weight: normal;
}

h1{
  margin-top: 150px;
}



</style>