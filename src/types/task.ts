
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskFormEmits {
  (e: 'add-task', task: Omit<Task, 'id'>): void;
}

export interface TaskListEmits {
  (e: 'toggle-complete', id: number): void;
  (e: 'delete-task', id: number): void;
  (e: 'update-task', task: Task): void;
}

export interface TaskListProps {
  tasks: Task[];
}