import React from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import Image from "next/image";
import Add from "./Add";

export interface item {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

const page = async ({ params }: { params: { id: string } }) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const item: item = response.data;

  if (!item)
    return (
      <>
        <Navbar />
        <main className="flex justify-center">
          <div className="py-8 text-3xl text-rose-600">
            چنین محصولی وجود ندارد!
          </div>
        </main>
      </>
    );

  return (
    <>
      <Navbar />
      <main className="my-4">
        <div className="w-10/12 md:w-8/12 mx-auto items-center gap-8 flex flex-col md:flex-row p-8 bg-white mt-8 rounded-2xl">
          <Image
            src={item.image}
            alt="item image"
            width={300}
            height={300}
            className="flex-1 max-h-[500px]  "
          />
          <div dir="ltr" className="flex-1 flex flex-col justify-center gap-2">
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="font-light text-gray-500">{item.description}</p>
            <h3 className="text-rose-600 font-bold">{item.price}$</h3>
            <Add item={item} />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
