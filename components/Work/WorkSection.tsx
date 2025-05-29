import Image from "next/image";
import project from "../../public/project.png";
import ThreeCanvas from "./ProjectCCanvas";
import ProjectACanvas from "./ProjectACanvas.jsx";
import ProjectBCanvas from "./ProjectBCanvas.jsx";

export default function WorkSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
      <div className=" rounded-xl w-[300px] h-[300px]">
        {/* <Image src={project} width={280} height={280} alt={"project"} /> */}
        <ProjectACanvas />
        <h3 className="text-xl font-semibold mb-2">
          Smart Planter - Mechanics
        </h3>
        <p className="text-gray-600 text-sm">
          Short description of this feature that explains the value.
        </p>
      </div>

      <div className=" rounded-xl w-[300px] h-[300px]">
        {/* <Image src={project} width={280} height={280} alt={"project"} /> */}
        <ProjectBCanvas />
        <h3 className="text-xl font-semibold mb-2">
          Smart Planter - Control System
        </h3>
        <p className="text-gray-600 text-sm">
          Short description of this feature that explains the value.
        </p>
      </div>

      <div className=" rounded-xl w-[300px] h-[300px]">
        {/* <Image src={project} width={280} height={280} alt={"project"} /> */}
        <ThreeCanvas />
        <h3 className="text-xl font-semibold mb-2">
          Raspberry Pi Cooling Case
        </h3>
        <p className="text-gray-600 text-sm">
          I know my units. 4000+ downloads on GrabCad
        </p>
      </div>
    </div>
  );
}
