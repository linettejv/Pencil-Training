import { FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  classOverride?: string;
  id?: string;
  role?: string;
  isDisabled?: boolean;
  onClick?: Function;
  type?: "button" | "submit";
}

export const Button: FC<ButtonProps> = ({
  children,
  isDisabled = false,
  type = "button",
  onClick = () => {},
  
}) => {
  const handleClick = (e:any)=>{
    console.log("buttonclicked")
  }
  return (
    <button
      className={`flex-none rounded focus:outline-none  `}
      disabled={isDisabled}
      type={type}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};
