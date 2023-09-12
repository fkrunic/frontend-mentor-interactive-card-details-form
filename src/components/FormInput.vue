<script setup lang="ts">
defineProps<{ placeholder: string }>()
</script>

<template>
  <input 
    class="
      p-2
      text-base
      placeholder-dark-grayish-violet/50
      outline-none 
      border-solid 
      border-[1px] 
      border-dark-grayish-violet/25
      rounded-lg
      "
    :placeholder="placeholder">  
</template>