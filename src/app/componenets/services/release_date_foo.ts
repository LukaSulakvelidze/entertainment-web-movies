import { Movie_data } from "@/app/interfaces";

export const releaseData = (movie: Movie_data) => {
  if (movie.release_date.includes("2024")) {
    return "2024";
  } else if (movie.release_date.includes("2023")) {
    return "2023";
  } else if (movie.release_date.includes("2022")) {
    return "2022";
  } else if (movie.release_date.includes("2021")) {
    return "2021";
  } else {
    return "2020";
  }
};
