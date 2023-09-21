import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Status
  = { kind: 'unchecked' }
  | { kind: 'ok' }
  | { kind: 'error', message: string }

type Validator = (input: string) => Status

const nonEmpty = (input: string): Status => {
  return input !== '' ? { kind: 'ok' } : { kind: 'error', message: 'Cannot be empty' }
}

export const buildInputStore = (name: string, validators: Array<Validator>) => {
  return defineStore(name, () => {
    const input = ref('')
    const status = ref({ kind: 'unchecked' } as Status)
    const updateStatus = () => {

      // Return first validation error that occurs.
      for (let validate of validators) {
        const check = validate(input.value)
        if (check.kind === 'error') {
          return check
        }
      }

      // If no validation error occurs, return OK. 
      return { kind: 'ok' }
    }
    const updateInput = (newInput: string): void => { input.value = newInput }
    return { input, status, updateInput, updateStatus }
  })
}

export const useNameStore = buildInputStore('name', [nonEmpty])
export const useNumberStore = buildInputStore('number', [nonEmpty])