"use client";

import Sidenav from "@/components/sidenav";
import CopyScript from "@/components/copyScript";
import { Select } from "@/components/select";
import { SelectBar } from "@/components/selectBar";
import { Tooltip } from "@/components-ui/tooltip/tooltip";
import { QuestionInverse } from "@/components-ui/icons";
import { Header } from "@/components/header";
import { Content } from "@/components/content";

export default function Home() {
  return (
    <div className="flex bg-gray-2 h-screen w-screen">
      <Sidenav />
      {/* <div className="w-full h-[500px] ml-5 rounded-lg border border-solid border-gray-3 bg-white px-7 py-3">
        <SelectBar />
        <CopyScript />
      </div> */}
      <div className="flex flex-col bg-gray-2 h-fit w-full m-5">
        <Header title="Copy" />
        <Content />
      </div>
    </div>
  );
}
