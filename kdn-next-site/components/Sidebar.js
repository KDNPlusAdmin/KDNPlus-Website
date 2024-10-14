import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[150px] left-5  h-screen fixed">
      {/* logo */}
      {/* <h1 className="text-red-500 py-3 ">KDNPLUS</h1> */}
      <Image
        className=" h-[20px] mt-3 mb-5 object-cover  "
        width={100}
        height={100}
        alt="img"
        src="/assets/logo.png"
      />
      <div className="mt-6">
        <Image
          className=" w-[100px] h-[50px]   object-cover  "
          width={100}
          height={100}
          alt="img"
          src="/assets/home.png"
        />

        <div className=" h-[30px]rounded-xl my-3">
          <Image
            className=" w-[100px] h-[50px] my-3  object-cover  "
            width={100}
            height={100}
            alt="img"
            src="/assets/newarrival.png"
          />
          {/* <p classNam="text-xs">New Arrivals</p> */}
        </div>

        <div className=" h-[30px]  rounded-xl">
          <Image
            className=" w-[100px] h-[50px]   object-cover  "
            width={100}
            height={100}
            alt="img"
            src="/assets/jfy.png"
          />
          {/* <p>Just for you</p> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
