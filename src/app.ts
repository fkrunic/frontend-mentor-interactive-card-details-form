import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type Status
  = { kind: 'ok' }
  | { kind: 'error', message: string }

const statusOK = { kind: 'ok' } as Status
const statusError = (message: string) => {
  return { kind: 'error', message } as Status
}

export const useNameStore = defineStore('name', () => {
  const input = ref('')
  const status = computed(() => {
    return input.value !== '' ? statusOK : statusError('Cannot be empty')
  })
  const update = (newInput: string): void => { input.value = newInput }
  return { input, status, update }
})

