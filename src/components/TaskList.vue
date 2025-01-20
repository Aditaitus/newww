
<script setup lang="ts">
import { ref } from 'vue';
import  BaseButton  from './BaseButton.vue';
import type { Task, TaskListEmits, TaskListProps } from '../types/task';

const props = defineProps<TaskListProps>();
const emit = defineEmits<TaskListEmits>();

const editingTask = ref<Task | null>(null);

const toggleTaskCompletion = (taskId: number) => {
  emit('toggle-complete', taskId);
};

const deleteTask = (id: number) => {
  emit('delete-task', id);
};

const startEditing = (task: Task) => {
  editingTask.value = { ...task };
};

const saveEdit = () => {
  if (editingTask.value) {
    emit('update-task', editingTask.value);
    editingTask.value = null;
  }
};

const cancelEdit = () => {
  editingTask.value = null;
};
</script>

<template>
  <div class="task-list">
    <transition-group name="task" tag="ul" class="task-transition-group">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <label class="task-label">
          <input 
            type="checkbox" 
            :checked="task.completed" 
            @change="toggleTaskCompletion(task.id)" 
            class="task-checkbox"
          />
          <span :class="{ completed: task.completed }" class="task-title">
            {{ task.title }}
          </span>
        </label>
        <div class="task-actions">
          <BaseButton 
            label="Edit"
            type="primary"
            size="small"
            @click="startEditing(task)"
          />
          <BaseButton 
            label="Delete"
            type="danger"
            size="small"
            @click="deleteTask(task.id)"
          />
        </div>
      </li>
    </transition-group>

    <div v-if="editingTask" class="edit-form">
      <input 
        v-model="editingTask.title" 
        class="edit-input" 
        placeholder="Edit task title"
      />
      <div class="edit-actions">
        <BaseButton 
          label="Save"
          type="success"
          size="small"
          @click="saveEdit"
        />
        <BaseButton 
          label="Cancel"
          type="danger"
          size="small"
          @click="cancelEdit"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>