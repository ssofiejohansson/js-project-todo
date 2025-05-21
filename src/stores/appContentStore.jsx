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
    list: [...state.list, { id: state.list.length + 1, task, completed: false }],
  })),
  deleteTasks: () => set((state) => ({
    list: state.list.filter((task) => !task.completed),
  })),
  toggleTask: (id) => set((state) => ({
    list: state.list.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
  })),
  completeTasks: () => set((state) => ({
    list: state.list.filter((task) => !task.completed),
  })),
  clearAll: () => set(() => ({
    list: [],
  })),
}))