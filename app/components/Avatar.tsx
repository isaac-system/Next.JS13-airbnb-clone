"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
  fill?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, fill }) => {
  return (
    <>
      {fill ? (
        <Image
          alt="Avatar"
          src={src || "/images/userPlaceholder.png"}
          fill={fill}
          className={`
            rounded-full
            ${fill ? "object-cover" : ""}
          `}
        />
      ) : (
        <Image
          alt="Avatar"
          src={src || "/images/userPlaceholder.png"}
          className={`
            rounded-full
          `}
          width={30}
          height={30}
        />
      )}
    </>
  );
};

export default Avatar;
