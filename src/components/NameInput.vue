<script setup lang="ts">
import FieldTitle from './FieldTitle.vue';
import FieldError from './FieldError.vue';
import FieldInput from './FieldInput.vue';
import { useNameStore } from '../app'

const store = useNameStore()
const onInput = (input: string): void => store.update(input)
</script>

<template>
  <div class="flex flex-col gap-[9px]">
    <FieldTitle :title="'CARDHOLDER NAME'"></FieldTitle>
    <FieldInput 
      :placeholder="'e.g. Jane Appleseed'" 
      :is-error="store.status.kind === 'error'"
      :length="'long'"
      @input="onInput"
      ></FieldInput>
    <FieldError v-if="store.status.kind === 'error'" :message="store.status.message"></FieldError>
  </div>
</template>