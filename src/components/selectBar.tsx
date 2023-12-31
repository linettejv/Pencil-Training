import { useState } from "react";
import { Select } from "./select";
import { Target } from "@/components-ui/icons";
import { SecondaryButton } from "./button/secondary-button";
import { PrimaryButton } from "./button/primary-button";

const OBJECTIVES = [
  { id: "Conversion", label: "CONVERSION" },
  { id: "Awareness", label: "AWARENESS" },
  { id: "Traffic", label: "TRAFFIC" },
];

const TARGETINGS = [
  { id: "Acquisition", label: "ACQUISITION" },
  { id: "Retargeting", label: "RETARGETING" },
  { id: "Retention", label: "RETENTION" },
];

const METRICS = [
  { id: "roas", label: "ROAS" },
  { id: "cpa", label: "CPA" },
  { id: "ctr", label: "CTR" },
  { id: "cpc", label: "CPC" },
  { id: "cpm", label: "CPM" },
];

export const SelectBar = () => {
  const [objective, setObjective] = useState(OBJECTIVES[0]);
  const [targeting, setTargeting] = useState(TARGETINGS[0]);
  const [metric, setMetric] = useState(METRICS[0]);

  return (
    <div className="flex flex-col pr-[34px]">
      <div className="w-full h-[70px] flex items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="flex pl-[20px]">
            <Target />
            <div className="pr-4 pl-2  text-base text-gray-7">Show predictions for:</div>
          </div>
          <Select
            label="Objectives"
            options={OBJECTIVES}
            selectedOption={objective}
            optionLabelKey="id"
            selectedOptionLabelKey="id"
            onOptionClick={(option) => {
              setObjective(option);
            }}
            customWidth="w-[190px]"
            isUppercaseLabel={false}
            isThemeSensitive={true}
            popperPlacement="bottom-start"
          />
          <Select
            label="Targeting"
            options={TARGETINGS}
            selectedOption={targeting}
            selectedOptionLabelKey="id"
            optionLabelKey="id"
            onOptionClick={(option) => {
              setTargeting(option);
            }}
            customWidth="w-[188px]"
            isUppercaseLabel={false}
            isThemeSensitive={true}
            popperPlacement="bottom-start"
          />
          <Select
            label="Metric"
            options={METRICS}
            selectedOption={metric}
            selectedOptionLabelKey="label"
            onOptionClick={(option) => {
              setMetric(option);
            }}
            customWidth="w-[139px]"
            isUppercaseLabel={false}
            isThemeSensitive={true}
            popperPlacement="bottom-start"
          />
        </div>

        <PrimaryButton label={"Generate copy"} />
      </div>

      <div className="w-full h-[1px] bg-gray-3 mb-5"></div>
    </div>
  );
};
