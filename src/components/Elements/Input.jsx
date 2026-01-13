import React from "react";

const Input = (props) => {
  const {
    id,
    icon = false,
    backgroundColor = false,
    border = "border-gray-03",
    className,
    ...rest 
  } = props;

  return (
    <input
      id={id}
      className={`py-3 pl-4 text-sm rounded-md w-full border ${border} text-gray-01 focus:border-black focus:outline-none focus:ring-0 ${
        backgroundColor ? backgroundColor : "bg-white"
      } ${className || ""}`}
      {...rest}
    />
  );
};

export default Input;