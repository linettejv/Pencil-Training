import {
  CheckboxOn,
  CheckboxOff,
  RadioOff,
  RadioOn,
} from '@/components-ui/icons';
import React, { FC, ReactNode } from 'react';

export interface CardFooterProps {
  appearance?: 'primary' | 'secondary';
  children?: ReactNode;
  isDisabled?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  isSelectable?: boolean;
  isThemeSensitive?: boolean;
  onSelect?(e: React.MouseEvent): void;
}

export const Option: FC<CardFooterProps> = ({
  appearance = 'primary',
  children,
  isDisabled = false,
  isMultiSelect = true,
  isSelected = false,
  isSelectable = false,
  onSelect = () => null,
  isThemeSensitive = false,
}) => {
  const getSelectionIcon = () => {
    if (isSelectable && isMultiSelect) {
      return isSelected ? (
        <CheckboxOn
          className={`${isDisabled ? 'text-gray-5' : 'text-green-3'}`}
        />
      ) : (
        <CheckboxOff
          className={`${isDisabled ? 'text-gray-5' : 'text-gray-5'}`}
        />
      );
    } else if (isSelectable && !isMultiSelect) {
      return isSelected ? (
        <RadioOn className={`${isDisabled ? 'text-gray-5' : 'text-green-3'}`} />
      ) : (
        <RadioOff className={`${isDisabled ? 'text-gray-5' : 'text-gray-5'}`} />
      );
    }
  };

  let footerClasses = '';

  switch (appearance) {
    case 'primary':
      footerClasses = `p-2 bg-white ${
        isThemeSensitive ? 'dark:bg-dark-1' : ''
      }`;
      break;
    case 'secondary':
      footerClasses = '';
      break;
  }

  return (
    <div
      onClick={(e) => (isDisabled ? {} : onSelect(e))}
      className={`truncate flex flex-row items-center space-x-2 transition-colors ${footerClasses} ${
        isDisabled ? 'text-gray-5' : 'cursor-pointer'
      }`}
    >
      {isSelectable && <div className="w-[24px]">{getSelectionIcon()}</div>}
      {children}
    </div>
  );
};
