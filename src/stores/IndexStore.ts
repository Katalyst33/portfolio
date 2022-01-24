import { defineStore } from "pinia";

export const appMenuStore = defineStore({
  id: "appMenu",
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
