import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import { Movie_data, Slider_props } from "@/app/interfaces";
import Movie_cont from "../_molecules/Movie_cont";
import { releaseData } from "../services/release_date_foo";
import { Autoplay } from "swiper/modules";

const Slider = ({ movies }: Slider_props) => {
  return (
    <Swiper
      // className="w-[90vh] :xl:w-[80vh] h-[40vh]"
      className="swiper"
      style={{ margin: "0" }}
      spaceBetween={50}
      slidesPerView={3}
      modules={[Autoplay]}
      autoplay={true}
    >
      {movies &&
        movies
          .filter((value: Movie_data) => value.popularity >= 1000)
          .map((movie: Movie_data) => {
            return (
              <SwiperSlide className="w-[20%]" key={Math.random()}>
                <Movie_cont
                  key={Math.random()}
                  main_cont_className={
                    "h-full w-full relative text-[15px] md:text-[24px]"
                  }
                  image_className={"w-full h-full rounded-xl object-cover"}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  movie_detail_cont_className={
                    "flex flex-col gap-2 absolute bottom-[5%] left-4"
                  }
                  details_text={"text-[12px] md:text-[15px]"}
                  movie_release_date={releaseData(movie)}
                  type={movie.video ? "TV-series" : "Movie"}
                  restrict={movie.adult ? "+18" : "PG"}
                  movie_name={movie.title}
                />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
};

export default Slider;
