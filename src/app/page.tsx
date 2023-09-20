'use client';

import Sidenav from "@/components/sidenav";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-row  justify-between bg-gray-2">
        <Sidenav />
        <div>landing page</div>
      </div>
    </>
  );
}
