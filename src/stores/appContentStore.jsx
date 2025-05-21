import { create } from 'zustand';

export const appContentStore = create((set) => ({
  appContent: {
    heading: "Let's add a task",
    subHeading: "This is my TO-DO list",
    inputPlaceholder: "add your task here",
    buttonText: "Add task",
  },
  list: [],
  addTask: (task) => set((state) => ({
    list: [
      ...state.list,
      { id: state.list.length + 1, task, completed: false, selected: false }
    ],
  })),
  toggleSelect: (id) => set((state) => ({
    list: state.list.map((task) =>
      task.id === id ? { ...task, selected: !task.selected } : task
    ),
  })),
  completeTasks: () => set((state) => ({
    list: state.list.map((task) =>
      task.selected ? { ...task, completed: true, selected: false } : task
    ),
  })),
  // Delete all selected tasks
  deleteTasks: () => set((state) => ({
    list: state.list.filter((task) => !task.selected),
  })),
  // Clear all active tasks
  clearActive: () => set((state) => ({
    list: state.list.filter((task) => task.completed),
  })),
  // Clear all completed tasks
  clearCompleted: () => set((state) => ({
    list: state.list.filter((task) => !task.completed),
  })),
}));