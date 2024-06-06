import { Movie_data, Movie_wrapper_props } from "@/app/interfaces";
import React from "react";
import Movie_cont from "../_molecules/Movie_cont";
import { releaseData } from "../services/release_date_foo";

const Movie_wrapper = ({ category_title, movies }: Movie_wrapper_props) => {
  return (
    <>
      <h1 className="text-[20px] font-Outfit font-normal tracking-[-0.312px] text-white">
        {category_title}
      </h1>
      <div className="flex flex-wrap justify-around gap-[15px]">
        {movies &&
          movies.map((movie: Movie_data, index: number) => {
            return (
              <>
                <Movie_cont
                  key={index}
                  main_cont_className={
                    "flex flex-col gap-3 relative w-[164px] md:w-[240px] xl:w-[280px] text-[14px] md:text-[18px]"
                  }
                  details_text={"text-[11px] md:text-[13px]"}
                  image_className={
                    "h-[140px] xl:h-[174px] rounded-xl object-cover"
                  }
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  movie_detail_cont_className={"flex flex-col gap-2"}
                  movie_release_date={releaseData(movie)}
                  type={movie.video ? "TV-series" : "Movie"}
                  restrict={movie.adult ? "+18" : "PG"}
                  movie_name={movie.title}
                />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Movie_wrapper;
