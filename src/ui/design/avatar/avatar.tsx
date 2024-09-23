import clsx from "clsx";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}


export const Avatar = ({ size = "medium", src, alt }: Props) => {
  let sizeStyles: string;

  switch (size) {
    case "small":
      sizeStyles = "w-[24px] h-[24px]";
      break;
    case "medium":
      sizeStyles = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyles = "w-[50px] h-[50px]";
      break;
  }
  return (
    <div className={clsx("bg-gray-400 rounded-full relative", sizeStyles)}>
      <Image src={src} alt={alt} fill className="object-cover object-center rounded-full" />
    </div>
  );
};
