import Image from "next/image";
import React from "react";

const ListsCard = ({ text, list, continueWatching, tvseries, upcoming }) => {
  return (
    <div className="my-[3rem] w-[98%]">
      <h1 className="font-bold text-lg">{text}</h1>
      <div className=" flex gap-5 invisible-scrollbar overflow-scroll ">
        {list.map((item) => (
          <div className=" ">
            <Image
              className={`w-[300px] ${
                upcoming && "max-w-[190px] h-[120px] object-center"
              } ${
                tvseries && "max-w-[300px] h-[350px]"
              } bg-red-300 h-[200px]  object-center object-cover mt-5  rounded-2xl`}
              width={1000}
              height={1000}
              alt="img"
              src={item.image}
            />
            {continueWatching && (
              <>
                {" "}
                <p className="font-bold text-lg capitalize mt-2">{item.name}</p>
                <p className="text-gray-500">{item.genre}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListsCard;
