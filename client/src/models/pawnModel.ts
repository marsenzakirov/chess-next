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
  console.log(isWhite);
  if (isWhite == false && board[coordinatesOnIndex(x, y + 1)] == undefined) {
    board[coordinatesOnIndex(x, y + 1)] = "promt";
    if (y == 1) {
      board[coordinatesOnIndex(x, y + 2)] = "promt";
    }
    if (
      board[coordinatesOnIndex(x + 1, y + 1)] != undefined ||
      board[coordinatesOnIndex(x - 1, y + 1)] != undefined
    ) {
      
    }
  }
  if (isWhite && board[coordinatesOnIndex(x, y - 1)] == undefined) {
    board[coordinatesOnIndex(x, y - 1)] = "promt";
    if (y == 6) {
      board[coordinatesOnIndex(x, y - 2)] = "promt";
    }
  }

  return board;
}
export const powsEat = (x: number, y: number) => {};
