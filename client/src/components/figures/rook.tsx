import Image from "next/image";
const Rook = ({ isWhiteFigure }: { isWhiteFigure: boolean }) => {
  return (
    <>
      {isWhiteFigure ? (
        <Image src="/icons/rook_white.svg" alt="" width={55} height={55} />
      ) : (
        <Image src="/icons/rook_black.svg" alt="" width={55} height={55} />
      )}
    </>
  );
};

export default Rook;
