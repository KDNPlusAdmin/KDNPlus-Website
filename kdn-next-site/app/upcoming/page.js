"use client";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import TvseriesCard from "@/components/TvseriesCard";
import {
  continueWatching,
  myList,
  tvSeries,
  upcoming,
  upcomingNav,
} from "@/constants";
import React, { useState } from "react";

const page = () => {
  const [selectedDisplay, setSelectedDisplay] = useState("New Arrivals");
  const [active, setActive] = useState("New Arrivals");

  const handleChange = (text) => {
    setSelectedDisplay(text);
    setActive(true);
  };
  return (
    <div className=" ">
      <Hero tvseries />
      <div className="flex mt-5 gap-3">
        {upcomingNav.map((item) => (
          <>
            <p
              onClick={() => (
                setActive(item.label), setSelectedDisplay(item.label)
              )}
              className={
                active === item.label
                  ? " cursor-pointer border-[1px] rounded-xl px-5 py-3 border-gray-300 shadow-xl bg-gray-600"
                  : "cursor-pointer  boreder-[1px] rounded-xl px-5 py-3 border-gray-300 shadow-xl bg-gray-900"
              }
              href={item.route}
            >
              {item.label}
            </p>
          </>
        ))}
      </div>

      <div className="mb-10">
        {selectedDisplay === "New Arrivals" && (
          <>
            {" "}
            <TvseriesCard title="New Arrivals" cardList={tvSeries} />
          </>
        )}

        {selectedDisplay === "Upcoming" && (
          <>
            {" "}
            <TvseriesCard title="upcoming" cardList={upcoming} />
          </>
        )}
      </div>
    </div>
  );
};

export default page;
