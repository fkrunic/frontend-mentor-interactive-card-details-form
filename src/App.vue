<script setup lang="ts">
import { onMounted } from 'vue'
import Desktop from '@/components/screens/Desktop.vue'

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <Desktop></Desktop>
</template>