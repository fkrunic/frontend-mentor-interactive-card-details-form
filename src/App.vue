<script setup lang="ts">
import { onMounted } from 'vue'
import CardFront from './components/CardFront.vue';
import CardBack from './components/CardBack.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <CardFront :digits="'0000 0000 0000 0000'" :name="'JANE APPLESEED'" :expiration="'00/00'"></CardFront>
    <CardBack :cvc="'000'"></CardBack>
  </div>
</template>