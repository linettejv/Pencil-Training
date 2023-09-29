import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import InputControlledComponent from "./input";
import { Arrow, QuestionInverse } from "@/components-ui/icons";
import { Tooltip } from "@/components-ui/tooltip/tooltip";

type AccordianTypes = {
  showOptions: boolean;
  heading: string;
  NumberIcon: any;
  description?: string;
  inputPlaceholder?: string;
};

const Accordian = ({
  showOptions = false,
  heading = "",
  NumberIcon = () => null,
  description = "",
  inputPlaceholder = "",
}: AccordianTypes) => {
  const [input, setInput] = useState("");

  const onSelect = (option: string) => {
    setInput(option);
  };

  const values = [
    "Routine",
    "Health",
    "Enter",
    "Exit",
    "Routine",
    "Health",
    "Enter",
    "Exit",
  ];

  return (
    <div className="w-full py-0">
      <div className="w-full border-gray-3 border rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md  text-lg  px-4 py-2 text-left  hover:bg-purple-2  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 border-black border-spacing-1">
                <div className="flex flex-row items-center">
                  <NumberIcon />
                  <span className="pl-4 pr-2">{heading}</span>
                  <Tooltip
                    PopComponent={
                      <div className="bg-gray-7 text-white text-sm py-2 px-3 rounded-md whitespace-pre-wrap w-[164px]">
                        {description}
                      </div>
                    }
                    RefComponent={
                      <QuestionInverse className="h-6 w-6 text-gray-5 dark:text-gray-7" />
                    }
                  />
                </div>

                <div className="">
                  {open ? (
                    <Arrow className="rotate-90 delay-100 transition " />
                  ) : (
                    <Arrow className="transition delay-100 relative right-0 top-0" />
                  )}
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 transition ease-in delay-100">
                <div>
                  <InputControlledComponent
                    maxLength={60}
                    isMaxLengthShown={true}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={inputPlaceholder}
                  />
                </div>
                <div className="flex flex-wrap flex-row">
                  {" "}
                  {showOptions &&
                    values &&
                    values.map((item) => (
                      <div
                        key={item}
                        className="pt-4 pr-[10px] relative text-md cursor-pointer"
                      >
                        <span
                          onClick={() => onSelect(item)}
                          className="h-7 transition-colors bg-gray-3 dark:bg-gray-4 dark:text-white rounded-sm px-2 inline-flex items-center"
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordian;
