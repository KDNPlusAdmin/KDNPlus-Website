import Image from "next/image";
import React from "react";

const TvseriesCard = ({ cardList, title }) => {
  return (
    <div className="mt-8">
      <h1>{title}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {cardList.map((item) => (
          <>
            <Image
              className={`w-[230px]  bg-red-300 h-[130px]  object-center object-cover mt-5  rounded-2xl`}
              width={1000}
              height={1000}
              alt="img"
              src={item.image}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default TvseriesCard;
