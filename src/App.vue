<script setup lang="ts">
import { onMounted } from 'vue';
import CardFront from './components/CardFront.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>

  <!-- Page Layout -->
  <div class="flex flex-col items-center justify-start min-h-screen">

    <!-- Banner -->
    <div class="relative">
      <img src="./assets/bg-main-mobile.png">

      <!-- Card Back -->
      <div class="absolute rounded top-[15%] right-[5%]">
        <img class="h-[10rem]" src="./assets/bg-card-back.png" alt="card-back">
        <p class="absolute top-[45%] right-[12%] text-[7pt] tracking-widest text-white/75">000</p>
      </div>      

      <div class="absolute top-[53%] left-[4%]">
        <CardFront></CardFront>
      </div>      
    </div>
    
        
  </div>
</template>