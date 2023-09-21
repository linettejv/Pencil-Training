"use client";

import Example from "@/components/accordian";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Projects Page!</h1>
      <div className="items-center flex flex-col justify-center " >
        <Example />
      </div>
    </>
  );
}


