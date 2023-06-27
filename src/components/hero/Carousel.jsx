import Image from "next/image";

const Carousel = ({ src, alt }) => {
  return (
    <div>
      <Image
        className="rounded-md w-60"
        src={src}
        alt={alt}
        height={150}
        width={300}
      />
    </div>
  );
};

export default Carousel;
