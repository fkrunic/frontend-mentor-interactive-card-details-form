<script setup lang="ts">
import { useAppStore, useCVCStore } from '@/app';
import { computed } from 'vue';
const cvcStore = useCVCStore()
const appStore = useAppStore()

const cvc = computed(() => {
  return appStore.isFormValid ? cvcStore.input : '000'
})
</script>

<template>
  <!-- Root -->
  <div>
    <!-- Card Back -->
    <div class="relative flex flex-col gap-[10px]">

      <!-- Card Back Background -->
      <img class="
        w-[286px] desktop:w-[447px]
        h-[158px] desktop:h-[245px]
        " 
        src="@/assets/bg-card-back.png" 
        alt="card-back">

      <!-- Digits -->
      <p class="
        absolute 
        left-[230px] desktop:left-[350px]
        top-[70px] desktop:top-[110px]
        font-bold 
        text-[10px] desktop:text-[14px]
        tracking-[0.8px] desktop:tracking-[1.4px]
        text-white
        ">{{ cvc }}</p>
    </div>
  </div>
</template>