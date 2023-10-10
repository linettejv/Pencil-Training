"use client";

import { Header } from "@/components/header";
import { Benchmark } from "./benchmark";
import Sidenav from "@/components/sidenav";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <div className="flex bg-gray-2 h-screen w-screen">
      <Sidenav />
      <div className="flex flex-col bg-gray-2 h-fit w-full m-5">
        <Header title="Benchmarks" />
        <Benchmark />
      </div>
    </div>
     
    </>
  );
}
