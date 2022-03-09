<template>
  <h1>your are the {{ collapsed ? 'closed' : 'open' }}</h1>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>
