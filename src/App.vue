<script setup lang="ts">
import { onMounted } from 'vue'
import Phone from './components/Phone.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <Phone></Phone>
</template>