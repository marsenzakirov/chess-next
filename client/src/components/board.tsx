import type { NextComponentType } from "next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Cell from "./cell";
import { boardStore } from "../store/atom";
const Board: NextComponentType = () => {
  const [board, setBoard] = useRecoilState(boardStore);

  const initialBoard = () => {
    let myArr = [...Array(64)];
    myArr[0] = myArr[7] = "RB";
    myArr[1] = myArr[6] = "KnB";
    myArr[2] = myArr[5] = "BB";
    myArr[3] = "QB";
    myArr[4] = "KiB";

    myArr[63] = myArr[56] = "RW";
    myArr[63 - 1] = myArr[56 + 1] = "KnW";
    myArr[63 - 2] = myArr[56 + 2] = "BW";
    myArr[63 - 3] = "QW";
    myArr[56 + 3] = "KiW";
    for (let i = 0; i < 8; i++) {
      myArr[8 + i] = "PB";
      myArr[55 - i] = "PW";
    }
    return myArr;
  };
  useEffect(() => {
    setBoard(initialBoard());
  }, []);
  return (
    <div className="w-[calc(64px*8)] h-[calc(64px*8)] flex flex-wrap">
      {board.map((item, index) => {
        if (digit(parseInt(index.toString(8))) % 2 == 0) {
          return (
            <Cell isWhite={true} key={index} figure={item} index={index} />
          );
        } else {
          return (
            <Cell isWhite={false} key={index} figure={item} index={index} />
          );
        }
      })}
    </div>
  );
};

function digit(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
export default Board;
