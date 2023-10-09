import { Search } from "@/components-ui/icons";
import React, { ChangeEvent, KeyboardEvent } from "react";

export const InputMaxLength = 524288;

enum InputAppearance {
  PRIMARY = "primary",
  PRIMARY_V2 = "primaryV2",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

enum InputSize {
  BASE = "base",
  CUSTOM = "custom",
}

const getAppearanceClassNames = (appearance: InputAppearance) => {
  switch (appearance) {
    case InputAppearance.PRIMARY:
      return "border border-gray-4 focus:outline-none focus:border-gray-5 py-3 px-4";
    case InputAppearance.PRIMARY_V2:
      return "border border-gray-3 focus:border-gray-4 py-3 px-4";
    case InputAppearance.SECONDARY:
      return "border border-gray-4 focus:border-purple-5 py-3 px-4";
    case InputAppearance.TERTIARY:
      return "border border-0 p-0";
    default:
      return "";
  }
};

const getSizeClassNames = (size: InputSize) => {
  switch (size) {
    case InputSize.BASE:
      return "h-10";
    case InputSize.CUSTOM:
      return "";
    default:
      return "";
  }
};

type InputControlledProps = {
  appearance?: InputAppearance;
  error?: any;
  isDisabled?: boolean;
  isMaxLengthShown?: boolean;
  name?: string;
  placeholder?: string;
  register?: any;
  onFocus?(e: any): void;
  onBlur?(e: any): void;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  onKeyDown?(e: KeyboardEvent<HTMLInputElement>): void;
  maxLength?: number;
  size?: InputSize;
  type?: "text" | "email" | "password" | "number" ;
  className?: string;
  withSearchIcon?: boolean;
  value?: string;
  isThemeSensitive?: boolean;
};

const InputControlledComponent = ({
  className = "",
  appearance = InputAppearance.PRIMARY,
  error = "",
  isDisabled = false,
  isMaxLengthShown = false,
  onFocus = () => null,
  onBlur = () => null,
  onChange = () => null,
  onKeyDown = () => null,
  name = "",
  placeholder = "",
  register,
  maxLength = InputMaxLength,
  size = InputSize.BASE,
  type = "text",
  withSearchIcon,
  value,
  isThemeSensitive = false,
}: InputControlledProps) => {
  const inputSpacing =
    isMaxLengthShown && maxLength !== InputMaxLength
      ? maxLength > 99
        ? "pr-18"
        : "pr-14"
      : "";

  const inputClasses = getAppearanceClassNames(appearance);
  const sizeClasses = getSizeClassNames(size);

  return (
    <div className=" w-full">
      <span className="relative">
      {withSearchIcon && (
        <Search className="absolute text-gray-6 top-[-2px] left-[8px]" />
      )}
        <input
          value={value}
          ref={register}
          className={`form-input w-full text-base text-gray-7 placeholder-gray-5 rounded ${sizeClasses} ${inputSpacing} ${inputClasses} disabled:bg-gray-3`}
          disabled={isDisabled}
          name={name}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
          onChange={(e: any) => onChange(e)}
          onClick={(e: any) => e.stopPropagation()}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
        {isMaxLengthShown && maxLength !== InputMaxLength && (
          <p
            className={`text-gray-6 dark:text-gray-5 absolute top-0 right-[16px] ${
              isDisabled
                ? "bg-gray-3 dark:bg-gray-7 !text-gray-5 dark:!text-gray-6"
                : ""
            }`}
          >
            {value?.length}/{maxLength}
          </p>
        )}
      </span>
    </div>
  );
};

export default InputControlledComponent;
