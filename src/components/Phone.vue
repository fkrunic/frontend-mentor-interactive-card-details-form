<script setup lang="ts">
import CardBack from './CardBack.vue';
import CardFront from './CardFront.vue';
</script>

<template>
  <!-- Root -->
  <div>

    <!-- Phone -->
    <div class="flex flex-col items-center">

      <!-- Banner Background -->
      <img class="w-full h-[240px]" src="../assets/bg-main-mobile.png" alt="banner">

      <!-- Content -->
      <div class="flex flex-col gap-[50px] items-center -mt-[209px]">

        <!-- Cards -->
        <div class="relative flex flex-col items-center">

          <!-- Card Back Spacer -->
          <div class="flex flex-col gap-[10px] items-center pl-[55px]">
            <CardBack :cvc="'000'"></CardBack>
          </div>

          <CardFront 
            class="absolute -left-[2px] top-[96px]"
            :digits="'0000 0000 0000 0000'" 
            :name="'JANE APPLESEED'" 
            :expiration="'00/00'"
            ></CardFront>        
        </div>

        <p class="mt-[50px]">Hello world!</p>
      </div>
    </div>
  </div>
</template>
