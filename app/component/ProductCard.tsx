"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { useProductStore, Product } from "../store/store";
import { useSession } from "next-auth/react";

interface probs {
  title: string;
  price: number;
  img: string;
  id: number;
}
const ProductCard = ({ title, price, img, id }: probs) => {
  const { status } = useSession();
  const addProduct = useProductStore((state) => state.add);
  return (
    <div className="bg-white cursor-pointer drop-shadow-md hover:shadow-lg p-6 rounded-xl flex flex-col gap-3  justify-between items-center">
      <Image
        src={img}
        width={250}
        height={250}
        className="w-28 h-28"
        alt="product image"
      />
      <h1 dir="ltr">{title}</h1>
      <h3 className="font-bold">{price}$</h3>

      <div className="flex gap-1">
        <Link href={`/${id}`}>
          <Button
            variant="contained"
            className="text-lg md:text-sm 2xl:text-lg f-vazir"
          >
            مشاهده کالا
          </Button>
        </Link>
        <Button
          variant="contained"
          className="text-lg md:text-sm 2xl:text-lg bg-amber-500 hover:bg-amber-600"
          onClick={() => {
            addProduct({
              id: id,
              count: 1,
              title: title,
              image: img,
              price: price,
            });
          }}
          disabled={status !== "authenticated"}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
