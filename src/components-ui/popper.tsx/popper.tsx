import { useIsMounted } from '@/lib/client/use-is-mounted';
import { Portal } from '@headlessui/react';
import React, { FC, useState } from 'react';
import { usePopper } from 'react-popper';

interface PopperContentProps {
  popperRef: any;
  popperStyles: any;
  popperAttributes: any;
  children: any;
  onPopperClick?: any;
}

export interface PopperProps {
  idsToClosePopper?: string[];
  isKeepPopperOpenAfterClick?: boolean;
  placement?:
    | 'top'
    | 'top-start'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'left-start'
    | 'auto';
  popComponent: any;
  refComponent: any;
  trigger?: 'click' | 'hover';
  customClassName?: string;
}

const PopperContent = (props: PopperContentProps) => {
  const { children, popperRef, popperStyles, popperAttributes, onPopperClick } =
    props;

  return (
    <div
      ref={popperRef}
      style={{ ...popperStyles, zIndex: 50 }}
      onClick={onPopperClick}
      {...popperAttributes}
    >
      {children}
    </div>
  );
};

export const Popper: FC<PopperProps> = ({
  idsToClosePopper = [],
  isKeepPopperOpenAfterClick = false,
  placement = 'top',
  popComponent,
  refComponent,
  trigger = 'click',
  customClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'flip',
        enabled: true,
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const onPopperToggle = (event: any) => {
    setIsOpen(!isOpen);
    event.stopPropagation();
  };

  const onPopperClick = (event: any) => {
    if (isKeepPopperOpenAfterClick) {
      event.stopPropagation();

      return;
    }

    if (idsToClosePopper.length > 0) {
      // specific ids to trigger close
      if (idsToClosePopper.includes(event.target.id)) {
        setIsOpen(false);
      }

      event.stopPropagation();

      return;
    } else {
      // trigger close on any click
      setIsOpen(false);
    }
  };

  const refComponentIsFunction = typeof refComponent === 'function';
  const popComponentIsFunction = typeof popComponent === 'function';

  // TODO:
  // Follow this headless-ui bug
  // the portal html element is removed
  // after page navigation
  // https://github.com/tailwindlabs/headlessui/issues/479
  const isMounted = useIsMounted();

  return isMounted ? (
    <>
      <div
        ref={setReferenceElement}
        className={customClassName}
        onClick={
          trigger === 'click' ? (event: any) => onPopperToggle(event) : () => {}
        }
        onMouseEnter={trigger === 'hover' ? () => setIsOpen(true) : () => {}}
        onMouseLeave={trigger === 'hover' ? () => setIsOpen(false) : () => {}}
      >
        {refComponentIsFunction ? refComponent({ isOpen }) : refComponent}
      </div>
      <Portal>
        {isOpen && (
          <>
            {trigger === 'click' ? (
              <div
                className="fixed h-screen w-screen top-0 left-0 z-50"
                onClick={onPopperToggle}
              >
                <PopperContent
                  popperAttributes={{ ...attributes.popper }}
                  popperRef={setPopperElement}
                  popperStyles={styles.popper}
                  onPopperClick={(e: any) => onPopperClick(e)}
                >
                  {popComponentIsFunction
                    ? popComponent({
                        height: referenceElement.clientHeight,
                        width: referenceElement.clientWidth,
                      })
                    : popComponent}
                </PopperContent>
              </div>
            ) : (
              <PopperContent
                popperAttributes={{ ...attributes.popper }}
                popperRef={setPopperElement}
                popperStyles={{ ...styles.popper, zIndex: 50 }}
              >
                {popComponentIsFunction
                  ? popComponent({
                      height: referenceElement.clientHeight,
                      width: referenceElement.clientWidth,
                    })
                  : popComponent}
              </PopperContent>
            )}
          </>
        )}
      </Portal>
    </>
  ) : null;
};
