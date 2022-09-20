import { promt } from "../types/types";
import { boardStore } from "../store/atom";
import { useRecoilState } from "recoil";
import { coordinatesOnIndex } from "../utils/math";
export function pawnPromt(
  x: number,
  y: number,
  board: any[],
  isWhite: boolean
): number[] {
  if (isWhite == false) {
    board[coordinatesOnIndex(x, y + 1)] = "promt";
  } else {
    board[coordinatesOnIndex(x, y - 1)] = "promt";
  }
  return board;
}
export const powsEat = (x: number, y: number) => {};
