<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <p class="font-bold text-[12px] tracking-[1.98px]">{{ title }}</p>
</template>