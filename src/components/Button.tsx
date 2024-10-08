import { ConfigFn } from "@testing-library/react";
import React from "react";

const baseButton = "font-bold py-2 px-4 rounded-full drop-shadow-lg m-2 ";

type ButtonProps = {
  label: string;
  onClick: () => void;
  buttonType: string;
};

const Button = ({ label, onClick, buttonType }: ButtonProps) => {
  let buttClass = baseButton + "bg-blue-500 hover:bg-blue-700 text-white";
  if (buttonType === "secondary") {
    buttClass = baseButton + "bg-white hover:bg-gray-200 text-black";
  }
  return (
    <button className={buttClass} type="submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
