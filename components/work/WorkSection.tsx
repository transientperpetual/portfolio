import ProjectCCanvas from "./ProjectCCanvas";
import ProjectACanvas from "./ProjectACanvas.jsx";
import ProjectBCanvas from "./ProjectBCanvas.jsx";
import Link from "next/link";

export default function WorkSection() {
  return (
    <div className="grid grid-cols-1 gap-24 text-gray-600 select-none lg:grid-cols-3">
      {/* <div className="w-[240px] h-[240px] md:w-[320px] "> */}
      <div className="h-[240px] w-[320px] ">
        <ProjectACanvas />
        <Link
          href={`/work/smart-planter-mechanics-and-fog-system`}
          className="cursor-pointer"
        >
          <div className="hover:underline">
            <h3 className="mt-2 text-lg font-semibold hover:underline hover:text-gray-800">
              Smart Planter - Mechanics
            </h3>
            <p className="text-sm text-gray-500">Can create the imagined.</p>
          </div>
        </Link>
      </div>

      <div className="w-[320px] h-[240px]">
        <ProjectBCanvas />

        <Link
          href={`/work/smart-planter-control-system`}
          className="cursor-pointer"
        >
          <div className="hover:underline">
            <h3 className="mt-2 text-lg font-semibold hover:underline hover:text-gray-800">
              Smart Planter - Control System
            </h3>
            <p className="text-sm text-gray-500">Can automate anything.</p>
          </div>
        </Link>
      </div>

      <div className="w-[320px] h-[240px] mb-6">
        <ProjectCCanvas />
        <Link
          href={`/work/raspberry-pi-4-enclosure`}
          className="cursor-pointer"
        >
          <div className="hover:underline">
            <h3 className="mt-2 text-lg font-semibold hover:underline hover:text-gray-800">
              Raspberry Pi Cooling Case
            </h3>
            <p className="text-sm text-gray-500">
              I know my units. 4000+ downloads on GrabCad
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
