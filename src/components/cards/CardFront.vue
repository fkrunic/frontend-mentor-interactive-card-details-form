<script setup lang="ts">
import { 
  useAppStore, 
  useNameStore, 
  useNumberStore, 
  useExpirationMonthStore, 
  useExpirationYearStore,
  formatCardNumber
} from '@/app';
import { computed } from 'vue';

const nameStore = useNameStore()
const numberStore = useNumberStore()
const monthStore = useExpirationMonthStore()
const yearStore = useExpirationYearStore()
const appStore = useAppStore()

const defaults = {
  number: '0000 0000 0000 0000',
  name: 'JANE APPLESEED',
  expiration: '00/00'
}

const number = computed(() => {
  return formatCardNumber(appStore.isFormValid ? numberStore.input : defaults.number)
})

const name = computed(() => {
  return appStore.isFormValid ? nameStore.input : defaults.name
})

const expiration = computed(() => {
  const possibleExp = monthStore.input + '/' + yearStore.input
  return appStore.isFormValid ? possibleExp : defaults.expiration
})
</script>

<template>
  <!-- Root -->
  <div>

    <!-- Card Front -->
    <div class="
      relative 
      flex 
      flex-col 
      gap-[10px]
      w-fit 
      shadow-2xl 
      shadow-very-dark-violet/75
      rounded-[10px]
      ">

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
        font-bold desktop:font-semibold
        text-[18px] desktop:text-[30px]
        tracking-[2.16px] desktop:tracking-[2.1px]
        text-white
        ">{{ number }}</p>

      <!-- Name -->
      <p class="
        absolute 
        left-[20px] desktop:left-[33px]
        top-[124px] desktop:top-[202px]
        font-bold 
        text-[10px] desktop:text-[14px]
        tracking-[0.8px] desktop:tracking-[1.96px]
        text-white
        uppercase
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