<script setup lang="ts">
import { onMounted } from 'vue'
import CardFront from './components/CardFront.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <CardFront :digits="'0000 0000 0000 0000'" :name="'JANE APPLESEED'" :expiration="'00/00'"></CardFront>
  </div>
</template>