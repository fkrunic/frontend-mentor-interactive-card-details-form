<script setup lang="ts">
import { onMounted } from 'vue'
import NumberInput from './components/NumberInput.vue';
import ConfirmButton from './components/ConfirmButton.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <NumberInput></NumberInput>
  <ConfirmButton></ConfirmButton>
</template>