import React, { ChangeEvent, FC } from "react";

const InputMaxLength = 524288;

export enum TextAreaAppearance {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
}

const maxLengthStyleMap = {
  [TextAreaAppearance.PRIMARY]: "mt-1 -bottom-8",
  [TextAreaAppearance.SECONDARY]: "bottom-1 right-3 bg-white rounded",
  [TextAreaAppearance.TERTIARY]: "top-2 right-3",
};

export interface TextAreaProps {
  appearance?: TextAreaAppearance;
  defaultValue?: string;
  value?: string;
  error?: string;
  isResizable?: boolean;
  maxLength?: number;
  name?: string;
  placeholder?: string;
  register?: any;
  rows?: number | undefined;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  onFocus?(e: any): void;
  onBlur?(e: any): void;
  isDisabled?: boolean;
  isThemeSensitive?: boolean;
  classOverride?: string;
}

const TextAreaComponent: FC<TextAreaProps> = ({
  appearance = TextAreaAppearance.SECONDARY,
  defaultValue = "",
  value,
  error = "",
  isResizable = false,
  maxLength = InputMaxLength,
  name = "",
  placeholder = "",
  register,
  rows,
  onChange = () => null,
  onFocus = () => null,
  isDisabled = false,
  isThemeSensitive = false,
  classOverride = "",
}) => {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const maxLengthStyle = maxLengthStyleMap[appearance];

  return (
    <div className="w-full h-full flex flex-col items-end relative  pl-[15px]">
      <textarea
        ref={register}
        {...(value !== undefined && { value })}
        className={`w-full h-full placeholder-gray-5 rounded  
             disabled:bg-gray-3 border border-gray-4 focus:border-gray-5 py-3 px-4`}
        name={name}
        placeholder={placeholder}
        rows={rows}
        disabled={isDisabled}
        onChange={(e: any) => onChangeText(e)}
        onFocus={onFocus}
      />
      {maxLength !== InputMaxLength && (
        <p
          className={`absolute ${
            isDisabled ? "bg-gray-3 text-gray-5" : "text-gray-6"
          } ${maxLengthStyle}`}
        >
          {value?.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default TextAreaComponent;
