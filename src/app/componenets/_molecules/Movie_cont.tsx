"use client";
import React from "react";
import { IoMdFilm } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { Movie_cont_porps } from "@/app/interfaces";

const Movie_cont = ({
  main_cont_className,
  image_className,
  poster,
  movie_detail_cont_className,
  details_text,
  movie_release_date,
  type,
  restrict,
  movie_name,
}: Movie_cont_porps) => {
  return (
    <div className={main_cont_className}>
      <div className="flex items-center justify-center absolute top-4 right-4 w-8 h-8 rounded-[50%] bg-black bg-opacity-50">
        <BsBookmarkFill className="text-white" />
      </div>
      <img className={image_className} src={poster} alt="Movie's poster" />

      <div className={movie_detail_cont_className}>
        <div className={`flex items-center gap-2 ${details_text}`}>
          <span className="font-Outfit font-normal opacity-[.75] text-white">
            {movie_release_date} &#x2022;
          </span>
          <div className={`flex items-center ${details_text}`}>
            <IoMdFilm className="text-white opacity-[.75]" />
            <span className="font-Outfit font-normal opacity-[.75] text-white">
              {type}
            </span>
          </div>
          <span className="font-Outfit font-normal opacity-[.75] text-white">
            &#x2022; {restrict}
          </span>
        </div>

        <h2 className="font-Outfit font-normal text-white">{movie_name}</h2>
      </div>
    </div>
  );
};

export default Movie_cont;
