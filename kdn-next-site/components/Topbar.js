import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
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
        <p>All</p>
        <Link href="/tv-series">Tv series</Link>
        <p>My trial</p>
        <p>Upcoming</p>
      </div>

      {/* profile */}
      <div className="lg:flex items-center gap-5 hidden">
        {/* search */}
        <div className="border-[1px] border-gray-200 py-2 rounded-full">
          <input placeholder="search" className="bg-transparent px-5" />
        </div>

        {/* profile */}
        <div className="flex gap-3 items-center">
          <p>oo</p>
          <Image
            className=" w-[40px] h-[40px]  rounded-full object-center  "
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
