import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllBlog } from "../services/BlogService";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router";
const API_URL = import.meta.env.VITE_API_URL;
function Blog() {
  const [allBlog, selectAllBlog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  useEffect(() => {
    const fetchAllBlog = async () => {
      const res = await getAllBlog();
      console.log(JSON.stringify(res, null, 2));

      selectAllBlog(res.data);
      setFilteredBlogs(res.data);
    };
    fetchAllBlog();
  }, []);

  useEffect(() => {
    const filtered = allBlog?.filter((blog) =>
      blog.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, allBlog]);

  const getPreviewText = (content, maxLength = 150) => {
    let text = "";

    for (const block of content) {
      if (block.type === "paragraph" && block.children) {
        for (const child of block.children) {
          if (child.type === "text" && child.text && child.text.trim()) {
            text += child.text + " ";
            if (text.length > maxLength) {
              return text.substring(0, maxLength) + "...";
            }
          }
        }
      }
    }

    return text || "No preview available...";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadTime = (content) => {
    let wordCount = 0;
    content.forEach((block) => {
      if (block.children) {
        block.children.forEach((child) => {
          if (child.text) {
            wordCount += child.text.split(" ").length;
          }
        });
      }
    });
    const readTime = Math.ceil(wordCount / 200); // Average reading speed
    return readTime;
  };

  const getCoverImageUrl = (coverImage) => {
    const file = coverImage?.data?.attributes;
    if (!file) return null;

    if (file.formats?.medium) return file.formats.medium.url;
    if (file.formats?.small) return file.formats.small.url;
    return file.url;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-950 text-gray-100 mt-10">
        {/* Header */}

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {filteredBlogs?.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-500 h-100 rounded-2xl bg-accent animate-pulse w-full text-lg"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs?.map((blog) => {
                const coverImageUrl = getCoverImageUrl(blog.cover_image);

                return (
                  <article
                    key={blog.id}
                    className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
                  >
                    {/* Cover Image */}

                    <div className="relative h-48 overflow-hidden">
                      {console.log(`${API_URL}${blog.cover_image.url}`)}
                      <img
                        src={`${API_URL.replace(/\/$/, "")}${
                          blog.cover_image.url
                        }`}
                        alt={blog.Title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div
                      className={`relative p-6 ${!coverImageUrl ? "pt-6" : ""}`}
                    >
                      {/* Meta info */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(blog.publishedat)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {calculateReadTime(blog.content)} min read
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 leading-tight">
                        {blog.Title}
                      </h3>

                      {/* Preview text */}
                      <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                        {getPreviewText(blog.content)}
                      </p>

                      {/* Read more button */}
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group/btn font-medium"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>

                        {/* Status indicator */}
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-500">
                            Published
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
