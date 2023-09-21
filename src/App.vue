<script setup lang="ts">
import { onMounted } from 'vue'
import Phone from './components/screens/Phone.vue';
import Desktop from './components/screens/Desktop.vue';

onMounted(() => {
  document.body.className = 'font-space-grotesk'
})
</script>

<template>
  <Phone class="desktop:hidden"></Phone>
  <Desktop class="hidden desktop:flex"></Desktop>
</template>