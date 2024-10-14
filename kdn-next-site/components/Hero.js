import Image from "next/image";
import React from "react";

const Hero = ({ tvseries }) => {
  return (
    <div className="mb-10 -mx-5 lg:-mx-[60px] gradient">
      <Image
        className="w-full -mt-[7rem] absolute h-[710px]  object-cover object-top  bg-gradient-to-b opacity-[0.8]"
        width={1000}
        height={1000}
        alt="img"
        src={tvseries ? "/assets/kdnhero2.jpg" : "/assets/03.jpg"}
      />
      <div className=" pt-[18rem] px-5 lg:px-10 relative bg-black/30 h-[600px] ">
        <Image
          className="font-bold h-[80px] object-cover -ml-5 w-[300px]"
          width={1000}
          height={1000}
          alt="img"
          src="/assets/rof.png"
        />
        <p className="lg:w-[60%] my-5">
          There are so many styles you can combine that is possible to create
          almost any kind of layout based on Porto Template, navigate in our
          preview and see the header variations, the colors, and the page
          content types that you will be able to use.
        </p>
        <div className="flex items-center gap-5 mb-10">
          <button className="bg-primary rounded-xl p-3 ">Watch Now</button>
          <p className="rounded-full border-white border-[1px] px-3 py-1 text-lg">
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
