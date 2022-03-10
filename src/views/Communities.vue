
<template>
  <h1>
  Communities
  </h1>
<table>
  <tr>
    <th><h2>Comm.ID</h2></th>
    <th><h2>Name</h2></th>
     <th><h2>Org.n°</h2></th>
     </tr>

   <tr>
    <th><h3>1</h3></th>
    <th><h3>SAMA PARTNERS</h3></th>
     <th><h3>3</h3></th>
     </tr>

     <tr>
    <th><h3>2</h3></th>
    <th><h3>SMU</h3></th>
     <th><h3>1</h3></th>
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
h2{
  margin-top: 1px;
  font-weight: bold;
}
h3{
  margin-top: 1px;
  font-weight: normal;
}


table, td, th {
  border: 1px solid;
}


table {
  width: 100%;
  border-collapse: collapse;
}

h1{
  margin-top: 150px;
}



</style>