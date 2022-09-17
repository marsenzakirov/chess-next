import Pawn from "./figures/pawn";
import Knight from "./figures/knight";

const Cell = ({ isWhite }: { isWhite: boolean }) => {
  return (
    <div
      className="w-[64px] h-[64px] flex justify-center items-center"
      style={{ backgroundColor: isWhite == true ? "#f0d9b5" : "#b58863" }}
    >
      <Knight isWhiteFigure={false} />
    </div>
  );
};

export default Cell;
