<script setup lang="ts">
import FieldBox from './FieldBox.vue';
import FieldInput from './FieldInput.vue';
import { Status, useExpirationMonthStore } from '../app';
import { useExpirationYearStore } from '../app';

const monthStore = useExpirationMonthStore()
const yearStore = useExpirationYearStore()

const combinedStatus = (monthStatus: Status, yearStatus: Status): Status => {
  if (monthStatus.kind === 'error' && yearStatus.kind === 'error') {
    const message = 'Multiple errors'
    return { kind: 'error', message }
  } else if (monthStatus.kind === 'error') {
    return monthStatus
  } else if (yearStatus.kind === 'error') {
    return yearStatus
  } else {
    return { kind: 'ok' }
  }
}

const onMonthInput = (input: string): void => monthStore.updateInput(input)
const onYearInput = (input: string): void => yearStore.updateInput(input)
</script>

<template>
  <FieldBox :title="'EXP. DATE (MM/YY)'" :status="combinedStatus(monthStore.status, yearStore.status)">
    <div class="flex flex-row gap-[11px] desktop:gap-[21px]">
      <FieldInput
        :placeholder="'MM'"
        :is-error="monthStore.status.kind === 'error'"
        :length="'short'"
        @input="onMonthInput"
        ></FieldInput>
      <FieldInput
        :placeholder="'YY'"
        :is-error="yearStore.status.kind === 'error'"
        :length="'short'"
        @input="onYearInput"
        ></FieldInput>
    </div>
  </FieldBox>
</template>