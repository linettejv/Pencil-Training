import { FC } from "react";
import { Button } from "./button";
export interface NavigationButtonProps {
  IconComponent?: any;
  id?: string;
  isActive?: boolean;
  isPermissionsAllowed?: boolean;
  classOverride?: string;
  textClassOverride?: string;
  label?: React.ReactNode;
  onClick?(): void;
  imgSrc?: any;
}

export const NavigationButton: FC<NavigationButtonProps> = (
  props: NavigationButtonProps
) => {
  const {
    IconComponent = () => null,
    id = "",
    isActive = false,
    label,
    classOverride = "",
    textClassOverride = "",
    onClick = () => null,
  } = props;

  const buttonClasses = isActive
    ? "text-purple-5 bg-purple-1 dark:text-white dark:bg-gray-7"
    : "text-gray-7 dark:text-white hover:text-black dark:hover:text-gray-5";
  const iconClasses = isActive
    ? "text-purple-5 opacity-60 dark:text-white"
    : "text-gray-5 group-hover:text-gray-6 opacity-100";

  return (
    <Button
      classOverride={`group h-8 w-full px-2 rounded-lg ${buttonClasses} ${classOverride}`}
      id={id}
      onClick={onClick}
    >
      <span
        className={`w-full h-full flex items-center whitespace-nowrap space-x-2 justify-start ${textClassOverride}`}
      >
        {IconComponent && <IconComponent className={iconClasses} />}
        <div className="flex space-x-1">
          {label && <span className="leading-[20px] pt-[2px] ">{label}</span>}
        </div>
      </span>
    </Button>
  );
};
