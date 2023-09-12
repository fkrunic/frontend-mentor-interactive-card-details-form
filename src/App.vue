<script setup lang="ts">
import CardFront from './components/CardFront.vue';
</script>

<template>

  <!-- Page Layout -->
  <div class="relative flex flex-col items-center justify-start min-h-screen">
    <img src="./assets/bg-main-mobile.png">
    <img class="absolute rounded h-[10rem] top-[4%] right-[5%]" src="./assets/bg-card-back.png" alt="card-back">
    <CardFront></CardFront>
    
  </div>
</template>