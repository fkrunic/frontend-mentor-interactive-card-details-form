<script setup lang="ts">
import FieldBox from '@/components/fields/FieldBox.vue';
import FieldInput from '@/components/fields/FieldInput.vue';
import { useNumberStore } from '@/app'

const formatCardNumber = (cn: string): string => {
  const noSpaces = cn.replace(/\s+/g, '')
  let formated = ''

  for (let i = 0; i < noSpaces.length; i++) {
    if (i > 0 && i % 4 == 0) {
      formated += ' '
    }
    formated += noSpaces.charAt(i)
  }

  return formated.trim()
}

const store = useNumberStore()
const onInput = (input: string): void => store.updateInput(input)
</script>

<template>
  <FieldBox :title="'CARD NUMBER'" :status="store.status">
    <FieldInput 
      :placeholder="'e.g. 1234 5678 9123 0000'" 
      :is-error="store.status.kind === 'error'"
      :length="'long'"
      :value="formatCardNumber(store.input)"
      @input="onInput"
      autocomplete="cc-number"
      ></FieldInput>
  </FieldBox>
</template>