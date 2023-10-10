"use client";

import Sidenav from "@/components/sidenav";
import { Header } from "@/components/header";
import { Content } from "@/components/content";

export default function Home() {
  return (
    <div className="flex bg-gray-2 h-screen w-screen">
      <Sidenav />
      <div className="flex flex-col bg-gray-2 h-fit w-full m-5">
        <Header title="Copy" showButton={true} />
        <Content />
      </div>
    </div>
  );
}
