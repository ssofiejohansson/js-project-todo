import { create } from 'zustand';

export const appContentStore = create((set) => ({
  appContent: {
    heading: "Let's get some shit done.",
    subHeading: "Alright. So this is what we gotta do today:",
    inputPlaceholder: "Ok. What do we need to get done?",
    completedTasks: "And this is what we have already accomplished. Yay us!",
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
}));