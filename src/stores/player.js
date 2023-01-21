import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    currentSong: {},
  }),
  actions: {
    async newSong(song) {
      this.currentSong = song;
    },
  },
});
