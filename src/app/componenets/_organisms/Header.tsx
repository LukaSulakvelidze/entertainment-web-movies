import React from "react";
import { MdMovieCreation } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";
import { PiTelevisionFill } from "react-icons/pi";
import { IoMdFilm } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import userImage from "../../assets/1680112741268.jpg";
const Header = () => {
  return (
    <header className="flex xl:flex-col items-center justify-between xl:gap-[136px] xl:fixed xl:left-6 xl:h-[90%] px-[5.5%] xl:px-[38px] py-5 md:rounded-[10px] bg-[#161D2F]">
      <div className="w-[32px] h-[25px] xl:w-11">
        <MdMovieCreation className="w-full h-full text-[#FC4747]" />
      </div>

      <div className="flex xl:flex-col items-center justify-between gap-[3%] xl:gap-6 w-[120px] sm:w-[180px] xl:w-auto">
        <div className="w-[33px] h-[33px]">
          <HiSquares2X2 className="w-full h-full text-[#5A698F]" />
        </div>
        <div className="w-[33px] h-[33px]">
          <PiTelevisionFill className="w-full h-full text-[#5A698F]" />
        </div>
        <div className="w-[33px] h-[33px]">
          <IoMdFilm className="w-full h-full text-[#5A698F]" />
        </div>
        <div className="w-[33px] h-[33px]">
          <BsBookmarkFill className="w-full h-full text-[#5A698F]" />
        </div>
      </div>

      <Image
        className="rounded-[50%] xl:w"
        src={userImage}
        width={32}
        height={32}
        alt={"User Image"}
      />
    </header>
  );
};

export default Header;
