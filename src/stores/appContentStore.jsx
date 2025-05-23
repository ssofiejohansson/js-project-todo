import { create } from 'zustand';

export const appContentStore = create(() => ({
  appContent: {
    heading: "Let's get some shit done.",
    subHeading: `Alright. So this is what we gotta do today:`,
    inputPlaceholder: "Ok. What do we need to get done?",
    completedTasks: "And this is what we have already accomplished. Yay us!",
    listPlaceholder: "We got nothing so far. Let's be productive!",
  }

}));