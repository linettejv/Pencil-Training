import React, { ChangeEvent, useState } from "react";
import InputControlledComponent from "./input";
import Label from "./label";
import TextAreaComponent from "./textarea";

const InputTextareaPair = ({
  label,
  value,
  onChange,
  maxLength,
}: {
  label: string;
  value: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  maxLength: number;
}) => {
  return (
    <div className="flex mt-[16px]">
      <Label label={label} />
      <TextAreaComponent
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTextareaPair;
