import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const appTaskStore = create(
  persist(
    (set) => ({
      list: [],
      addTask: (task) => set((state) => ({
        list: [
          ...state.list,
          { id: state.list.length + 1, task, completed: false }
        ],
      })),
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
      clearAll: () => set({ list: [] }),
      clearCompleted: () => set((state) => ({
        list: state.list.filter((task) => !task.completed),
      })),
      moveTaskUp: (id) => set((state) => {
        const idx = state.list.findIndex(task => task.id === id);
        if (idx > 0) {
          const newList = [...state.list];
          [newList[idx - 1], newList[idx]] = [newList[idx], newList[idx - 1]];
          return { list: newList };
        }
        return {};
      }),
      moveTaskDown: (id) => set((state) => {
        const idx = state.list.findIndex(task => task.id === id);
        if (idx < state.list.length - 1 && idx !== -1) {
          const newList = [...state.list];
          [newList[idx], newList[idx + 1]] = [newList[idx + 1], newList[idx]];
          return { list: newList };
        }
        return {};
      }),
    }),
    {
      name: "to-do tasks",
    }
  )
);