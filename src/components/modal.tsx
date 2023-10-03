import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../components/button/button';
import { Cross } from '../components-ui/icons';
import React, { FC, Fragment, ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isCloseable?: boolean;
  hasCloseButton?: boolean;
  isOpen: boolean;
  onCloseButtonClick?: (value: boolean) => void;
  isOverflowYScroll?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onCloseButtonClick = () => null,
  isCloseable = true,
  hasCloseButton = true,
  isOverflowYScroll = true,
}) => (
  <Transition appear as={Fragment} show={isOpen}>
    <Dialog
      as="div"
      className="fixed inset-0 overflow-y-auto z-50"
      open={isOpen}
      onClose={(value: boolean) => isCloseable && onCloseButtonClick(value)}
    >
      <div className="min-h-screen flex justify-center items-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={`relative max-w-screen max-h-[90vh] ${
              isOverflowYScroll ? 'overflow-y-scroll' : ''
            } transition-all transform bg-white rounded-lg`}
          >
            {isOpen && isCloseable && hasCloseButton && (
              <Button
                classOverride="text-black absolute right-3 top-3 z-10"
                onClick={() => onCloseButtonClick(false)}
              >
                <Cross />
              </Button>
            )}
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

const sizeAndClassNameMap = {
  md: 'w-[800px]',
  l: 'w-[900px]',
  xl: 'w-[1152px]',
};

export const ModalContentContainer: FC<{
  size?: 'md' | 'l' | 'xl' | string;
  className?: string;
}> = ({ children, size = 'xl', className }) => {
  const sizeClassName = sizeAndClassNameMap[size] ?? size;

  return (
    <div className={`${sizeClassName} bg-gray-1 px-6 py-8 ${className}`}>
      {children}
    </div>
  );
};

export const ModalHeader: FC = ({ children }) => {
  return <div className="text-[18px] font-bold mb-7">{children}</div>;
};

type ModalHeaderWithDualHeadingsProps = {
  mainHeaderLabel: string | ReactNode | JSX.Element;
  subHeaderLabel: string | ReactNode | JSX.Element;
};

export const ModalHeaderWithDualHeadings: FC<
  ModalHeaderWithDualHeadingsProps
> = ({ mainHeaderLabel, subHeaderLabel, children }) => {
  return (
    <div className="flex justify-between mb-7">
      <div className="space-y-2">
        <h1 className="text-[24px] font-semibold">{mainHeaderLabel}</h1>
        <h2 className="text-[15px] text-gray-6 font-normal">
          {subHeaderLabel}
        </h2>
      </div>
      {children}
    </div>
  );
};

export const ModalStickyFooter: FC = ({ children }) => {
  return (
    <div className="sticky bottom-0 left-0 w-full bg-white flex justify-end py-4 px-6 space-x-4">
      {children}
    </div>
  );
};
