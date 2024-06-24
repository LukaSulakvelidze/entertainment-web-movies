"use client";
import React from "react";
import { Movies_fullCont_props } from "@/app/interfaces";
import Movie_wrapper from "./Movie_wrapper";
const Movies_fullCont = ({
  slider_cont,
  category_title,
  movies,
  inputValue,
}: Movies_fullCont_props) => {
  return (
    <div className="flex flex-col gap-4">
      {slider_cont}

      <Movie_wrapper
        category_title={category_title}
        movies={movies}
        inputValue={inputValue}
      />
    </div>
  );
};

export default Movies_fullCont;
