import { defineStore } from "pinia";
interface User {
  email: string;
  name: string;
  id: string;
  status: boolean;
}

const userState: { user: User } = {
  user: {
    email: "",
    name: "",
    id: "",
    status: false,
  },
};

export const useAuthStore = defineStore("auth", {
  state: () => userState,
  getters: {
    currentUser: (state) => state.user,
  },
  actions: {
    set(user: User) {
      this.$patch({ user });
    },
    clear() {
      this.$patch(userState);
    },
  },
});
