import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import blogData from "../data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#fff8ec] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-[#49220d]">Article Not Found</h1>

        <Link to="/blog" className="mt-6 text-[#a65b19] font-semibold">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#fff8ec] min-h-screen">
      {/* Article Hero */}
      <section className="bg-[#49220d] py-16 px-4 text-center">
        <p className="text-[#e9a83f] font-bold tracking-widest text-sm">
          {blog.category}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-white mt-5 max-w-4xl mx-auto">
          {blog.title}
        </h1>

        <div className="flex justify-center items-center gap-2 text-[#f1dfca] mt-6 text-sm">
          <CalendarDays size={16} />
          {blog.date}
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[280px] md:h-[450px] object-cover rounded-2xl shadow-lg"
        />

        <div className="bg-white rounded-2xl border border-[#ead8bf] p-6 md:p-10 mt-10">
          <h2 className="text-2xl font-bold text-[#49220d] mb-6">
            {blog.title}
          </h2>

          <div className="text-[#80634b] leading-8 whitespace-pre-line">
            {blog.content}
          </div>

          <div className="border-t border-[#ead8bf] mt-10 pt-8">
            <h3 className="text-xl font-bold text-[#49220d]">
              Need CNC Cutting Services?
            </h3>

            <p className="text-[#80634b] mt-3">
              Contact Right Cut CNC Works for customized CNC cutting, MDF jali
              and wood carving requirements.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-[#71350f] hover:bg-[#a65b19] text-white px-7 py-3 rounded-full font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mt-8 text-[#a65b19] font-semibold"
        >
          <ArrowLeft size={18} />
          Back to All Articles
        </Link>
      </section>
    </main>
  );
};

export default BlogDetails;
