"use client";
import SearchAI from "./components/searchbar/searchai";
import ScrollItems from "./components/scrollbar/scrollitems";
import Filters from "./components/scrollbar/filters";
import CardList from "./components/cards/CardList";
import { useState } from "react";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";

export default function Home() {
  const [category, setCategory] = useState<string>("Music");
  const { scrollPosition, isScrollingUp } = useScrollPosition();
  const hideMainSearch = scrollPosition > 100 && !isScrollingUp;

  return (
      <main className="">
          <div className={`py-6 border-b transition-all duration-300 ${
            hideMainSearch ? 'opacity-0 invisible h-0 py-0' : 'opacity-100 visible'
          }`}>
            <SearchAI compact={false} />
          </div>
          
          <div className="flex py-4 max-w-[1100px]">
            <ScrollItems 
              dataCategory={category} 
              setCategory={setCategory} 
            />
            <div className="flex items-center font-semibold">
                <Filters />
            </div>
          </div>
          <CardList category={category} />
      </main>
  );
}
