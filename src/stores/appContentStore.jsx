import { create } from 'zustand';

export const appContentStore = create(() => ({
  appContent: {
    heading: "Let's get some shit done.",
    subHeading: `So this is what we gotta do today`,
    inputPlaceholder: "Ok. What do we need to do?",
    completedTasks: "And this is already done.",
    listPlaceholder: "We got nothing so far. Let's get productive!",
  }

}));