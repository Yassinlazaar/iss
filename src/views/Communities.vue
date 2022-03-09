<template>
  <h1>
    this is the page where i will put my shared data
    {{ collapsed ? 'closed' : 'open' }}
  </h1>
  <h1>
    this is the page where i will put my shared data
    {{ collapsed ? 'closed' : 'open' }}
  </h1>
  <button @click="toggleSidebar">Toggle Sidebar</button>
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
:root {
  background:  #E7F2F9;
  
}
</style>
