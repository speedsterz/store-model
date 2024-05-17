"use client";
import { Button } from "@mui/material";
import React from "react";
import { useProductStore } from "../store/store";
import { item } from "./page";
import { useSession } from "next-auth/react";

const Add = ({ item }: { item: item }) => {
  const { status } = useSession();
  const addProduct = useProductStore((state) => state.add);
  return (
    <Button
      variant="contained"
      className="text-lg f-vazir bg-red-400 hover:bg-red-500 self-end"
      onClick={() => {
        addProduct({
          id: item.id,
          count: 1,
          title: item.title,
          image: item.image,
          price: item.price,
        });
      }}
      disabled={status !== "authenticated"}
    >
      خرید کالا
    </Button>
  );
};

export default Add;
