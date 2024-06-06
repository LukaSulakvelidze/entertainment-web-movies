import { Input_props } from "@/app/interfaces";
import React from "react";

const Input = ({
  onChange,
  value,
  className,
  type,
  placeholder,
}: Input_props) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
