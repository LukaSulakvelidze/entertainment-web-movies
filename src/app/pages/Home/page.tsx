"use client";
import Header from "@/app/componenets/_organisms/Header";
import Main from "@/app/componenets/_organisms/Main";
import React, { useState } from "react";
import { movieDataUseEffect } from "@/app/componenets/services/movies_data";
import Slider from "@/app/componenets/_organisms/Slider";
import { Movie_data } from "@/app/interfaces";
import Movie_wrapper from "@/app/componenets/_organisms/Movie_wrapper";

const Home = () => {
  const [movies, setMovies] = useState<never[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  movieDataUseEffect(setMovies);

 

  return (
    <>
      <Header />
      <Main
        searchIcon={movieSearch}
        value={inputValue}
        input_onChange={(e) => setInputValue(e.target.value)}
        movies={movies}
        slider_cont={
          <div className="flex flex-col gap-6">
            <h2 className="text-[20px] md:text-[32px] font-normal font-Outfit tracking-[-0.312px] md:tracking-[-.5px] text-white">
              Trending
            </h2>
            <Slider movies={movies} />
          </div>
        }
      />
    </>
  );
};

export default Home;
