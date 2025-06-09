import SocialLinks from "../components/SocialLinks";
import Tabs from "../components/Tabs";
import UniverseProfile from "../components/Universes";

export default async function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <main className="min-h-screen flex flex-col text-[#2d2d2d] md:py-12 px-6">
        <section className="flex flex-col items-center max-w-6xl gap-6 pt-12 mx-auto md:flex-row md:items-start">
          {/* Text Content */}
          <div className="md:flex-1 text-[#2d2d2d] order-2 md:order-1 text-left md:text-left">
            <h1 className="mb-4 text-2xl font-semibold text-center md:text-left">
              Ankit Jangid
            </h1>
            <p className="mb-4 text-md text-[#6d6d6d] md:pr-[200px] md:pl-0 px-2">
              I am interested in building things. To create products that are
              functional is the end. My skills and tools are just the means.
            </p>
            <p className="mb-4 text-md text-[#6d6d6d] md:pr-[200px] md:pl-0 px-2">
              Outside of work output I like to read, run, cycle.
            </p>
            <p className="mb-8 text-md text-[#6d6d6d] md:pr-[200px] md:pl-0 px-2">
              I am always excited to learn through conversations—please feel free
              to reach out if you’d like to collaborate or chat!
            </p>
            <section className="flex justify-center md:justify-start">
              <SocialLinks />
            </section>
          </div>

          {/* Image */}
          <div className="flex-col items-center order-2 ">
            <UniverseProfile />
          </div>
        </section>
        <section className="mt-6">
          <Tabs />
        </section>
      </main>

      <footer className="text-center text-sm text-[#999] py-4">
        © {year} Ankit Jangid. All rights reserved.
      </footer>
    </>
  );
}
