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


