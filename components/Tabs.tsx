"use client";

import { useState } from "react";
import WorkSection from "./work/WorkSection";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<"work" | "tech" | "essays">(
    "work"
  );

  return (
    <>
      <div className="flex max-w-6xl gap-6 py-6 mx-auto select-none text-md md:text-md">
        <button
          className={`${
            activeTab === "work"
              ? "font-semibold text-[#2d2d2d] border-b-2 border-[#2d2d2d]"
              : "text-[#999999] hover:text-[#2d2d2d]"
          } pb-1  hover:cursor-pointer`}
          onClick={() => setActiveTab("work")}
        >
          WORK
        </button>
        <button
          className={`${
            activeTab === "tech"
              ? "font-semibold text-[#2d2d2d] border-b-2 border-[#2d2d2d]"
              : "text-[#999999] hover:text-[#2d2d2d]"
          } pb-1 hover:cursor-pointer`}
          onClick={() => setActiveTab("tech")}
        >
          TECH STACK
        </button>
        <button
          className={`${
            activeTab === "essays"
              ? "font-semibold text-[#2d2d2d] border-b-2 border-[#2d2d2d]"
              : "text-[#999999] hover:text-[#2d2d2d]"
          } pb-1 hover:cursor-pointer`}
          onClick={() => window.open("https://jangidankit.substack.com/", "_blank")}
        >
          ESSAYS
        </button>
      </div>

      <section className="flex justify-center">
        {activeTab === "work" && <WorkSection />}
        {activeTab === "tech" && (
          <div className="text-center">Adding soon</div>
        )}
      </section>
    </>
  );
}
