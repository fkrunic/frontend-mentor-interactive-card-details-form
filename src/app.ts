import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import validator from 'validator'

export type Status
  = { kind: 'unchecked' }
  | { kind: 'ok' }
  | { kind: 'error', message: string }

type Validator = (input: string) => Status

const nonEmpty = (input: string): Status => {
  const message = "Can't be empty"
  return input !== '' ? { kind: 'ok' } : { kind: 'error', message }
}

const lettersOnly = (input: string): Status => {
  const message = 'Must contain letters only'
  const noSpaces = input.replace(/\s+/g, '')
  return validator.isAlpha(noSpaces) ? { kind: 'ok' } : { kind: 'error', message }
}

const isCreditCard = (input: string): Status => {
  const message = 'Invalid card number'
  return validator.isCreditCard(input) ? { kind: 'ok' } : { kind: 'error', message }
}

const isExpirationMonth = (input: string): Status => {
  const options = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
  ]
  const message = 'Invalid expiration month'
  return validator.isIn(input, options) ? { kind: 'ok' } : { kind: 'error', message }
}

const isExpirationYear = (input: string): Status => {
  const options = ['23', '24', '25', '26', '27']
  const message = 'Invalid expiration year'
  return validator.isIn(input, options) ? { kind: 'ok' } : { kind: 'error', message }
}

const isCVC = (input: string): Status => {
  const num = Number(input)
  const validCVC = Number.isInteger(num) && (1 <= num) && (num <= 999)
  const message = 'Invalid CVC'
  return validCVC ? { kind: 'ok' } : { kind: 'error', message }
}

const firstError = (input: string) => (status: Status, validator: Validator): Status => {
  return status.kind === 'error' ? status : validator(input)
}

export const formatCardNumber = (cn: string): string => {
  const noSpaces = cn.replace(/\s+/g, '')
  let formated = ''

  for (let i = 0; i < noSpaces.length; i++) {
    if (i > 0 && i % 4 == 0) {
      formated += ' '
    }
    formated += noSpaces.charAt(i)
  }

  return formated.trim()
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

export const useNameStore = buildInputStore('name', [nonEmpty, lettersOnly])
export const useNumberStore = buildInputStore('number', [nonEmpty, isCreditCard])
export const useExpirationMonthStore = buildInputStore('expirationMonth', [nonEmpty, isExpirationMonth])
export const useExpirationYearStore = buildInputStore('expirationYear', [nonEmpty, isExpirationYear])
export const useCVCStore = buildInputStore('cvc', [nonEmpty, isCVC])

export const useAppStore = defineStore('app', () => {
  const nameStore = useNameStore()
  const numberStore = useNumberStore()
  const monthStore = useExpirationMonthStore()
  const yearStore = useExpirationYearStore()
  const cvcStore = useCVCStore()

  const isFormValid = computed(() => {
    return nameStore.status.kind === 'ok' &&
      numberStore.status.kind === 'ok' &&
      monthStore.status.kind === 'ok' &&
      yearStore.status.kind === 'ok' &&
      cvcStore.status.kind === 'ok'
  })

  return { isFormValid }
})