"use client";

import CopyScript from "@/components/copyScript";
import InputControlledComponent from "@/components/input";
import InputLabelPair from "@/components/inputLabelPair";
import Label from "@/components/label";
import InputTextareaPair from "@/components/labelTextareaPair";

import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <CopyScript />
    </div>
  );
}
