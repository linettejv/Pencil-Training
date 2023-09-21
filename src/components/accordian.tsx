import { Disclosure } from "@headlessui/react";
import { Arrow, ArrowToRight } from "@/components-ui/icons";

export default function Example() {
  return (
    <div className="w-full px-4 pt-16 ">
      <div className="mx-auto w-full max-w-md  border-gray-3 border rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full rounded-md justify-between  text-lg  px-4 py-2 text-left  hover:bg-purple-2  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 border-black border-spacing-1">
                <span>Copy</span>
                {open ? (
                  <Arrow className="rotate-90 delay-100 transition" />
                ) : (
                  <Arrow className="transition delay-100 "/>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 transition ease-in delay-100">
                <div>hi there</div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-2 px-4 py-2 text-left text-sm font-medium text-purple-7 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <img src="assets/icons/arrow.svg" alt="view" />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-5">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}
      </div>
    </div>
  );
}
