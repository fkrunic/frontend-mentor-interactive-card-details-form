<script setup lang="ts">
defineProps<{ placeholder: string, isError: boolean }>()

const border = (isError: boolean): string => {
  return isError ? 'border-red' : 'border-very-dark-violet/30'
}
</script>

<template>
  <input class="
    px-[16px] 
    py-[11px] 
    w-[327px] desktop:w-[380px] 
    h-[44px]
    outline-none
    border-solid
    border-[1px]
    rounded-[10px]
    placeholder-very-dark-violet/30
    font-bold
    text-[17px]
    tracking-[0.51px]
    "
    :class="border(isError)"
    >
</template>