"use client";

import { useState } from "react";
import WorkSection from "./Work/WorkSection";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<"work" | "tech" | "essays">(
    "work"
  );

  return (
    <>
      <div className="flex gap-6 py-6 max-w-6xl mx-auto text-md md:text-lg">
        <button
          className={`${
            activeTab === "work"
              ? "font-semibold text-black border-b-2 border-black"
              : "text-[#999999]"
          } pb-1 transition-all`}
          onClick={() => setActiveTab("work")}
        >
          WORK
        </button>
        <button
          className={`${
            activeTab === "tech"
              ? "font-semibold text-black border-b-2 border-black"
              : "text-[#999999]"
          } pb-1 transition-all`}
          onClick={() => setActiveTab("tech")}
        >
          TECH STACK
        </button>
        <button
          className={`${
            activeTab === "essays"
              ? "font-semibold text-black border-b-2 border-black"
              : "text-[#999999]"
          } pb-1 transition-all`}
          onClick={() => setActiveTab("essays")}
        >
          ESSAYS
        </button>
      </div>

      <section className="flex justify-center">
        {activeTab === "work" && <WorkSection />}
        {activeTab === "tech" && (
          <div className="text-center">Coming soon: Tech Stack</div>
        )}
        {activeTab === "essays" && (
          <div className="text-center">Coming soon: Essays</div>
        )}
      </section>
    </>
  );
}
