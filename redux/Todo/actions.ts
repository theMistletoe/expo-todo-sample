import { TaskItem } from '../../types/TaskItem';

export const ADD_TASK = "ADD_TASK";
export const ADD_TASK_FROM_API = "ADD_TASK_FROM_API";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const updateTask = (task: TaskItem) => ({
  type: 'UPDATE_TASK',
  task
});

export const deleteTask = (id: string) => ({
  type: 'DELETE_TASK',
  id
});

export const addTask = (title:string) => ({
  type: 'ADD_TASK',
  title: title,
});

export const addTaskFromAPI = () => ({
  type: 'ADD_TASK_FROM_API'
});