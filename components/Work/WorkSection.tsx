import Image from "next/image";
import project from "../../public/project.png";
import ThreeCanvas from "./ThreeCanvas";

export default function WorkSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className=" rounded-xl shadow-md bg-gray-50 w-[300px] h-[302px] p-4"
        >
          {/* <Image src={project} width={280} height={280} alt={"project"} /> */}
          <ThreeCanvas />
          <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
          <p className="text-gray-600 text-sm">
            Short description of this feature that explains the value.
          </p>
        </div>
      ))}
    </div>
  );
}
