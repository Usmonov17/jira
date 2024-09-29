export const useLoading = defineStore("loading", {
  state: () => ({
    isLoading: true,
  }),
  actions: {
    set(isLoading: boolean) {
      this.$patch({ isLoading });
    },
  },
});
