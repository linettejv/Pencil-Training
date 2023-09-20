import React, { ChangeEvent, useState } from "react";
import InputControlledComponent from "./input";

const Label = ({ label }: { label: string }) => {
  return (
    <div className="text-gray-6 font-nunito text-base font-normal leading-[21px] flex align items-center min-w-[80px]">
      {label}
    </div>
  );
};

export default Label;
