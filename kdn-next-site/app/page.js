import Hero from "@/components/Hero";
import ListsCard from "@/components/ListsCard";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { continueWatching, myList, tvSeries, upcoming } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Hero />
        <ListsCard
          continueWatching
          text="Continue Watching"
          list={continueWatching}
        />
        <ListsCard upcoming text="Upcoming " list={upcoming} />
        <ListsCard tvseries text="Tv Series " list={tvSeries} />
        <ListsCard upcoming text="My List " list={myList} />
        <ListsCard upcoming text="Historical Fiction " list={tvSeries} />
      </div>
    </div>
  );
}
