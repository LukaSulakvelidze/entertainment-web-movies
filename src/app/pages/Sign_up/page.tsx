"use client";
import Form from "@/app/componenets/_organisms/Form";
import Input from "@/app/componenets/_molecules/Input";
import { MdMovieCreation } from "react-icons/md";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center gap-[58px] px-6 py-12 h-[100vh] bg-[#10141E]">
      <div className="w-[32px] h-[25px]">
        <MdMovieCreation className="w-full h-full text-[#FC4747]" />
      </div>
      <Form
        text={"Sign Up"}
        button_text={"Create an account"}
        href="/pages/Log_in"
        suggest_text={"Already have an account?"}
        linkable={"Login"}
      >
        <Input
          className={
            "w-full border-b-[1px] px-4 pb-4 text-white opacity-50 outline-none border-[#5A698F] bg-transparent"
          }
          type={"password"}
          placeholder={"Repeat password"}
        />
      </Form>
    </div>
  );
};

export default SignUp;
