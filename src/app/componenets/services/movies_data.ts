import axios from "axios";
import { useEffect } from "react";

export const movieDataUseEffect = (
  setMovies: React.Dispatch<React.SetStateAction<never[]>>
) => {
  useEffect(() => {
    const moviess = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    moviess();
  }, []);
};
