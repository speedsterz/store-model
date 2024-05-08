"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.svg";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import { useProductStore } from "../store/store";

const Navbar = () => {
  const [totalCount, setTotalCount] = useState(
    useProductStore.getState().getTotalCount()
  );

  useEffect(() => {
    const unsubscribe = useProductStore.subscribe((newState) =>
      setTotalCount(newState.getTotalCount())
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <nav className="px-12 py-4 bg-slate-700 text-white">
      <ul className="flex gap-12">
        <li>
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-16 sm:w-20 h-auto"
          />
        </li>
        <li className="hover:text-red-200">
          <Link href="/">خانه</Link>
        </li>
        <li className="hover:text-red-200">
          <Link href="/">ارتباط با ما</Link>
        </li>
        <li className="cursor-pointer hover:text-red-200">
          <Link href="/shop-list" className="flex gap-1">
            <ShoppingCartCheckoutTwoToneIcon />

            {totalCount != 0 && (
              <div className="rounded-full bg-red-100 w-5 h-5 flex justify-center">
                <h6 className="text-red-500 ">{totalCount}</h6>
              </div>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
