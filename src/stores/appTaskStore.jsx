import { create } from 'zustand';

export const appTaskStore = create((set) => ({
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
  //uncomplete a task
  uncompleteTasks: () => set((state) => ({
    list: state.list.map((task) =>
      task.selected ? { ...task, completed: false, selected: false } : task
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
  clearAll: () => set({ list: [] }),
  completeTaskById: (id) => set((state) => ({
    list: state.list.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    ),
  })),
  uncompleteTaskById: (id) => set((state) => ({
    list: state.list.map((task) =>
      task.id === id ? { ...task, completed: false } : task
    ),
  })),
  deleteTaskById: (id) => set((state) => ({
    list: state.list.filter((task) => task.id !== id),
  })),

}));