<script setup lang="ts">
import FieldTitle from './FieldTitle.vue';
import FieldError from './FieldError.vue';
import { Status } from '../app';
defineProps<{ title: string, status: Status }>()
</script>

<template>
  <div class="flex flex-col gap-[9px]">
    <FieldTitle :title="title"></FieldTitle>
    <slot></slot>
    <FieldError v-if="status.kind === 'error'" :message="status.message"></FieldError>
  </div>  
</template>