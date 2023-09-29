import CopyScript from "./copyScript";
import { SelectBar } from "./selectBar";
import { Settings } from "./settings";

export const Content = () => {
  return (
    <>
      <div className="w-full h-fit rounded-lg border border-gray-3 bg-white flex flex-col">
        <SelectBar />
        <div className="w-full h-fit px-8 py-6 flex">
          <Settings />
          <CopyScript />
        </div>
      </div>
    </>
  );
};
