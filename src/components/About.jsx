import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import workshopImage from "../assets/sss.png";

const About = () => {
  const points = [
    "Precision CNC wood cutting",
    "Creative and customized designs",
    "Quality craftsmanship",
    "Solutions for residential and commercial projects",
  ];

  return (
    <section className="bg-[#fffaf0] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 sm:gap-12 items-center">
        {/* Image */}
        <div className="relative w-full">
          <img
            src={workshopImage}
            alt="Right Cut CNC Works workshop"
            loading="lazy"
            className="w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[480px] object-cover rounded-2xl shadow-lg"
          />

          {/* Image Badge */}
          <div className="absolute -bottom-4 right-3 sm:-bottom-5 sm:-right-4 bg-[#71350f] text-white px-5 py-3 sm:p-5 rounded-xl shadow-lg">
            <p className="text-[#e9a83f] font-bold text-xl sm:text-2xl">CNC</p>
            <p className="text-xs sm:text-sm">Precision & Creativity</p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5 md:mt-0">
          <p className="text-[#b8752c] font-bold tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
            ABOUT OUR COMPANY
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#49220d] mt-3 sm:mt-4 leading-tight">
            Creating Beautiful Designs With
            <span className="text-[#b8752c]"> CNC Precision</span>
          </h2>

          <p className="text-sm sm:text-base text-[#80634b] mt-4 sm:mt-6 leading-7 sm:leading-8">
            Welcome to Right Cut CNC Works. We specialize in precision CNC wood
            cutting, decorative jali designs, 3D carving and customized wooden
            solutions. Our goal is to transform creative ideas into beautiful
            designs with attention to detail.
          </p>

          {/* Feature Points */}
          <div className="mt-6 sm:mt-7 space-y-3 sm:space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-[#b8752c] shrink-0 mt-0.5"
                />

                <span className="text-[#49220d] font-medium text-sm sm:text-base leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-3 mt-7 sm:mt-9 min-h-12 w-full sm:w-auto bg-[#71350f] hover:bg-[#a65b19] active:scale-95 text-white px-7 py-3 sm:py-4 rounded-full font-semibold transition-all"
          >
            Discover More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
