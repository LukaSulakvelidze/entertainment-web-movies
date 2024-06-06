import React from "react";
import { Button_props } from "../interfaces";

const Button = ({ onClick, className, children }: Button_props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
