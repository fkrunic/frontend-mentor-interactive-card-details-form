<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <p class="font-bold text-3xl underline">Hello world!</p>
  </div>
</template>