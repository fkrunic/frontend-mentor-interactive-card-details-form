<script setup lang="ts">
type ButtonType = 'Confirm' | 'Continue'
defineProps<{ buttonType: ButtonType }>()
const emit = defineEmits<{ (event: 'click'):void }>()
const onClick = (): void => emit('click')
</script>

<template>
  <p class="
    w-[327px] desktop:w-[380px]
    h-[53px]
    px-[129px] 
    py-[15px] 
    rounded-[10px] 
    text-center
    bg-very-dark-violet
    font-bold
    text-[18px]
    text-white
    hover:cursor-pointer
    "
    @click="onClick"
    >{{ buttonType }}</p>
</template>