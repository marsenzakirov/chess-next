import Pawn from "./figures/pawn";
import Knight from "./figures/knight";
import King from "./figures/king";
import Bishop from "./figures/bishop";
import Rook from "./figures/rook";
import Queen from "./figures/queen";
import Promt from "./figures/promt";
import { boardStore } from "../store/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { promt } from "../types/types";
import { pawnPromt } from "../models/pawnModel";

const Cell = ({
  isWhite,
  figure,
  index,
}: {
  isWhite: boolean;
  figure?: string;
  index: number;
}) => {
  const [board, setBoard] = useRecoilState(boardStore);

  function renderFigure() {
    switch (figure) {
      case "BB":
        return <Bishop isWhiteFigure={false} />;
      case "KnB":
        return <Knight isWhiteFigure={false} />;
      case "PB":
        return <Pawn isWhiteFigure={false} />;
      case "RB":
        return <Rook isWhiteFigure={false} />;
      case "QB":
        return <Queen isWhiteFigure={false} />;
      case "KiB":
        return <King isWhiteFigure={false} />;
      case "BW":
        return <Bishop isWhiteFigure={true} />;
      case "KnW":
        return <Knight isWhiteFigure={true} />;
      case "PW":
        return <Pawn isWhiteFigure={true} />;
      case "RW":
        return <Rook isWhiteFigure={true} />;
      case "QW":
        return <Queen isWhiteFigure={true} />;
      case "KiW":
        return <King isWhiteFigure={true} />;
    }
  }

  const showPromt = (figure: string) => {
    const x = index % 8;
    const y = Math.floor(index / 8);
    let array = [...board];
    switch (figure) {
      case "BB":
        return <Bishop isWhiteFigure={false} />;
      case "KnB":
        return <Knight isWhiteFigure={false} />;
      case "PB":
        setBoard(pawnPromt(x, y, array, false));
      case "RB":
        return <Rook isWhiteFigure={false} />;
      case "QB":
        return <Queen isWhiteFigure={false} />;
      case "KiB":
        return <King isWhiteFigure={false} />;
      case "BW":
        return <Bishop isWhiteFigure={true} />;
      case "KnW":
        return <Knight isWhiteFigure={true} />;
      case "PW":
        setBoard(pawnPromt(x, y, array, true));
      case "RW":
        return <Rook isWhiteFigure={true} />;
      case "QW":
        return <Queen isWhiteFigure={true} />;
      case "KiW":
        return <King isWhiteFigure={true} />;
    }
  };
  return (
    <button
      className="w-[64px] h-[64px] flex justify-center items-center"
      style={{ backgroundColor: isWhite == true ? "#f0d9b5" : "#b58863" }}
      onClick={() => {
        if (figure != undefined) {
          showPromt(figure);
        }
      }}
    >
      {renderFigure()}
      {board[index] == "promt" && <Promt />}
    </button>
  );
};

export default Cell;
