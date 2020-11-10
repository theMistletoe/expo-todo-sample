import { TaskItem } from '../../types/TaskItem';

const INITIAL_STATE: TaskItem[] = [
  {id: "xxx", title: 'Task1', description: "description1"},
  {id: "yyy",title: 'Task2', description: "description2"},
  {id: "zzz",title: 'Task3', description: "description3"},
]
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask: TaskItem = {
        id: Math.random().toString(32).substring(2),
        title: action.title,
        description: ""
      };
      return [...state, newTask];
    case 'DELETE_TASK':
      const newTasks: TaskItem[] = state.filter((todo: TaskItem) => todo.id !== action.id);
      return newTasks
    case 'UPDATE_TASK':
      const updatedTasks: TaskItem[] = state.slice();
      updatedTasks.find((task: TaskItem) => task.id === action.task.id)!.title = action.task.title;
      updatedTasks.find((task: TaskItem) => task.id === action.task.id)!.description = action.task.description;
      return updatedTasks
    default:
      return state;
  }
}

export default reducer;