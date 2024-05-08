"use client";
import React from "react";
import Navbar from "../component/Navbar";
import { Button } from "@mui/material";
import Link from "next/link";
import { useProductStore as UseProductStore, Product } from "../store/store";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const page = () => {
  const productList = UseProductStore<Product[]>((state) => state.list) || [];
  const removeProduct = UseProductStore((state) => state.remove);
  const totalPrice = UseProductStore.getState().getTotalPrice();
  return (
    <>
      <Navbar />
      <main className="m-4">
        <div className="bg-white p-4 flex flex-col gap-6 items-start">
          <h1 className="text-2xl font-bold text-emerald-700">سبد خرید</h1>
          <ul className="flex flex-col gap-6">
            {productList.map((product) => (
              <li key={product.id} className="flex gap-4">
                <Image
                  width={150}
                  height={150}
                  className="w-28 h-28"
                  src={product.image}
                  alt="product image"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg text-red-500">{product.title}</h2>
                  <h3 className="text-lg text-red-400">
                    تعداد:{product.count}
                  </h3>
                  <h3 className="text-lg text-red-700">
                    قیمت : {product.price * product.count}
                  </h3>

                  <DeleteOutlineIcon
                    color="error"
                    className="cursor-pointer"
                    onClick={() => {
                      removeProduct(product.id);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
          {totalPrice > 0 && (
            <>
              <h3>قیمت نهایی: {totalPrice}</h3>
              <Link href="/shop-form">
                <Button
                  variant="outlined"
                  className="f-vazir text-base border-green-500 text-green-500 hover:border-green-900"
                >
                  صفحه بعدی
                </Button>
              </Link>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default page;
