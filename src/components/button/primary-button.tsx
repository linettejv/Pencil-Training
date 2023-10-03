import { ButtonSize } from "../../components-ui/enums/ui";
import React, { FC } from "react";

import { Button, ButtonContent } from "./button";
import { getSizeClasses } from "./button-util";

export interface PrimaryButtonProps {
  colour?:
    | "primary"
    | "destructive"
    | "facebook"
    | "yellow"
    | "green"
    | "okta"
    | "completed"
    | "dark";
  IconComponent?: any;
  iconPosition?: "left" | "right";
  id?: string;
  role?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: React.ReactNode;
  onClick?: Function;
  size?: ButtonSize;
  type?: "button" | "submit";
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  colour = "primary",
  IconComponent = () => null,
  iconPosition = "left",
  id = "",
  role,
  isDisabled = false,
  isLoading = false,
  label,
  onClick = () => {},
  size = ButtonSize.BASE,
  type = "button",
}) => {
  const spinnerColour = "bg-white";
  const sizeClasses = getSizeClasses(size);

  let buttonClasses = "";
  let iconColour = "text-white";
  const buttonDisabledClasses = "text-white bg-gray-5 cursor-default";

  switch (colour) {
    case "primary":
      buttonClasses =
        "text-white bg-purple-5 hover:bg-purple-6 active:bg-purple-7";
      break;
    case "destructive":
      buttonClasses = "text-white bg-red-3 hover:bg-red-4";
      break;
    case "facebook":
      buttonClasses = "text-white bg-fb-color hover:bg-fb-color";
      break;
    case "yellow":
      buttonClasses = "text-white bg-yellow-2.5 hover:bg-yellow-3";
      break;
    case "green":
      buttonClasses = "text-white bg-green-4";
      break;
    case "okta":
      buttonClasses = "text-white bg-[#1D79BB]";
      break;
    case "completed":
      buttonClasses = "text-white bg-green-3";
      iconColour = "text-green-3";
      break;
    case "dark":
      buttonClasses = "text-white bg-black hover:text-gray-5";
      iconColour = "hover:text-gray-5";
      break;
  }

  return (
    <Button
      classOverride={`${sizeClasses} ${
        isDisabled ? buttonDisabledClasses : buttonClasses
      }`}
      id={id}
      role={role}
      isDisabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      <ButtonContent
        IconComponent={
          IconComponent ? <IconComponent className={iconColour} /> : null
        }
        iconPosition={iconPosition}
        isLoading={isLoading}
        justifyContent={
          iconPosition === "right" ? "justify-between" : "justify-center"
        }
        label={label}
        spinnerColour={spinnerColour}
      />
    </Button>
  );
};
