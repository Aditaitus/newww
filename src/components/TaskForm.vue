
<script setup lang="ts">
import { ref } from 'vue';
import  BaseButton  from './BaseButton.vue';
import type { TaskFormEmits } from '../types/task';

const emit = defineEmits<TaskFormEmits>();
const title = ref('');

const handleSubmit = () => {
  if (title.value.trim()) {
    emit('add-task', {
      title: title.value,
      completed: false
    });
    title.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input 
      v-model="title" 
      type="text" 
      placeholder="Add a new task" 
      required 
      class="task-input"
    />
    <BaseButton 
      label="Add Task"
      type="primary"
      size="medium"
      :disabled="!title.trim()"
    />
  </form>
</template>

<style scoped>
.task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.task-input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>