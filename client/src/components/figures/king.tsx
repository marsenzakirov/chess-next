import Image from "next/image";
const King = ({ isWhiteFigure }: { isWhiteFigure: boolean }) => {
  return (
    <>
      {isWhiteFigure ? (
        <Image src="/icons/king_white.svg" alt="" width={55} height={55} />
      ) : (
        <Image src="/icons/king_black.svg" alt="" width={55} height={55} />
      )}
    </>
  );
};

export default King;
