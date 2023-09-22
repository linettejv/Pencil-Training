"use client";

import Accordian from "@/components/accordian";
import { Number1 } from "../../../public/assets/icons"; 
import { Number2 } from "../../../public/assets/icons";
import { Number3 } from "../../../public/assets/icons";



// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Projects Page!</h1>
      <div className="items-center flex flex-col " >
        <Accordian showOptions={false} heading={"Brand Description"} NumberIcon={Number1}/>
        <Accordian showOptions={false} heading={"Product Description"} NumberIcon={Number2}/>
        <Accordian showOptions={true} heading={"Topic"} NumberIcon={Number3}/>
      </div>
    </>
  );
}


