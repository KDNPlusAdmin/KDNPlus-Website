"use client";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import TvseriesCard from "@/components/TvseriesCard";
import { continueWatching, myList, tvSeries, upcoming } from "@/constants";
import React, { useState } from "react";

const page = () => {
  const [selectedDisplay, setSelectedDisplay] = useState("all");

  const handleChange = (e) => {
    setSelectedDisplay(e.target.value);
  };
  return (
    <div className="">
      {/* <Topbar /> */}
      <Hero tvseries />
      <div className="flex mt-5">
        <select
          onChange={handleChange}
          className=" boreder-[1px] rounded-xl px-5 py-3 border-gray-300 shadow-xl bg-gray-900"
        >
          <option value="all">Filter</option>
          <option value="new arrivals">New Arivals</option>
          <option value="upcoming">Upcoming</option>
          <option value="recently added">Recently Added</option>
          <option value="new arrivals">Top Rated</option>
          <option value="new arrivals">Trending Now</option>
        </select>

        <select className="ml-5 boreder-[1px] rounded-xl pr-5 py-3 border-gray-300 shadow-xl bg-gray-900">
          <option>categories</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Comedy</option>
          <option>Thriller</option>
          <option>Historical Fiction</option>
          <option>Dramatic Comedy</option>
        </select>
      </div>

      <div className="mb-10">
        {selectedDisplay === "all" && (
          <>
            {" "}
            <TvseriesCard title="New Arivals" cardList={tvSeries} />
            <TvseriesCard title="upcoming" cardList={upcoming} />
            <TvseriesCard title="Recently Added" cardList={myList} />
          </>
        )}

        {selectedDisplay === "upcoming" && (
          <>
            {" "}
            <TvseriesCard title="upcoming" cardList={upcoming} />
          </>
        )}

        {selectedDisplay === "new arrivals" && (
          <>
            {" "}
            <TvseriesCard title="New Arrivals" cardList={tvSeries} />
          </>
        )}

        {selectedDisplay === "recently added" && (
          <>
            {" "}
            <TvseriesCard title="Recently Added" cardList={myList} />
          </>
        )}
      </div>
    </div>
  );
};

export default page;
