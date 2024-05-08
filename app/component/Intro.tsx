import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="mt-12 flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row gap-6 ">
        <Image
          src="/images/intro1.webp"
          alt="intro image"
          width={0}
          height={0}
          className="flex-1 w-full md:w-0 rounded-2xl cursor-pointer"
          unoptimized
        />
        <Image
          src="/images/intro2.webp"
          alt="intro image"
          width={0}
          height={0}
          className="flex-1 w-full md:w-0 rounded-2xl cursor-pointer"
          unoptimized
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 ">
        <Image
          src="/images/intro3.webp"
          alt="intro image"
          width={0}
          height={0}
          unoptimized
          className="w-full md:w-0  rounded-2xl cursor-pointer flex-1"
        />
        <Image
          src="/images/intro4.webp"
          alt="intro image"
          width={0}
          height={0}
          unoptimized
          className="w-full md:w-0   rounded-2xl cursor-pointer flex-1"
        />
        <Image
          src="/images/intro5.webp"
          alt="intro image"
          width={0}
          height={0}
          unoptimized
          className="w-full md:w-0  rounded-2xl cursor-pointer flex-1"
        />
      </div>
    </div>
  );
};

export default Intro;
