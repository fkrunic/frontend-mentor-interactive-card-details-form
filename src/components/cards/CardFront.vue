<script setup lang="ts">
defineProps<{ digits: string, name: string, expiration: string }>()
</script>

<template>
  <!-- Root -->
  <div>

    <!-- Card Front -->
    <div class="relative flex flex-col gap-[10px]">

      <!-- Card Background -->
      <img class="
        w-[287px] desktop:w-[447px]
        h-[156px] desktop:h-[245px]
        rounded-[5px]
        " 
        src="@/assets/bg-card-front.png" 
        alt="card-front">

      <!-- Card Logo -->
      <img class="
        absolute 
        left-[19px] desktop:left-[30px]
        top-[17px] desktop:top-[28px]
        w-[56px] desktop:w-[88px]
        h-[30px] desktop:h-[49px]
        " 
        src="@/assets/card-logo.svg" 
        alt="card-logo">

      <!-- Card Digits -->
      <p class="
        absolute 
        left-[20px] desktop:left-[33px]
        top-[85px] desktop:top-[140px]
        font-bold 
        text-[18px] desktop:text-[30px]
        tracking-[2.16px] desktop:tracking-[2.1px]
        text-white
        ">{{ digits }}</p>

      <!-- Name -->
      <p class="
        absolute 
        left-[20px] desktop:left-[33px]
        top-[124px] desktop:top-[202px]
        font-bold 
        text-[10px] desktop:text-[14px]
        tracking-[0.8px] desktop:tracking-[1.96px]
        text-white
        ">{{ name }}</p>

      <!-- Expiration -->
      <p class="
        absolute 
        left-[232px] desktop:left-[365px]
        top-[124px] desktop:top-[202px]
        font-bold 
        text-[10px] desktop:text-[14px]
        tracking-[0.8px] desktop:tracking-[1.68px]
        text-white
        ">{{ expiration }}</p>
      </div>
  </div>
</template>