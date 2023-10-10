import { ArrowDown, Heart } from "@/components-ui/icons";
import { Ideas } from "@/components-ui/icons";
import { Projects } from "@/components-ui/icons";
import { Benchmark } from "@/components-ui/icons";
import { Insights } from "@/components-ui/icons";
import { AssetLib } from "@/components-ui/icons";
import { Speedometer } from "@/components-ui/icons";
import { BenchMarks } from "@/components-ui/icons";

import { NavigationButton } from "./button/navigation-button";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Sidenav = () => {
  return (
    <div className="w-[180px] min-w-[180px] h-full flex flex-col justify-between bg-white transition-colors   pb-3 border-r border-gray-3  z-20">
      <div className="px-[20px] overflow-y-auto ">
        <div className="pb-[50px] pt-[27.11px]">
          <img src="assets/images/pencil-logo.png" alt="logo" />
        </div>

        <div className="leading-[20px] pt-[2px] ml-[13px] mr-[14px] my-2 text-gray-7 text-base font-semibold flex justify-between flex-row">
          Hydrant
          <ArrowDown />
        </div>

        <Link href="/projects">
          <NavigationButton
            IconComponent={Ideas}
            label="Ideas"
            isActive={false}
            imgSrc={"assets/icons/copy-t.svg"}
          />
        </Link>

        <Link href="/benchmark">
          <NavigationButton
            IconComponent={Insights}
            label="Insights"
            imgSrc="assets/icons/benchmarks'.svg"
          />
        </Link>

        <Link href="/benchmark">
          <NavigationButton
            IconComponent={BenchMarks}
            label="Benchmarks"
            imgSrc="assets/icons/benchmarks'.svg"
          />
        </Link>
        <div className="border-t border-gray-3 h-[1px] w-full my-3" />

        <NavigationButton
          IconComponent={AssetLib}
          label="Asset library"
          isActive={false}
          imgSrc="assets/icons/brand-kit.svg"
          onClick={() => {
            console.log("clicked");
          }}
        />

        <NavigationButton
          IconComponent={Benchmark}
          label="Brand Kit"
          isActive={false}
          imgSrc="assets/icons/asset-library.svg"
        />

        <NavigationButton
          IconComponent={Projects}
          label="Copy"
          isActive={true}
          imgSrc="assets/icons/insights.svg"
        />

        <NavigationButton
          IconComponent={Heart}
          label="Templates"
          isActive={false}
          imgSrc="assets/icons/insights.svg"
        />

        <NavigationButton
          IconComponent={Heart}
          label="Scenes"
          isActive={false}
          imgSrc="assets/icons/insights.svg"
        />
      </div>
      <div className="px-[20px] py-[4px] overflow-y-auto">
        <NavigationButton
          IconComponent={Speedometer}
          label="Assistant on"
          imgSrc="assets/icons/ideas.svg"
        />
        <NavigationButton
          IconComponent={Speedometer}
          label="Notification"
          imgSrc="assets/icons/ideas.svg"
        />{" "}
        <NavigationButton
          IconComponent={Speedometer}
          label="Account"
          imgSrc="assets/icons/ideas.svg"
        />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc6AjnpDkAkfew6zekFYNJaB6SFE5OnjFVJrCCq1fa1WpynMA/viewform"
          target="_blank"
          rel="noreferrer"
        >
          <NavigationButton
            IconComponent={Speedometer}
            label="Help Center"
            imgSrc="assets/icons/Hearts.svg"
          />
        </a>
        <a
          href="https://trypencil.tapfiliate.com/"
          target="_blank"
          rel="noreferrer"
        >
          <NavigationButton
            IconComponent={Speedometer}
            label="Refer &amp; earn"
            imgSrc="assets/icons/copy-t.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
