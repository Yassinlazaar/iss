<template>
  <h1>My data : </h1>

  <table>
  <tr>
    <th><h2>Data n°</h2></th>
    <th><h2>Color</h2></th>
     <th><h2>Data type</h2></th>
     </tr>

   <tr>
    <th><h3>1</h3></th>
    <th><h3>Red</h3></th>
     <th><h3>D10.255.255.255</h3></th>
     </tr>

     <tr>
    <th><h3>2</h3></th>
    <th><h3>Green</h3></th>
     <th><h3>software version 1.3.1</h3></th>
     </tr>

     <tr>
    <th><h3>2</h3></th>
    <th><h3>Green</h3></th>
     <th><h3>software version 1.3.1</h3></th>
     </tr>

     <tr>
    <th><h3>2</h3></th>
    <th><h3>Green</h3></th>
     <th><h3>software version 1.3.1</h3></th>
     </tr> 
</table>

   
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
h1{
  margin-top: 100px;
}
h2{
  font-weight: bold;
  color: rgb(13, 61, 94);
}
h3{
  margin-top: 1px;
  font-weight: normal;
}


table, td, th {
  border: 1px solid;
  font-size: 8px;
  
}


table {
  margin-top: 10%;
  width: 70%;
  margin-left: 20%;
  border: 1px solid;
}



</style>