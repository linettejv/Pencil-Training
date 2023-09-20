'use client';

import Sidenav from "@/components/sidenav";
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
      <div className="flex min-h-screen flex-row  justify-between bg-gray-2">
        <Sidenav />
        <div>landing page</div>
      </div>
    </div>
  );
}
