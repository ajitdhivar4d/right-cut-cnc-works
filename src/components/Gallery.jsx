import { useMemo, useState } from "react";
import { X, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Automatically load images from src/assets/gallery-images
const imageModules = import.meta.glob(
  "../assets/gallery-images/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const getCategory = (filename) => {
  const name = filename.toLowerCase();

  if (name.includes("jali") || name.includes("mdf")) {
    return "MDF Jali";
  }

  if (name.includes("carving") || name.includes("3d")) {
    return "Wood Carving";
  }

  if (name.includes("furniture")) {
    return "Furniture";
  }

  if (name.includes("decorative") || name.includes("panel")) {
    return "Decorative";
  }

  return "Other";
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = useMemo(() => {
    return Object.entries(imageModules).map(([path, src], index) => {
      const filename = path.split("/").pop();

      return {
        id: index,
        src,
        name: filename.replace(/\.[^/.]+$/, ""),
        category: getCategory(filename),
      };
    });
  }, []);

  const categories = [
    "All",
    "MDF Jali",
    "Wood Carving",
    "Furniture",
    "Decorative",
    "Other",
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section className="bg-[#fff8ec] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-9 sm:mb-12">
          <p className="text-[#b8752c] font-bold tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
            OUR PORTFOLIO
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#49220d] mt-3">
            Our CNC Design Gallery
          </h2>

          <p className="text-sm sm:text-base text-[#80634b] mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of creative CNC wood cutting, decorative jali
            and carving designs.
          </p>

          <div className="w-16 sm:w-20 h-1 bg-[#c77b25] mx-auto mt-5 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-3 justify-start sm:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-[#71350f] text-white"
                  : "bg-white text-[#71350f] border border-[#dfc5a0] hover:bg-[#f4e4cc]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.name}`}
                className="group relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer bg-[#49220d] shadow-sm hover:shadow-xl active:scale-[0.98] transition-all text-left"
              >
                <img
                  src={image.src}
                  alt={image.name.replace(/[-_]/g, " ")}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[#e9a83f] text-[9px] sm:text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </p>

                    <h3 className="text-white text-sm sm:text-lg font-bold mt-1 capitalize line-clamp-2">
                      {image.name.replace(/[-_]/g, " ")}
                    </h3>
                  </div>

                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-[#c77b25] text-white flex items-center justify-center">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 px-4 bg-white rounded-xl border border-[#ead8bf]">
            <ImageIcon size={40} className="mx-auto text-[#b8752c]" />

            <h3 className="text-lg sm:text-xl font-bold text-[#49220d] mt-4">
              No Images Found
            </h3>

            <p className="text-sm text-[#80634b] mt-2">
              Add images to your gallery-images folder or choose another
              category.
            </p>

            <button
              onClick={() => setActiveCategory("All")}
              className="mt-5 min-h-11 text-[#a65b19] font-bold"
            >
              View All Images
            </button>
          </div>
        )}

        {/* Enquiry Button */}
        <div className="text-center mt-9 sm:mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-12 bg-[#71350f] hover:bg-[#a65b19] active:scale-95 text-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all"
          >
            Enquire About Your Design
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-[#c77b25] flex items-center justify-center transition"
          >
            <X size={26} />
          </button>

          <div
            className="max-w-5xl w-full max-h-[85dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.name.replace(/[-_]/g, " ")}
              className="w-full max-h-[75dvh] object-contain rounded-xl"
            />

            <h3 className="text-white text-center text-lg sm:text-xl font-bold mt-4 capitalize">
              {selectedImage.name.replace(/[-_]/g, " ")}
            </h3>

            <p className="text-center text-[#e9a83f] text-xs sm:text-sm mt-2">
              {selectedImage.category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
