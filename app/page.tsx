import Image from "next/image";
import profile from "./profile.jpeg";
import project from "./project.png";
import WorkSection from "@/components/Work/WorkSection";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 flex-col p-12 ">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 px-6 py-12 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="md:flex-1 order-2 md:order-1 text-left md:text-left">
          <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Ankit Jangid
          </h1>
          <p className="mb-4 text-gray-700">
            I am interested in building things. To create products that are
            functional is the end. My skills and tools are just the means.
          </p>
          <p className="mb-4 text-gray-700">
            Outside of work output I like to read, run, cycle.
          </p>
          <p className="text-gray-700">
            I am always excited to learn through conversations—please feel free
            to reach out if you’d like to collaborate or chat!
          </p>
        </div>

        {/* Image */}
        <div className="md:flex flex-col items-center order-1 md:order-2 ">
          <img
            src={profile.src}
            alt="Ankit Jangid"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl"
          />
          <span>change universe</span>
        </div>
      </section>

      <div className="flex gap-2 p-8">
        <span>WORK</span>
        <span>TECH STACK</span>
        <span>ESSAYS</span>
      </div>

      <section className="flex justify-center">
        <WorkSection />
      </section>
    </main>
  );
}
