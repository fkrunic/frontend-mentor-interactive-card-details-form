<script setup lang="ts">
import { onMounted } from 'vue';
import CardFront from './components/CardFront.vue';
import FormInput from './components/FormInput.vue'

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
    
    <!-- Card Form -->  
    <div class="
      flex 
      flex-col 
      gap-6 

      w-full 
      p-6 
      mt-20 
      
      text-xs 
      tracking-widest
      text-very-dark-violet
      ">

      <!-- Name -->
      <div class="flex flex-col gap-1">
        <p>CARDHOLDER NAME</p>
        <FormInput :placeholder="'e.g. Jane Appleseed'"></FormInput>
      </div>

      <!-- Card Number -->
      <div class="flex flex-col gap-1">
        <p>CARD NUMBER</p>
        <FormInput :placeholder="'e.g. 1234 5678 9123 0000'"></FormInput>
      </div> 
      
      <!-- Card Details -->
      <div class="flex flex-row gap-3">

        <!-- Expiration Date -->
        <div class="flex flex-col gap-1">
          <p>EXP. DATE (MM / YY)</p>
          <div class="flex flex-row gap-2">
            <FormInput class="w-[4rem]" :placeholder="'MM'"></FormInput>
            <FormInput class="w-[4rem]" :placeholder="'YY'"></FormInput>
          </div>
        </div>

        <!-- Security Code -->
        <div class="flex flex-col gap-1">
          <p>CVC</p>
          <FormInput class="w-[11rem]" :placeholder="'e.g. 123'"></FormInput>
        </div> 
      </div>

      <!-- Submit Button -->
      <p class="
        p-4 
        text-center 
        text-base 
        rounded-lg 
        text-white 
        bg-very-dark-violet">Confirm</p>
    </div>
  </div>
</template>