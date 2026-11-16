import { Settings, Gem, Cog, Handshake } from "lucide-react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Gallery from "../components/Gallery";

const features = [
  {
    icon: Settings,
    title: "High Precision",
    subtitle: "CNC Cutting",
  },
  {
    icon: Gem,
    title: "Premium",
    subtitle: "Quality Finish",
  },
  {
    icon: Cog,
    title: "Custom Designs",
    subtitle: "& Solutions",
  },
  {
    icon: Handshake,
    title: "On-Time",
    subtitle: "Delivery",
  },
];

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden pb-20 lg:pb-0">
      <Hero />

      {/* Features Strip */}
      <section className="bg-[#fff4df] border-y border-[#e6cda9]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  flex items-center justify-start sm:justify-center
                  gap-3 py-5 sm:py-6 px-4
                  ${index % 2 === 0 ? "border-r border-[#dfc5a0]" : ""}
                  ${index < 2 ? "border-b md:border-b-0 border-[#dfc5a0]" : ""}
                  ${index !== 3 ? "md:border-r border-[#dfc5a0]" : "md:border-r-0"}
                `}
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Icon size={23} className="text-[#995018] sm:w-7 sm:h-7" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#49220d]">
                    {feature.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#79502d] mt-1">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Home Sections */}
      <Services />
      <About />
      <Gallery />
    </main>
  );
};

export default Home;
