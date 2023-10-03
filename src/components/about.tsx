import {
  Amazon,
  Checkbox,
  Facebook,
  Instagram,
  QuestionInverse,
  Tiktok,
  Youtube,
} from "@/components-ui/icons";
import CopyScript from "./copyScript";
import { SelectBar } from "./selectBar";
import { Settings } from "./settings";
import { Tooltip } from "@/components-ui/tooltip/tooltip";

export const About = () => {
  return (
    <>
      <div className="px-6 w-full h-[106px] rounded-lg border border-gray-3 bg-white flex flex-col justify-evenly">
        <div className="flex items-center">
          <div className="flex items-center justify-center h-[30px] w-[30px]"><Checkbox /></div>
          <div className="flex items-center justify-center h-[30px] w-[30px]"><Facebook /></div>
          <div className="flex items-center justify-center h-[30px] w-[30px]"><Youtube /></div>
          <div className="flex items-center justify-center h-[30px] w-[30px]"><Amazon /></div>
          <div className="flex items-center justify-center h-[30px] w-[30px]"><Instagram /></div>
          <div className="flex items-center justify-center h-[30px] w-[30px]"><Tiktok /></div>
          <div className="flex items-center justify-center h-[30px] px-5">Generate ad script</div>
          <Tooltip
                    PopComponent={
                      <div className="bg-gray-7 text-white text-sm py-2 px-3 rounded-md whitespace-pre-wrap w-[164px]">
                        click here to generate ad script
                      </div>
                    }
                    RefComponent={
                      <QuestionInverse className="h-6 w-6 text-gray-5 dark:text-gray-7" />
                    }
                  />
        </div>
        <div className="flex text-base text-gray-6 pl-9">
        Generate copy scripts for image or video ads using your brand description, product description, a topic and a style.
        </div>
      </div>
    </>
  );
};
