<script setup lang="ts">
defineProps<{ digits: string, name: string, expiration: string }>()
</script>

<template>
  <div class="relative flex flex-col gap-[10px]">

    <!-- Card Background -->
    <img class="w-[287px] h-[156px] rounded-[5px]" src="../assets/bg-card-front.png" alt="card-front">

    <!-- Card Logo -->
    <img class="absolute left-[19px] top-[17px] w-[56px] h-[30px]" src="../assets/card-logo.svg" alt="card-logo">

    <!-- Card Digits -->
    <p class="absolute left-[20px] top-[85px] font-bold text-[18px] tracking-[2.16px] text-white">{{ digits }}</p>

    <!-- Name -->
    <p class="absolute left-[20px] top-[124px] font-bold text-[10px] tracking-[0.8px] text-white">{{ name }}</p>

    <!-- Expiration -->
    <p class="absolute left-[232px] top-[124px] font-bold text-[10px] tracking-[0.8px] text-white">{{ expiration }}</p>
  </div>
</template>