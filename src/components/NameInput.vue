<script setup lang="ts">
import FieldBox from './FieldBox.vue';
import FieldInput from './FieldInput.vue';
import { useNameStore } from '../app'

const store = useNameStore()
const onInput = (input: string): void => store.updateInput(input)
</script>

<template>
  <FieldBox :title="'CARDHOLDER NAME'" :status="store.status">
    <FieldInput 
      :placeholder="'e.g. Jane Appleseed'" 
      :is-error="store.status.kind === 'error'"
      :length="'long'"
      @input="onInput"
      ></FieldInput>
  </FieldBox>
</template>