<script setup lang="ts">
import Button from './Button.vue';
import {
  useNameStore,
  useNumberStore,
  useExpirationMonthStore,
  useExpirationYearStore,
  useCVCStore
} from '@/app';

const nameStore = useNameStore()
const numberStore = useNumberStore()
const expirationMonthStore = useExpirationMonthStore()
const expirationYearStore = useExpirationYearStore()
const cvcStore = useCVCStore()

const onClick = () => {
  nameStore.updateStatus()
  numberStore.updateStatus()
  expirationMonthStore.updateStatus()
  expirationYearStore.updateStatus()
  cvcStore.updateStatus()
}
</script>

<template>
  <Button :button-type="'Confirm'" @click="onClick"></Button>
</template>