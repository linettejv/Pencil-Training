import { Arrow, ArrowDown1 } from "@/components-ui/icons";
import { Popover } from "@headlessui/react";
import React, { LegacyRef, useState } from "react";
import { usePopper } from "react-popper";
// import { AngleDown, AngleUp } from "components-ui/icons";

type Props<Option> = {
  label: string;
  options: Option[];
  optionIdKey?: string;
  optionLabelKey?: string;
  selectedOption: Option;
  selectedOptionLabelKey?: string;
  onOptionClick: (option: Option) => void;
  customWidth?: string;
  isUppercaseLabel?: boolean;
  isThemeSensitive?: boolean;
  popperPlacement?: "bottom-end" | "bottom-start";
};

export function Select<Option>({
  label,
  options,
  optionIdKey = "id",
  optionLabelKey = "label",
  selectedOption,
  selectedOptionLabelKey = "label",
  onOptionClick,
  customWidth = "w-[150px]",
  isUppercaseLabel = false,
  isThemeSensitive = false,
  popperPlacement = "bottom-end",
}: Props<Option>) {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: popperPlacement,
  });

  return (
    <div className="pr-[10px]">
      <Popover>
        {({ open }) => (
          <>
            <div>
              <Popover.Button
                ref={
                  setReferenceElement as unknown as (
                    instance: HTMLButtonElement | null
                  ) => void
                }
                as="div"
              >
                <div
                  className={`flex justify-between items-center bg-white rounded cursor-pointer focus:outline-none border px-2 py-3 h-10 ${customWidth} ${
                    open ? "border-gray-4" : "border-gray-3"
                  }
                `}
                >
                  <div className={`font-sans text-base text-gray-7 flex`}>
                    <div>{`${label}:`}</div>
                    <div className="font-semibold pl-1">
                      {
                        selectedOption?.[
                          selectedOptionLabelKey as keyof typeof selectedOption
                        ]
                      }
                    </div>
                  </div>
                  {open ? (
                    <ArrowDown1 className="rotate-180 delay-100 transition" />
                  ) : (
                    <ArrowDown1 className="transition delay-100 " />
                  )}
                </div>
              </Popover.Button>
            </div>
            <Popover.Panel
              className="w-[190px] max-h-[370px] flex flex-col py-2 bg-white rounded-md shadow-1 z-10"
              ref={
                setPopperElement as unknown as (
                  instance: HTMLDivElement | null
                ) => void
              }
              style={styles.popper}
              {...attributes.popper}
            >
              {label && (
                <div className="px-3 py-2 text-sm text-gray-6">{`Choose ${label.toLowerCase()}`}</div>
              )}
              <div className="overflow-y-auto">
                {options.map((option) => (
                  <div
                    key={option?.[optionIdKey as keyof typeof option]}
                    onClick={() => onOptionClick(option)}
                  >
                    <Popover.Button as="div" className="item">
                      <div className="w-full px-3 py-4 group cursor-pointer hover:bg-purple-1 font-sans text-base text-gray-7">
                        <p>{option?.[optionLabelKey as keyof typeof option]}</p>
                      </div>
                    </Popover.Button>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
}
