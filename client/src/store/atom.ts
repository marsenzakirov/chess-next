import { atom } from "recoil";

export const boardStore = atom({
  key: "boardStore",
  default: [...Array(64)],
});

export const moveFigureStore = atom({
  key: "chooseFigure",
  default: -1,
});
