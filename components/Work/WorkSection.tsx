import ProjectCCanvas from "./ProjectCCanvas";
import ProjectACanvas from "./ProjectACanvas.jsx";
import ProjectBCanvas from "./ProjectBCanvas.jsx";

export default function WorkSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 text-gray-600">
      <div className="w-[320px] h-[240px]">
        {/* <Image src={project} width={280} height={280} alt={"project"} /> */}
        <ProjectACanvas />
        <h3 className="text-lg font-semibold mt-2">
          Smart Planter - Mechanics
        </h3>
        <p className="text-gray-500 text-sm">Can create the imagined.</p>
      </div>

      <div className="w-[320px] h-[240px]">
        {/* <Image src={project} width={280} height={280} alt={"project"} /> */}
        <ProjectBCanvas />
        <h3 className="text-lg font-semibold mt-2">
          Smart Planter - Control System
        </h3>
        <p className="text-gray-500 text-sm">Can automate anything.</p>
      </div>

      <div className="w-[320px] h-[240px]">
        {/* <Image src={project} width={280} height={280} alt={"project"} /> */}
        <ProjectCCanvas />
        <h3 className="text-lg font-semibold mt-2">
          Raspberry Pi Cooling Case
        </h3>
        <p className="text-gray-500 text-sm">
          I know my units. 4000+ downloads on GrabCad
        </p>
      </div>
    </div>
  );
}
