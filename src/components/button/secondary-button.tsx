import { ButtonSize } from '../../components-ui/enums/ui';
import React, { FC } from 'react';

import { Button, ButtonContent } from './button';
import { getSizeClasses } from './button-util';

export interface SecondaryButtonProps {
  colour?: 'primary' | 'destructive' | 'black' | 'positive' | 'dark-primary' | 'gray'
  IconComponent?: any;
  iconPosition?: 'left' | 'right';
  id?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: React.ReactNode;
  onClick?: Function;
  size?: ButtonSize;
  type?: 'button' | 'submit';
  isThemeSensitive?: boolean;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  colour = 'primary',
  IconComponent = () => null,
  iconPosition = 'left',
  id = '',
  isDisabled = false,
  isLoading = false,
  label,
  onClick = () => null,
  size = ButtonSize.BASE,
  type = 'button',
  isThemeSensitive = false
}) => {
  let iconColour = '';
  let spinnerColour = '';
  const sizeClasses = getSizeClasses(size);

  let buttonClasses = '';
  const buttonDisabledClasses = `text-gray-6 bg-gray-3 cursor-default ${isThemeSensitive ? 'dark:bg-gray-7' : ''}`;

  switch (colour) {
    case 'primary':
      iconColour = `text-purple-5 ${isThemeSensitive ? 'dark:text-white' : ''}`;
      buttonClasses = `text-purple-5 bg-purple-2 hover:bg-purple-3 active:bg-purple-4
        ${isThemeSensitive ? 'dark:text-white dark:bg-dark-1 dark:hover:text-gray-5 dark:border dark:border-gray-5' : ''}`;
      spinnerColour = 'bg-purple-5 dark:bg-white';
      break;
    case 'dark-primary':
        iconColour = `text-purple-5 ${isThemeSensitive ? 'dark:text-white' : ''}`;
        buttonClasses = `text-purple-5 bg-purple-2 hover:bg-purple-3 active:bg-purple-4
          ${isThemeSensitive ? 'dark:text-white dark:bg-purple-5 dark:hover:bg-purple-6' : ''}`;
        spinnerColour = 'bg-purple-5 dark:bg-white';
        break;
    case 'destructive':
      iconColour = 'text-red-3';
      buttonClasses = 'text-red-3 bg-red-1 hover:bg-red-2';
      spinnerColour = 'bg-red-3';
      break;
    case 'black':
      iconColour = 'text-black';
      buttonClasses = 'text-black bg-gray-3 hover:bg-gray-3';
      spinnerColour = 'bg-black';
      break;
    case 'gray':
      iconColour = 'text-white';
      buttonClasses = 'text-white bg-gray-7 hover:bg-gray-6 border border-gray-5';
      spinnerColour = 'bg-white';
      break;
    case 'positive':
      iconColour = 'text-green-3';
      buttonClasses = 'text-green-3 bg-green-3 bg-opacity-[8%]';
      spinnerColour = 'bg-green-3';
      break;
  }

  return (
    <Button
      classOverride={`${sizeClasses} ${
        isDisabled ? buttonDisabledClasses : buttonClasses
      }`}
      id={id}
      isDisabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      <ButtonContent
        IconComponent={
          <IconComponent className={isDisabled ? 'text-gray-6' : iconColour} />
        }
        iconPosition={iconPosition}
        isLoading={isLoading}
        justifyContent={
          iconPosition === 'right' ? 'justify-between' : 'justify-center'
        }
        label={label}
        spinnerColour={isDisabled ? 'bg-gray-6' : spinnerColour}
      />
    </Button>
  );
};
