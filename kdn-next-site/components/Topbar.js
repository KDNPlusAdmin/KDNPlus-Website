"use client";
import { topNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Topbar = () => {
  const [active, setActive] = useState("All");
  return (
    <div className="flex  lg:bg-white/20 lg:-mx-[60px] lg:px-[60px] lg:shadow-sm lg:py-[5px] items-center justify-between py-1 absolute w-full  z-50">
      {/* logo */}
      <Link href="/">
        <Image
          className="w-[100px]  lg:h-[20px] mt-3 mb-5 object-cover  "
          width={100}
          height={100}
          alt="img"
          src="/assets/logo.png"
        />
      </Link>

      {/* nav */}
      <div className="lg:flex hidden gap-5 text-lg">
        {topNav.map((item) => (
          <>
            <Link
              onClick={() => setActive(item.label)}
              className={
                active === item.label ? "border-b-primary border-b-[3px]" : ""
              }
              href={item.route}
            >
              {item.label}
            </Link>
          </>
        ))}
      </div>

      {/* profile */}
      <div className="lg:flex items-center gap-5 hidden">
        {/* search */}
        <div>
          {/* <input placeholder="search" className="bg-transparent px-5" /> */}
          <Image
            className=" w-[20px] h-[20px]  rounded-full object-center  "
            width={100}
            height={100}
            alt="img"
            src="/assets/search.png"
          />
        </div>

        {/* profile */}
        <div className="flex gap-3 items-center">
          <Image
            className=" w-[20px] h-[20px]  rounded-full object-center  "
            width={100}
            height={100}
            alt="img"
            src="/assets/not.png"
          />
          <Image
            className=" w-[30px] h-[30px]  rounded-full object-center  "
            width={100}
            height={100}
            alt="img"
            src="/assets/01.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
