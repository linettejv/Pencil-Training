import { useState } from "react";
import { About } from "./about";
import { Select } from "./select";
import SettingsPanel from "./settings-panel";
import { Modal } from "./modal";

const NARRATIVE_TYPE = [
  { id: "Problem-solution", label: "PROBLEM-SOLUTION" },
  { id: "Narrative-type2", label: "NARRATIVE-TYPE2" },
  { id: "Narrative-type3", label: "NARRATIVE-TYPE3" },
];

export const Settings = () => {
  const [narrativeType, setNarrativeType] = useState(NARRATIVE_TYPE[0]);
  return (
    <>
      <div className="w-1/2 h-fit flex flex-col justify-evenly gap-6  pr-6">
        <About />
        <SettingsPanel />
        <Select
          label="Narrative type"
          options={NARRATIVE_TYPE}
          selectedOption={narrativeType}
          optionLabelKey="id"
          selectedOptionLabelKey="id"
          onOptionClick={(option) => {
            setNarrativeType(option);
          }}
          customWidth="w-[260px]"
          isUppercaseLabel={false}
          isThemeSensitive={true}
          popperPlacement="bottom-start"
        />
        <Modal isOpen={true}>
          hellohabsdfjvhbjah
          dlkjvblkjdfblk
          sdkjfvblkj
        </Modal>
      </div>
    </>
  );
};
