<script setup lang="ts">
import FieldBox from './FieldBox.vue';
import FieldInput from './FieldInput.vue';
import { useNumberStore } from '../app'

const store = useNumberStore()
const onInput = (input: string): void => store.updateInput(input)
</script>

<template>
  <FieldBox :title="'CARD NUMBER'" :status="store.status">
    <FieldInput 
      :placeholder="'e.g. 1234 5678 9123 0000'" 
      :is-error="store.status.kind === 'error'"
      :length="'long'"
      @input="onInput"
      ></FieldInput>
  </FieldBox>
</template>