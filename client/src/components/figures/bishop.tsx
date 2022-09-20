import Image from "next/image";
const Bishop = ({ isWhiteFigure }: { isWhiteFigure: boolean }) => {
  return (
    <>
      {isWhiteFigure ? (
        <Image src="/icons/bishop_white.svg" alt="" width={55} height={55} />
      ) : (
        <Image src="/icons/bishop_black.svg" alt="" width={55} height={55} />
      )}
    </>
  );
};

export default Bishop;
