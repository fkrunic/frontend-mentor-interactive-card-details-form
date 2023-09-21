<script setup lang="ts">
import NameInput from '@/components/inputs/NameInput.vue'
import NumberInput from '@/components/inputs/NumberInput.vue'
import ExpirationInput from '@/components/inputs/ExpirationInput.vue'
import CVCInput from '@/components/inputs/CVCInput.vue'
import ConfirmButton from '@/components/buttons/ConfirmButton.vue'
</script>

<template>
  <!-- Root -->
  <div>
    <div class="flex flex-col gap-[30px] items-center">
      <!-- Card Inputs -->
      <div class="flex flex-col gap-[50px] pb-[30px]">
        <NameInput></NameInput>
        <NumberInput></NumberInput>
        <!-- Bottom Inputs -->
        <div class="flex flex-row gap-[11px] desktop:gap-[21px]">
          <ExpirationInput></ExpirationInput>
          <CVCInput></CVCInput>
        </div>        
      </div>
      <ConfirmButton></ConfirmButton>
    </div>
  </div>
</template>