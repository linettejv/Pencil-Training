import { SpinnerHoc } from "../../components-ui/spinner/spinner-hoc";
import { FC, ReactNode } from "react";

interface ButtonContentProps {
  IconComponent?: any;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  justifyContent?: "justify-start" | "justify-between" | "justify-center";
  label?: React.ReactNode;
  spinnerColour?: string;
}

export const ButtonContent: FC<ButtonContentProps> = ({
  IconComponent = null,
  iconPosition = "left",
  isLoading = false,
  justifyContent = "justify-center",
  label,
  spinnerColour,
}) => {
  return (
    <SpinnerHoc colour={spinnerColour} isLoaded={!isLoading}>
      <span
        className={`w-full h-full flex items-center whitespace-nowrap space-x-2 ${justifyContent}`}
      >
        {iconPosition === "left" && IconComponent}
        {label && (
          <span className="leading-[20px] truncate text-base font-semibold">
            {label}
          </span>
        )}
        {iconPosition === "right" && IconComponent}
      </span>
    </SpinnerHoc>
  );
};
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
  classOverride = "",
}) => {
  const handleClick = (e: any) => {
    console.log("buttonclicked");
    onClick();
  };
  return (
    <button
      className={`flex-none rounded focus:outline-none ${classOverride} `}
      disabled={isDisabled}
      type={type}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};
