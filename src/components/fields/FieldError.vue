<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<template>
  <p class="font-bold text-[12px] text-red">{{ message }}</p>
</template>