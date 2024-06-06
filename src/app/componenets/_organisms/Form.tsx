import Button from "@/app/componenets/_molecules/Button";
import Input from "@/app/componenets/_molecules/Input";
import { Form_props } from "../../interfaces";
import Link from "next/link";

const Form = ({
  text,
  setEmail,
  email,
  setPassword,
  password,
  children,
  href,
  button_text,
  suggest_text,
  linkable,
  via_social,
}: Form_props) => {
  return (
    <div className="flex flex-col gap-10 w-full sm:w-[327px] rounded-xl px-6 py-6 pb-8 bg-[#161D2F]">
      <h2 className="text-[32px] font-normal tracking-[-.5px] text-white ">
        {text}
      </h2>
      <form className="flex flex-col gap-6">
        <Input
          className={
            "w-full border-b-[1px] px-4 pb-4 text-white opacity-50 outline-none border-[#5A698F] bg-transparent"
          }
          type={"email"}
          placeholder={"Email address"}
          onChange={setEmail}
          value={email}
        />
        <Input
          className={
            "w-full border-b-[1px] px-4 pb-4 text-white opacity-50 outline-none border-[#5A698F] bg-transparent"
          }
          type={"password"}
          placeholder={"Password"}
          onChange={setPassword}
          value={password}
        />

        {children}

        <Button className="flex justify-center rounded-md py-[13px] text-[15px] font-normal text-center text-white bg-[#FC4747]">
          {button_text}
        </Button>

        <p className="text-[15px] font-normal text-center text-white">
          {suggest_text}{" "}
          <Link href={href}>
            <span className="cursor-pointer text-[#FC4747]">{linkable}</span>
          </Link>
        </p>
      </form>
      {via_social}
    </div>
  );
};

export default Form;
