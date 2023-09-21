"use client";

import { Select } from "@/components/select";
import { useState } from "react";

const objectives = [
  { id: "Conversions", label: "CONVERSIONS" },
  { id: "Awareness", label: "AWARENESS" },
  { id: "Traffic", label: "TRAFFIC" },
];

export default function Home() {
  const [objective, setObjective] = useState(objectives[0]);
  return (
    <div className="flex min-h-screen flex-row  justify-between bg-gray-2">
      {/* <Sidenav />
      <CopyScript /> */}
      <Select
        label="Objectives"
        options={objectives}
        selectedOption={objective}
        selectedOptionLabelKey="id"
        onOptionClick={(option) => {setObjective(option)}}
        customWidth="w-[190px]"
        isUppercaseLabel={true}
        isThemeSensitive={true}
      />
    </div>
  );
}
