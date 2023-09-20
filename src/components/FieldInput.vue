<script setup lang="ts">
import { match } from 'ts-pattern'

type Length = 'short' | 'medium' | 'long'

defineProps<{ placeholder: string, isError: boolean, length: Length }>()
const emit = defineEmits<{ (event: 'input', input: string): void }>()

const onInput = (event: Event): void => {
  const input = (event.target as HTMLInputElement).value
  emit('input', input)
}

const width = (length: Length): Array<string> => {
  return match(length)
    .with('short', () => ['w-[72px]', 'desktop:w-[79px]'])
    .with('medium', () => ['w-[164px]', 'desktop:w-[191px]'])
    .with('long', () => ['w-[327px]', 'desktop:w-[380px]'])
    .exhaustive()
}

const border = (isError: boolean): string => {
  return isError ? 'border-red' : 'border-very-dark-violet/30'
}

const conditional = (isError: boolean, length: Length): Array<string> => {
  return width(length).concat(border(isError))
}

</script>

<template>
  <input class="
    px-[16px] 
    py-[11px] 
    h-[44px]
    outline-none
    border-solid
    border-[1px]
    rounded-[10px]
    placeholder-very-dark-violet/30
    font-bold
    text-[17px]
    tracking-[0.51px]
    " :class="conditional(isError, length)" @input="onInput">
</template>