import { Disclosure, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import InputControlledComponent from "./input";
import {
  ArrowToRight,
  Looser,
  QuestionInverse,
  Uncertain,
  Winner,
} from "@/components-ui/icons";
import { Tooltip } from "@/components-ui/tooltip/tooltip";

type AccordianTypes = {
  showOptions?: boolean;
  heading?: string;
  NumberIcon?: any;
  description?: string;
  inputPlaceholder?: string;
  children?: any;
};

const Accordian = ({
  showOptions = false,
  heading = "",
  NumberIcon = () => null,
  description = "",
  inputPlaceholder = "",
  children,
}: AccordianTypes) => {
  const [input, setInput] = useState("");
  const [prediction, setPrediction] = useState("");

  const onSelect = (option: string, prediction: string) => {
    setInput(option);
    setPrediction(prediction);
  };

  const values = [
    { id: 1, label: "Routine", prediction: "winner" },
    { id: 2, label: "Health", prediction: "looser" },
    { id: 3, label: "Enter", prediction: "uncertain" },
    { id: 4, label: "Exit", prediction: "winner" },
    { id: 5, label: "Health", prediction: "looser" },
    { id: 6, label: "Health", prediction: "looser" },
    { id: 7, label: "Routine", prediction: "winner" },
    { id: 8, label: "Health", prediction: "looser" },
    { id: 9, label: "Enter", prediction: "uncertain" },
    { id: 10, label: "Exit", prediction: "winner" },
  ];

  return (
    <div className="w-full py-0">
      <div className="w-full border-gray-3 border rounded-lg bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  text-lg  px-4 py-2 text-left   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 border-black border-spacing-1">
                <div className="flex flex-row items-center">
                  <NumberIcon />

                  


                  <span className="pl-4 pr-2">{heading} </span>

                  <Tooltip
                    PopComponent={
                      <div className="bg-gray-7 text-white text-sm py-2 px-3 rounded-lg whitespace-pre-wrap w-[164px]">
                        {description}
                      </div>
                    }
                    RefComponent={
                      <QuestionInverse className="h-6 w-6 text-gray-5 dark:text-gray-7" />
                    }
                  />

                </div>

                <div className="flex flex-row items-center">
                  {prediction && (
                    <div className="flex flex-row text-sm items-center mr-2 transition-opacity duration-500 ease-in ">
                      <div className="mr-2">
                        {prediction === "winner" && <Winner />}
                        {prediction === "looser" && <Looser />}
                        {prediction === "uncertain" && <Uncertain />}
                      </div>
                      {prediction === "winner" && `Winner`}
                      {prediction === "looser" && `Looser`}
                      {prediction === "uncertain" && `New & Worth trying`}
                      <div className="ml-2">
                        <Tooltip
                          PopComponent={
                            <div className="bg-gray-7 text-white text-sm py-2 px-3 rounded-lg whitespace-pre-wrap w-[164px]">
                              {description}
                            </div>
                          }
                          RefComponent={
                            <QuestionInverse className="h-6 w-6 text-gray-5 dark:text-gray-7" />
                          }
                        />
                      </div>
                    </div>
                  )}
                  <div className="">
                    {open ? (
                      <ArrowToRight className="rotate-90 delay-100 transition" />
                    ) : (
                      <ArrowToRight className="transition delay-100 relative right-0 top-0" />
                    )}
                  </div>{" "}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transform transition-[height] ease-in-out duration-200"
                enterFrom="height-0 "
                enterTo="height-100 "
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="height-100 rotate-0 scale-100 "
                leaveTo="height-0 scale-95 "
              >
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
                          key={item.id}
                          className="pt-4 pr-[10px] relative text-md cursor-pointer"
                        >
                          <span
                            onClick={() =>
                              onSelect(item.label, item.prediction)
                            }
                            className="h-7 transition-colors bg-gray-3 rounded-sm px-2 inline-flex items-center"
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                  </div>
                </Disclosure.Panel>{" "}
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordian;
