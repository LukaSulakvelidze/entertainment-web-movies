"use client";
import Header from "@/app/componenets/_organisms/Header";
import Main from "@/app/componenets/_organisms/Main";
import React, { useState } from "react";
import { movieDataUseEffect } from "@/app/componenets/services/movies_data";
import Slider from "@/app/componenets/_organisms/Slider";
import getCapitalizeString from "@/app/componenets/services/stringToUpper";

const Home = () => {
  const [movies, setMovies] = useState<never[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState("");
  movieDataUseEffect(setMovies);

  const searchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue) {
        setSearchResult(getCapitalizeString(inputValue));
      } else {
        setSearchResult("");
      }
    }
  };
  return (
    <>
      <Header />
      <Main
        value={inputValue}
        input_onChange={(e) => setInputValue(e.target.value)}
        inputOnKeyDown={(e) => searchOnEnter(e)}
        movies={movies}
        inputValue={searchResult}
        slider_cont={
          <div className="flex flex-col gap-6">
            <h2 className="text-[20px] md:text-[32px] font-normal font-Outfit tracking-[-0.312px] md:tracking-[-.5px] text-white">
              Trending
            </h2>
            <Slider movies={movies} />
          </div>
        }
        searchIcon={() =>
          inputValue
            ? setSearchResult(getCapitalizeString(inputValue))
            : setSearchResult("")
        }
      />
    </>
  );
};

export default Home;
