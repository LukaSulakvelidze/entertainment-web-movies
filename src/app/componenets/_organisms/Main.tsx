import React from "react";
import Input from "../_molecules/Input";
import { IoSearch } from "react-icons/io5";
import Movies_fullCont from "./Movies_fullCont";
import { Main_props } from "@/app/interfaces";

const Main = ({ searchIcon, value, input_onChange, slider_cont, movies }: Main_props) => {
  return (
    <main className="flex flex-col gap-6 px-[5.5%] md:px-0 py-6 xl:ml-[150px]">
      <form className="flex gap-3">
        <IoSearch onClick={searchIcon} className="w-5 h-5 text-white" />
        <Input
          className={
            "w-full outline-none xl:hover:border-b xl:hover:border-[#5A698F] cursor-pointer text-white bg-transparent"
          }
          type={"text"}
          placeholder={"Search for movies or TV series"}
          value={value}
          onChange={input_onChange}
        />
      </form>

      <Movies_fullCont
        slider_cont={slider_cont}
        category_title={"Recommended for you"}
        movies={movies}
      />
    </main>
  );
};

export default Main;
