<script setup lang="ts">
import Button from './Button.vue';
import { useNumberStore } from '../app';

const store = useNumberStore()
const onClick = () => {
  store.updateStatus()
}
</script>

<template>
  <Button :button-type="'Confirm'" @click="onClick"></Button>
</template>