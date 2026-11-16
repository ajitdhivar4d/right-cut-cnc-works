import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-cnc.jpg";

const slides = [
  {
    eyebrow: "WELCOME TO RIGHT CUT CNC WORKS",
    title: "Precision CNC",
    highlight: "Wood Cutting Solutions",
    description:
      "Transforming wood into amazing designs with precision, creativity and perfection.",
    button: "Explore Our Work",
  },
  {
    eyebrow: "CRAFTED WITH PRECISION",
    title: "Beautiful MDF",
    highlight: "Jali Designs",
    description:
      "Discover elegant decorative wooden patterns for homes and commercial spaces.",
    button: "View Our Services",
  },
  {
    eyebrow: "DESIGN YOUR DREAM SPACE",
    title: "Premium 3D",
    highlight: "Wood Carving",
    description:
      "Bring your ideas to life with detailed CNC carving and premium craftsmanship.",
    button: "Contact Us",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[500px] sm:min-h-[540px] md:min-h-[620px] flex items-center overflow-hidden bg-[#261207]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right transition-all duration-700"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(24,10,3,0.95) 0%,
              rgba(35,15,5,0.80) 48%,
              rgba(25,10,3,0.35) 100%
            ),
            url(${heroImage})
          `,
        }}
      />

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b0b03]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[#e9a83f] text-[10px] sm:text-xs md:text-sm font-bold tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-5 leading-relaxed">
            <span className="hidden sm:inline">━━ </span>
            {slide.eyebrow}
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#fffaf0] leading-tight">
            {slide.title}
            <span className="block text-[#e9a83f] mt-2">{slide.highlight}</span>
          </h2>

          <p className="text-[#f1dfca] text-sm sm:text-base md:text-lg mt-5 sm:mt-6 max-w-lg leading-relaxed">
            {slide.description}
          </p>

          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-3 mt-7 sm:mt-8 min-h-12 px-6 sm:px-7 py-3 sm:py-4 rounded-full bg-[#c77b25] hover:bg-[#e09a3c] active:scale-95 text-white font-semibold text-sm transition-all duration-300 shadow-lg"
          >
            {slide.button}
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Slider Indicators */}
        <div className="flex items-center gap-3 mt-10 sm:mt-12">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-10 bg-[#e9a83f]" : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Previous Slide */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/50 text-white flex items-center justify-center bg-black/10 hover:bg-[#c77b25] active:scale-95 transition"
      >
        <ChevronLeft size={23} />
      </button>

      {/* Next Slide */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/50 text-white flex items-center justify-center bg-black/10 hover:bg-[#c77b25] active:scale-95 transition"
      >
        <ChevronRight size={23} />
      </button>
    </section>
  );
};

export default Hero;
