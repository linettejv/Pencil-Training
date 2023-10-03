import { Spinner } from "./spinner";
import React from "react";

interface Props {
  colour?: string;
  children: any;
  isLoaded: any;
}

export const SpinnerHoc = (props: Props) => {
  const { colour = "bg-purple-5", children, isLoaded = false } = props;

  return isLoaded ? children : <Spinner colour={colour} />;
};
