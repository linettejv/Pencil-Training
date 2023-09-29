import Page from "@/app/projects/page";
import { SelectBar } from "./selectBar";
import { About } from "./about";

export const Settings = () => {
  return (
    <>
      <div className="w-1/2 h-fit flex flex-col justify-evenly gap-6  pr-6">
        <About />
        <Page />
      </div>
    </>
  );
};
