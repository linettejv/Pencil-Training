"use client";

import Sidenav from "@/components/sidenav";
import CopyScript from "@/components/copyScript";
import { Select } from "@/components/select";
import { SelectBar } from "@/components/selectBar";
import { Tooltip } from "@/components-ui/tooltip/tooltip";
import { QuestionInverse } from "@/components-ui/icons";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-gray-2 min-h-screen">
      <Sidenav />
      <div className="w-full h-full rounded-lg border border-solid border-gray-3 bg-white px-7 py-3">
        <SelectBar />
        <CopyScript />
        
      </div>
    </div>
  );
}
