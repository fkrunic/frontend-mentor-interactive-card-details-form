<script setup lang="ts">
import Button from '../buttons/Button.vue';
</script>

<template>
  <div class="flex flex-col gap-[45px] items-center">
    <!-- Content -->
    <div class="flex flex-col gap-[18px] items-center">
      <img class="w-[80px] h-[80px]" src="@/assets/icon-complete.svg" alt="completed">
      <!-- Callout -->
      <div class="flex flex-col gap-[15px] items-center justify-center pt-[20px]">
        <p class="font-bold text-[28px] tracking-[3.36px]">THANK YOU</p>
        <p class="font-bold text-[18px] text-dark-grayish-violet">We've added your card details.</p>
      </div>
    </div>
    <Button :button-type="'Continue'"></Button>
  </div>
</template>