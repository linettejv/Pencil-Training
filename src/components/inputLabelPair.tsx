import React, { ChangeEvent, useState } from "react";
import InputControlledComponent from "./input";
import Label from "./label";

const InputLabelPair = ({
  label,
  value,
  onChange,
  maxLength,
  placeholder
}: {
  label: string;
  value?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  maxLength: number;
  placeholder?: string;
}) => {
  return (
    <div className="flex mt-[16px]">
      <Label label={label} />
      <InputControlledComponent
        maxLength={maxLength}
        isMaxLengthShown={maxLength?true:false}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputLabelPair;
