<script setup lang="ts">
import FieldBox from '@/components/fields/FieldBox.vue';
import FieldInput from '@/components/fields/FieldInput.vue';
import { useNameStore } from '@/app'

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
      autocomplete="cc-name"
      ></FieldInput>
  </FieldBox>
</template>