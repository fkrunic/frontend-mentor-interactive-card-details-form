<script setup lang="ts">
import { onMounted } from 'vue'
import Desktop from './components/Desktop.vue'
import Phone from './components/Phone.vue'

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <Desktop></Desktop>
</template>