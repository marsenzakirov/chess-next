import Image from "next/image";
const Pawn = ({ isWhiteFigure }: { isWhiteFigure: boolean }) => {
  return (
    <>
      {isWhiteFigure ? (
        <Image src="/icons/pawn_white.svg" alt="" width={55} height={55} />
      ) : (
        <Image src="/icons/pawn_black.svg" alt="" width={55} height={55} />
      )}
    </>
  );
};

export default Pawn;
