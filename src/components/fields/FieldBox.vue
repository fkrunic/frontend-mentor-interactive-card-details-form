<script setup lang="ts">
import FieldTitle from './FieldTitle.vue';
import FieldError from './FieldError.vue';
import { Status } from '@/app';

defineProps<{ title: string, status: Status }>()
</script>

<template>
  <!-- Root -->
  <div>
    <div class="relative flex flex-col gap-[9px]">
      <FieldTitle :title="title"></FieldTitle>
      <slot></slot>
      <FieldError 
        v-if="status.kind === 'error'" 
        class="absolute top-[77px]" 
        :message="status.message"></FieldError>
    </div>  
  </div>
</template>