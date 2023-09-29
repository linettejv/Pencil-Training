"use client";

import { Number1, Number2, Number3 } from "@/components-ui/icons";
import Accordian from "@/components/accordian";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <div className="flex flex-col h-fit gap-5">
        <Accordian
          showOptions={false}
          heading={"Brand Description"}
          NumberIcon={Number1}
          description="Your gateway to brand brilliance – click to discover the essence of your brand's identity and message"
          inputPlaceholder="Brand Description"
        />
        <Accordian
          showOptions={false}
          heading={"Product Description"}
          NumberIcon={Number2}
          description="Unlock the magic of our product – click here to delve into its features, benefits, and why it's a must-have for you"
          inputPlaceholder="Product Description"
        />
        <Accordian
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
