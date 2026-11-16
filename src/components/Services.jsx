import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import cncWood from "../assets/cnc-wood-cutting.jpg";
import mdfJali from "../assets/mdf-jali.jpg";
import carving from "../assets/3d-wood-carving.jpg";
import furniture from "../assets/furniture-panels.jpg";
import decorative from "../assets/decorative-panels.jpg";
import custom from "../assets/custom-designs.jpg";

const services = [
  {
    title: "CNC Wood Cutting",
    description: "Precision cutting for beautiful wooden designs and patterns.",
    image: cncWood,
  },
  {
    title: "MDF Jali Designs",
    description: "Decorative MDF jali patterns for homes and interiors.",
    image: mdfJali,
  },
  {
    title: "3D Wood Carving",
    description: "Detailed 3D carving with premium finishing.",
    image: carving,
  },
  {
    title: "Furniture Panels",
    description: "Custom CNC panels for furniture and interior projects.",
    image: furniture,
  },
  {
    title: "Decorative Panels",
    description: "Elegant decorative panels for walls and spaces.",
    image: decorative,
  },
  {
    title: "Custom Designs",
    description: "Unique CNC designs made according to your requirements.",
    image: custom,
  },
];

const Services = () => {
  return (
    <section className="bg-[#fff8ec] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-9 sm:mb-12">
          <p className="text-[#b8752c] text-xs sm:text-sm font-bold tracking-[2px] sm:tracking-[3px]">
            OUR SERVICES
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#49220d] mt-3 leading-tight">
            Premium CNC Wood Cutting Services
          </h2>

          <p className="text-sm sm:text-base text-[#80634b] mt-4 max-w-2xl mx-auto leading-relaxed">
            From intricate designs to large-scale projects, we deliver
            excellence in every cut.
          </p>

          <div className="w-16 sm:w-20 h-1 bg-[#c77b25] mx-auto mt-5 rounded-full" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#ead8bf] active:scale-[0.99]"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-48 md:h-56 lg:h-60 overflow-hidden bg-[#4b2814]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#49220d] group-hover:text-[#bd7426] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#80634b] leading-relaxed mt-2 sm:mt-3">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 mt-4 sm:mt-5 min-h-11 text-sm font-bold text-[#a65b19] hover:text-[#49220d] transition-colors"
                >
                  Get Enquiry
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-9 sm:mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 min-h-12 w-full sm:w-auto bg-[#71350f] hover:bg-[#a65b19] active:scale-95 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
