<script setup lang="ts">
import FieldBox from '../fields/FieldBox.vue';
import FieldInput from '../fields/FieldInput.vue';
import { useCVCStore } from '@/app';

const store = useCVCStore()
const onInput = (input: string): void => store.updateInput(input)
</script>

<template>
  <FieldBox :title="'CVC'" :status="store.status">
    <FieldInput
      :placeholder="'e.g. 123'"
      :is-error="store.status.kind === 'error'"
      :length="'medium'"
      @input="onInput"
      autocomplete="cc-csc"
      ></FieldInput>
  </FieldBox>
</template>