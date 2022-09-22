import Pawn from "./figures/pawn";
import Knight from "./figures/knight";
import King from "./figures/king";
import Bishop from "./figures/bishop";
import Rook from "./figures/rook";
import Queen from "./figures/queen";
import Promt from "./figures/promt";
import { boardStore, moveFigureStore } from "../store/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { promt } from "../types/types";
import { pawnPromt } from "../models/pawnModel";
import { knightPromt } from "../models/knightModel";
import { move } from "../utils/chess";

const Cell = ({
  isWhite,
  figure,
  index,
}: {
  isWhite: boolean;
  figure: string;
  index: number;
}) => {
  const [board, setBoard] = useRecoilState(boardStore);
  const [moveFigure, setMoveFigure] = useRecoilState(moveFigureStore);

  function renderFigure() {
    if (typeof figure == "undefined") return;
    if (figure.slice(0, 2) == "BB") {
      return <Bishop isWhiteFigure={false} />;
    }
    if (figure.slice(0, 3) == "KnB") {
      return <Knight isWhiteFigure={false} />;
    }
    if (figure.slice(0, 2) == "PB") {
      return <Pawn isWhiteFigure={false} />;
    }
    if (figure.slice(0, 2) == "RB") {
      return <Rook isWhiteFigure={false} />;
    }
    if (figure.slice(0, 2) == "QB") {
      return <Queen isWhiteFigure={false} />;
    }
    if (figure.slice(0, 3) == "KiB") {
      return <King isWhiteFigure={false} />;
    }
    if (figure.slice(0, 2) == "BW") {
      return <Bishop isWhiteFigure={true} />;
    }
    if (figure.slice(0, 3) == "KnW") {
      return <Knight isWhiteFigure={true} />;
    }
    if (figure.slice(0, 2) == "PW") {
      return <Pawn isWhiteFigure={true} />;
    }
    if (figure.slice(0, 2) == "RW") {
      return <Rook isWhiteFigure={true} />;
    }
    if (figure.slice(0, 2) == "QW") {
      return <Queen isWhiteFigure={true} />;
    }
    if (figure.slice(0, 3) == "KiW") {
      return <King isWhiteFigure={true} />;
    }
  }

  const showPromt = (figure: string) => {
    console.log(board);
    const x = index % 8;
    const y = Math.floor(index / 8);
    let array = [...board].map((figure: undefined | string) => {
      if (
        typeof figure == "string" &&
        figure.includes("promt") &&
        figure.length > 5
      )
        return figure.replace(" promt", "");
      if (
        typeof figure == "string" &&
        figure.includes("promt") &&
        figure.length <= 5
      )
        return undefined;
      return figure;
    });
    if (figure == undefined) return setBoard(array);

    // can moove
    if (typeof figure != "undefined" && figure.includes("promt")) {
      if (moveFigure != -1) {
        setBoard(move(moveFigure, index, array));
      } else {
        setMoveFigure(-1);
      }
    }
    if (figure.slice(0, 2) == "BB") {
      return <Bishop isWhiteFigure={false} />;
    }
    if (figure.slice(0, 3) == "KnB") {
      setMoveFigure(index);
      return setBoard(knightPromt(x, y, array, false));
    }
    if (figure.slice(0, 2) == "PB") {
      setMoveFigure(index);
      return setBoard(pawnPromt(x, y, array, false));
    }
    if (figure.slice(0, 2) == "RB") {
      return <Rook isWhiteFigure={false} />;
    }
    if (figure.slice(0, 2) == "QB") {
      return <Queen isWhiteFigure={false} />;
    }
    if (figure.slice(0, 3) == "KiB") {
      return <King isWhiteFigure={false} />;
    }
    if (figure.slice(0, 2) == "BW") {
      return <Bishop isWhiteFigure={true} />;
    }
    if (figure.slice(0, 3) == "KnW") {
      setMoveFigure(index);
      return setBoard(knightPromt(x, y, array, true));
    }
    if (figure.slice(0, 2) == "PW") {
      setMoveFigure(index);
      return setBoard(pawnPromt(x, y, array, true));
    }
    if (figure.slice(0, 2) == "RW") {
      return <Rook isWhiteFigure={true} />;
    }
    if (figure.slice(0, 2) == "QW") {
      return <Queen isWhiteFigure={true} />;
    }
    if (figure.slice(0, 3) == "KiW") {
      return <King isWhiteFigure={true} />;
    }
  };
  return (
    <button
      className="w-[64px] h-[64px] flex justify-center items-center relative"
      style={{
        backgroundColor: isWhite == true ? "#f0d9b5" : "#b58863",
        cursor: figure == undefined ? "default" : "pointer",
      }}
      onClick={() => {
        showPromt(figure);
      }}
    >
      {renderFigure()}
      {typeof board[index] != "undefined" && board[index].includes("promt") && (
        <Promt />
      )}
    </button>
  );
};

export default Cell;
