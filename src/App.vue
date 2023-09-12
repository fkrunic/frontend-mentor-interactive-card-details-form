<script setup lang="ts">
import { onMounted } from 'vue';
import CardFront from './components/CardFront.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>

  <!-- Page Layout -->
  <div class="relative flex flex-col items-center justify-start min-h-screen">
    <img src="./assets/bg-main-mobile.png">

    <div class="absolute rounded top-[4%] right-[5%]">
      <img class="h-[10rem]" src="./assets/bg-card-back.png" alt="card-back">
      <p class="absolute top-[44%] right-[12%] text-xs tracking-widest text-white/75">000</p>
    </div>

    
    <CardFront></CardFront>
    
  </div>
</template>