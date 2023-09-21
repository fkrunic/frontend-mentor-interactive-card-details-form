<script setup lang="ts">
import { onMounted } from 'vue'
import NumberInput from './components/NumberInput.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <NumberInput></NumberInput>
</template>