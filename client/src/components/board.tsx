import type { NextComponentType } from "next";
import { useState } from "react";
import Cell from "./cell";
const Board: NextComponentType = () => {
  const [figures, setFigures] = useState([...Array(64)]);
  console.log();
  return (
    <div className="w-[calc(64px*8)] h-[calc(64px*8)] flex flex-wrap">
      {figures.map((item, index) => {
        if (digit(parseInt(index.toString(8))) % 2 == 0) {
          return <Cell isWhite={true} />;
        } else {
          return <Cell isWhite={false} />;
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
