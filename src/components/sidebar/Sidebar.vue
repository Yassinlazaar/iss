<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
 
    
   
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed"></span>
      <span v-else>
        <p1>SAMA PARTNERS</p1>

     
        
</span>
      <v-img src="../assets/logo.png" />
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/shared with me" icon="fas fa-columns">
      Shared with Me
    </SidebarLink>
    <SidebarLink to="/my documents" icon="fas fa-chart-bar">
      My documents
    </SidebarLink>
    <SidebarLink to="/communities" icon="fas fa-users">Communities</SidebarLink>
    <SidebarLink to="/organisations" icon="fas fa-image">
      Organisations
    </SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #D9EAF4;
  --sidebar-item-hover: #8bc4df;
  --sidebar-item-active: #8bc4df;
}
</style>

<style scoped>
.sidebar {
  color: rgb(146, 121, 9);
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
/*sama partners*/
.sidebar p1 {
  font-size: 10px;
}
.link {
  color: rgb(0, 0, 0);
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
