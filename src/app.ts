import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Status
  = { kind: 'unchecked' }
  | { kind: 'ok' }
  | { kind: 'error', message: string }

type Validator = (input: string) => Status

const nonEmpty = (input: string): Status => {
  const message = "Can't be empty"
  return input !== '' ? { kind: 'ok' } : { kind: 'error', message }
}

const firstError = (input: string) => (status: Status, validator: Validator): Status => {
  return status.kind === 'error' ? status : validator(input)
}

export const buildInputStore = (name: string, validators: Array<Validator>) => {
  return defineStore(name, () => {
    const input = ref('')
    const status = ref({ kind: 'unchecked' } as Status)
    const updateStatus = () => {
      const newStatus = validators.reduce(firstError(input.value), { kind: 'ok' })
      status.value = newStatus
    }
    const updateInput = (newInput: string): void => { input.value = newInput }
    return { input, status, updateInput, updateStatus }
  })
}

export const useNameStore = buildInputStore('name', [nonEmpty])
export const useNumberStore = buildInputStore('number', [nonEmpty])