"use client";

import { Number1, Number2, Number3 } from "@/components-ui/icons";
import Accordian from "@/components/accordian";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function SettingsPanel() {
  return (
    <>
      <div className="flex flex-col h-fit gap-5">
        <Accordian tooltip={false}>
          <div className="flex flex-row h-[46.42px] w-[100%]">
            <img src="assets/chicken-bowl.png" alt="bowl img" />
            <div className="pl-3">
              <div className="text-base font-bold ">Chicken Bowl</div>
              <div className="text-base text-gray-6">Meals</div>
            </div>
          </div>
        </Accordian>
        <Accordian
          tooltip={true}
          showOptions={false}
          heading={"Brand Description"}
          NumberIcon={Number1}
          description="Your gateway to brand brilliance – click to discover the essence of your brand's identity and message"
          inputPlaceholder="Brand Description"
        />
        <Accordian
          tooltip={true}
          showOptions={false}
          heading={"Product Description"}
          NumberIcon={Number2}
          description="Unlock the magic of our product – click here to delve into its features, benefits, and why it's a must-have for you"
          inputPlaceholder="Product Description"
        />
        <Accordian
          tooltip={true}
          showOptions={true}
          heading={"Topic"}
          NumberIcon={Number3}
          description="Dive deeper into this topic – click here to explore the ins and outs, gain insights, and stay informed"
          inputPlaceholder="topic"
        />
      </div>
    </>
  );
}
