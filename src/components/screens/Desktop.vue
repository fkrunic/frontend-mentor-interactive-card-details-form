<script setup lang="ts">
import CardFront from '@/components/cards/CardFront.vue';
import CardBack from '@/components/cards/CardBack.vue';
</script>

<template>
  <!-- Root -->
  <div>

    <!-- Desktop -->
    <div class="flex flex-row items-center h-screen">

      <!-- Banner Background -->
      <img class="w-[483px] h-full" src="@/assets/bg-main-desktop.png" alt="banner">

      <!-- Content -->
      <div class="flex flex-row gap-[128px] items-center -ml-[320px]">

        <!-- Cards -->
        <div class="flex flex-col gap-[38px]">
          <CardFront 
            :digits="'0000 0000 0000 0000'" 
            :name="'JANE APPLESEED'" 
            :expiration="'00/00'"
            ></CardFront> 

          <!-- Card Back Spacer -->
          <div class="flex flex-col gap-[10px] pl-[94px]">
            <CardBack :cvc="'000'"></CardBack>
          </div>
        </div>

        <p>Hello world!</p>
      </div>
    </div>
  </div>
</template>