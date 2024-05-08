"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const imageStore = [
    "/images/1076-1800x300.jpg",
    "/images/969-900x500.jpg",
    "/images/547-900x500.jpg",
    "/images/916-900x500.jpg",
    "/images/602-900x500.jpg",
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [index]);

  const nextSlide = () => {
    let pindex = index === imageStore.length - 1 ? 0 : index + 1;
    setIndex(pindex);
  };

  return (
    <div className="shadow-2xl">
      <Image
        className="rounded-lg h-72 w-screen"
        src={imageStore[index]}
        alt="slider image"
        width={0}
        height={0}
        sizes="100vw"
      />
    </div>
  );
};

export default Slider;
