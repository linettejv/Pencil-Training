import { ButtonSize } from '../../components-ui/enums/ui';

export const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.BASE:
      return 'h-10 w-[140px] px-3';
    case ButtonSize.SM:
      return 'h-9 px-4';
    case ButtonSize.XS:
      return 'h-7 px-3';
    case ButtonSize.BASE_ICON:
      return 'h-10 w-10';
    case ButtonSize.SM_ICON:
      return 'h-9 w-9';
    case ButtonSize.BASE_MD:
      return 'h-10 px-6';
    case ButtonSize.BASE_LG:
      return 'h-10 w-[180px] px-3';
    case ButtonSize.BASE_FULL:
      return 'h-10 w-full px-4';
    case ButtonSize.CUSTOM:
      return '';
    case ButtonSize.ROUNDED:
      return 'rounded-full h-6 w-6';
    case ButtonSize.LG:
      return 'h-10 w-[240px] px-3';
  }
};
