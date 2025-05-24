import { create } from 'zustand';

export const appContentStore = create(() => ({
  appContent: {
    heading: "Let's get some shit done.",
    subHeading: `So this is what we gotta get done today`,
    inputPlaceholder: "Ok. What do we need to do?",
    completedTasks: "And this is what's already been done. Good job!",
    listPlaceholder: "We got nothing so far. Let's get productive!",
  }

}));