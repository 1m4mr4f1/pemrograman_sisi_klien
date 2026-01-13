import React from "react";
import Input from "./Input";

const LabeledInput = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input
        name={name}
        id={name}
        {...rest} 
      />
    </div>
  );
};

export default LabeledInput;