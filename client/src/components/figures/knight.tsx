import Image from "next/image";
const Knight = ({ isWhiteFigure }: { isWhiteFigure: boolean }) => {
  return (
    <>
      {isWhiteFigure ? (
        <Image src="/icons/knight_white.svg" alt="" width={55} height={55} />
      ) : (
        <Image src="/icons/knight_black.svg" alt="" width={55} height={55} />
      )}
    </>
  );
};

export default Knight;
