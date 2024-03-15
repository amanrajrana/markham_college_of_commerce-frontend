"use client";

import Heading2 from "@/components/Heading2";
import SubmitButton from "@/components/SubmitButton";
import React, { useEffect, useState } from "react";

export default function Warring() {
  const [disclaimer, setDisclaimer] = useState(true);

  // Store disclaimer in cookies
  const storeDisclaimer = () => {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

    document.cookie = `disclaimer=true; expires=${date.toUTCString()}; path=/`;
    setDisclaimer(true);
  };

  useEffect(() => {
    if (document.cookie.includes("disclaimer=true")) {
      setDisclaimer(true);
    } else {
      setDisclaimer(false);
    }
  }, [disclaimer, setDisclaimer]);

  if (disclaimer) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-xl bg-white p-4 rounded-md flex flex-col m-4">
        <Heading2 headingText={"Disclaimer"} />

        <p className="border-t-2 border-black pt-4">
          Please be informed that this website is not affiliated with Markham
          College of Commerce, Hazaribagh. It has been independently developed
          by a student of Markham College. The data displayed on this website is
          for demonstration purposes only and holds no association with the
          college.
        </p>
        <div className="w-24 self-end mt-4" onClick={storeDisclaimer}>
          <SubmitButton text={"Got It"} />
        </div>
      </div>
    </div>
  );
}
