import { NavigationButton } from "./navigation-button";
import { Heart } from "../components-ui/icons";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Sidenav = () => {
  // console.log(Heart);

  return (
    <div className="w-[180px] min-w-[180px] h-[800px] flex flex-col justify-between bg-white transition-colors  pt-10 pb-3 border-r border-gray-3  z-20">
      <div className="px-2 h-full overflow-y-auto">
        <div className="mb-3">
          <img className="px-7" src="assets/icons/pencil-logo.png" alt="logo" />
          <div className="border-t border-gray-3 h-[1px] w-full my-3" />

          <NavigationButton
            IconComponent={Heart}
            label="Projects"
            isActive={true}
            imgSrc="assets/icons/Heart.svg"
          />

          <div className="border-t border-gray-3 h-[1px] w-full my-3" />
          <Link href="/benchmark">
            <NavigationButton
              IconComponent={Heart}
              label="Benchmarks"
              imgSrc="assets/icons/benchmarks'.svg"
            />
          </Link>
          <div className="border-t border-gray-3 h-[1px] w-full my-3" />

          <NavigationButton
            IconComponent={Heart}
            label="Brand library"
            isActive={true}
            imgSrc="assets/icons/brand-kit.svg"
            onClick={() => {
              console.log("clicked");
            }}
          />

          <NavigationButton
            IconComponent={Heart}
            label="Asset library"
            isActive={true}
            imgSrc="assets/icons/asset-library.svg"
          />

          <NavigationButton
            IconComponent={Heart}
            label="Template library"
            isActive={true}
            imgSrc="assets/icons/insights.svg"
          />
        </div>
      </div>
      <div className="px-2 h-full overflow-y-auto">
        <NavigationButton
          IconComponent={Heart}
          // onClick={show}
          label="Get help"
          imgSrc="assets/icons/ideas.svg"
        />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc6AjnpDkAkfew6zekFYNJaB6SFE5OnjFVJrCCq1fa1WpynMA/viewform"
          target="_blank"
          rel="noreferrer"
        >
          <NavigationButton
            IconComponent={Heart}
            label="Feedback"
            imgSrc="assets/icons/Hearts.svg"
          />
        </a>
        <a
          href="https://trypencil.tapfiliate.com/"
          target="_blank"
          rel="noreferrer"
        >
          <NavigationButton
            IconComponent={Heart}
            label="Refer &amp; earn"
            imgSrc="assets/icons/copy-t.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
