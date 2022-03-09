<template>
  <h1>
    Data 1
  </h1>

  <h1>
   Data 2
  </h1>

  <h1>
    Data 3
   
  </h1>

<h1>
    Data 4
    
  </h1>

  <button @click="toggleSidebar">submit</button>
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
  color: rgb(255, 0, 64);
  margin-top: 5%;

}

:root {
  background: #E7F2F9;
  
}


</style>