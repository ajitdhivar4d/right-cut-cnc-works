import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import blogData from "../data/blogData";

const Blog = () => {
  return (
    <main className="bg-[#fff8ec] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#49220d] py-20 px-4 text-center">
        <p className="text-[#e9a83f] font-bold tracking-[3px] text-sm">
          OUR BLOG
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
          CNC Ideas & Inspiration
        </h1>

        <p className="text-[#f1dfca] mt-5 max-w-2xl mx-auto">
          Explore CNC technology, decorative designs, woodworking tips and
          creative inspiration.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-10">
          <p className="text-[#b8752c] font-bold tracking-widest text-sm">
            LATEST ARTICLES
          </p>

          <h2 className="text-3xl font-bold text-[#49220d] mt-3">
            Explore Our Articles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#ead8bf] hover:shadow-xl transition group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-[#b8752c]">
                  {blog.category}
                </span>

                <h3 className="text-xl font-bold text-[#49220d] mt-3 leading-snug">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#80634b] mt-4">
                  <CalendarDays size={16} />
                  {blog.date}
                </div>

                <p className="text-[#80634b] mt-4 leading-7">{blog.excerpt}</p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 mt-6 text-[#a65b19] font-bold hover:text-[#49220d] transition"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
