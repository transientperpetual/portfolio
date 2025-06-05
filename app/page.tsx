import Image from "next/image";
import SocialLinks from "../components/SocialLinks";
import Tabs from "../components/Tabs";
import UniverseProfile from "../components/UserProfile";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#2D2D2D] py-12 p-8">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-12 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="md:flex-1 text-[#2D2D2D] order-2 md:order-1 text-left md:text-left">
          <h1 className="text-3xl font-semibold mb-4 text-center md:text-left">
            Ankit Jangid
          </h1>
          <p className="mb-4 text-lg text-[#575656] md:pr-[200px] md:pl-0 px-2">
            I am interested in building things. To create products that are
            functional is the end. My skills and tools are just the means.
          </p>
          <p className="mb-4 text-lg text-[#575656] md:pr-[200px] md:pl-0 px-2">
            Outside of work output I like to read, run, cycle.
          </p>
          <p className="mb-6 text-lg text-[#575656] md:pr-[200px] md:pl-0 px-2">
            I am always excited to learn through conversations—please feel free
            to reach out if you’d like to collaborate or chat!
          </p>
          <section className="flex justify-center md:justify-start">
            <SocialLinks />
          </section>
        </div>

        {/* Image */}
        <div className="md:flex flex-col items-center order-1 md:order-2 ">
          <UniverseProfile />
        </div>
      </section>
      <section className="mt-6">
        <Tabs />
      </section>
    </main>
  );
}
