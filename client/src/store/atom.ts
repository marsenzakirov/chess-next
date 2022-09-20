import { atom } from "recoil";

export const boardStore = atom({
  key: "boardStore",
  default: [...Array(64)],
});
