import Image from "next/image";
const Queen = ({ isWhiteFigure }: { isWhiteFigure: boolean }) => {
  return (
    <>
      {isWhiteFigure ? (
        <Image src="/icons/queen_white.svg" alt="" width={55} height={55} />
      ) : (
        <Image src="/icons/queen_black.svg" alt="" width={55} height={55} />
      )}
    </>
  );
};

export default Queen;
