<script setup lang="ts">
defineProps<{ cvc: string }>()
</script>

<template>
  <!-- Root -->
  <div>
    <!-- Card Back -->
    <div class="relative flex flex-col gap-[10px]">

      <!-- Card Back Background -->
      <img class="
        w-[286px] 
        h-[158px]
        " 
        src="../assets/bg-card-back.png" 
        alt="card-back">

      <!-- Digits -->
      <p class="
        absolute 
        left-[230px] 
        top-[70px] 
        font-bold 
        text-[10px] 
        tracking-[0.8px] 
        text-white
        ">{{ cvc }}</p>
    </div>
  </div>
</template>