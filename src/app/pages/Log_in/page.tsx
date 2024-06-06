"use client";
import Form from "@/app/componenets/_organisms/Form";
import { MdMovieCreation } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "@/app/componenets/_molecules/Button";
import { useState } from "react";
import handleGoogleSignIn from "@/app/firebase registration/google_modal";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center gap-[58px] px-6 py-12 h-[100vh] bg-[#10141E]">
      <div className="w-[32px] h-[25px]">
        <MdMovieCreation className="w-full h-full text-[#FC4747]" />
      </div>
      <Form
        text={"Login"}
        setEmail={(e) => setEmail(e.target.value)}
        email={email}
        setPassword={(e) => setPassword(e.target.value)}
        password={password}
        button_text={"Login to your account"}
        href="/pages/Sign_up"
        suggest_text={"Don’t have an account?"}
        linkable={"Sign Up"}
        via_social={
          <div className="flex justify-around">
            <Button
              onClick={handleGoogleSignIn}
              className="flex justify-center rounded-[50%] text-[15px] w-[40px] h-[40px] font-normal text-center text-white bg-transparent"
            >
              <FcGoogle className="w-full h-full" />
            </Button>

            <Button className="flex justify-center rounded-[50%] text-[15px] w-[40px] h-[40px] font-normal text-center text-blue-900 bg-transparent">
              <FaFacebook className="w-full h-full" />
            </Button>

            <Button className="flex justify-center rounded-[50%] text-[15px] w-[40px] h-[40px] font-normal text-center text-blue-500 bg-transparent">
              <FaTwitter className="w-full h-full" />
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default LogIn;
