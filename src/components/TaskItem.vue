<template>
  <li>
    <input type="checkbox" v-model="task.completed" @change="onToggle" />
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
    <button @click="onEdit">Edit</button>
    <button @click="onDelete">Delete</button>
  </li>
</template>

<script>
import { toRefs } from 'vue';

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { task } = toRefs(props);

    const onToggle = () => {
      emit('toggle-completed', task.value);
    };

    const onEdit = () => {
      emit('edit-task', task.value);
    };

    const onDelete = () => {
      emit('delete-task', task.value);
    };

    return { onToggle, onEdit, onDelete };
  },
};
</script>


<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
