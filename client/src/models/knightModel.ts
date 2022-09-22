import { promt } from "../types/types";
import { boardStore } from "../store/atom";
import { useRecoilState } from "recoil";
import { coordinatesOnIndex } from "../utils/math";
import { isWhiteOnCell } from "../utils/chess";
export function knightPromt(
  x: number,
  y: number,
  board: any[],
  isWhite: boolean
): number[] {
  let moove = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  for (let i = 0; i < moove.length; i++) {
    if (
      (isWhiteOnCell(
        coordinatesOnIndex(x + moove[i][0], y + moove[i][1]),
        board
      ) == true ||
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] ==
          undefined) &&
      board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] != -1 &&
      !isWhite
    ) {
      if (
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] == undefined
      ) {
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] = "promt";
      } else {
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] += " promt";
      }
    } else if (
      (!isWhiteOnCell(
        coordinatesOnIndex(x + moove[i][0], y + moove[i][1]),
        board
      ) == true ||
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] ==
          undefined) &&
      board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] != -1 &&
      isWhite
    ) {
      if (
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] == undefined
      ) {
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] = "promt";
      } else {
        board[coordinatesOnIndex(x + moove[i][0], y + moove[i][1])] += " promt";
      }
    }
  }

  return board;
}
export const kngihtEat = (x: number, y: number) => {};
