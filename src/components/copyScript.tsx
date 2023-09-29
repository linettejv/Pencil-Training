import React, { useState } from "react";
import InputLabelPair from "./inputLabelPair";
import InputTextareaPair from "./labelTextareaPair";

function CopyScript() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");

  return (
    <div className="px-7 py-6 w-1/2 h-fit flex flex-col rounded-lg border border-solid border-gray-3 bg-white">
      <div className="text-gray-7 font-sans text-lg font-semibold leading-normal">
        Copy script for image or video ads
      </div>
      <div className="flex  flex-col w-full h-full">
        <InputTextareaPair
          label="Body"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          maxLength={300}
        />
        <InputLabelPair
          label="Scene 1"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          maxLength={60}
          placeholder="Enter a copy line into your script"
        />
        <InputLabelPair
          label="Scene 2"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          maxLength={60}
        />
        <InputLabelPair
          label="Scene 3"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          maxLength={60}
        />
        <InputLabelPair
          label="Scene 4"
          value={input5}
          onChange={(e) => setInput5(e.target.value)}
          maxLength={60}
        />
        <InputLabelPair
          label="Scene 5"
          value={input6}
          onChange={(e) => setInput6(e.target.value)}
          maxLength={60}
        />
        <InputLabelPair
          label="CTA"
          value={input7}
          onChange={(e) => setInput7(e.target.value)}
          maxLength={25}
        />
        <InputLabelPair
          label="Offer"
          value={input8}
          onChange={(e) => setInput8(e.target.value)}
          maxLength={25}
          placeholder="Add Offer"
        />
      </div>
    </div>
  );
}

export default CopyScript;
