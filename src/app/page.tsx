"use client";

import Sidenav from "@/components/sidenav";
import CopyScript from "@/components/copyScript";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-row  justify-between bg-gray-2 font-[Open_Sans]">
      <Sidenav  />

      <CopyScript />
    </div>
  );
}
