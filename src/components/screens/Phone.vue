<script setup lang="ts">
import CardBack from '@/components/cards/CardBack.vue';
import CardFront from '@/components/cards/CardFront.vue';
import CardForm from '@/components/forms/CardForm.vue';
import Completed from '@/components/forms/Completed.vue';
import { useAppStore } from '@/app';

const store = useAppStore()
</script>

<template>
  <!-- Root -->
  <div>

    <!-- Phone -->
    <div class="flex flex-col items-center">

      <!-- Banner Background -->
      <img class="w-full h-[240px]" src="@/assets/bg-main-mobile.png" alt="banner">

      <!-- Content -->
      <div class="flex flex-col gap-[50px] items-center -mt-[209px]">

        <!-- Cards -->
        <div class="relative flex flex-col items-center">

          <!-- Card Back Spacer -->
          <div class="flex flex-col gap-[10px] items-center pl-[55px]">
            <CardBack :cvc="'000'"></CardBack>
          </div>

          <CardFront class="absolute -left-[2px] top-[96px]"></CardFront>        
        </div>

        <!-- Form Spacer -->
        <div class="pt-[90px]">
          <Completed v-if="store.isFormValid"></Completed>
          <CardForm v-else></CardForm>
        </div>
      </div>
    </div>
  </div>
</template>
