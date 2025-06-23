import React, { useEffect, useState } from "react";
import { getSingleBlog } from "../services/BlogService";
import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
const API_URL = import.meta.env.VITE_API_URL;
function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const fetchSingleBlog = async () => {
      const { data } = await getSingleBlog(slug);
      console.log(JSON.stringify(data, null, 2));

      setBlog(data[0]);
    };
    fetchSingleBlog();
  }, [slug]);

  const renderContent = (content) => {
    return content
      .map((block, index) => {
        if (block.type === "paragraph") {
          const children = block.children || [];

          // Skip empty paragraphs
          if (children.length === 1 && children[0].text === "") {
            return null;
          }

          return (
            <div key={index} className="mb-6">
              {children.map((child, childIndex) => {
                if (child.code) {
                  return (
                    <code
                      key={childIndex}
                      className="bg-gray-100 text-cyan-600 px-3 py-1 rounded-md font-mono text-sm border"
                    >
                      {child.text}
                    </code>
                  );
                } else if (child.bold) {
                  return (
                    <h3
                      key={childIndex}
                      className="text-xl font-bold text-gray-100 mb-4 mt-8"
                    >
                      {child.text}
                    </h3>
                  );
                } else {
                  return (
                    <span
                      key={childIndex}
                      className="text-gray-300 leading-relaxed"
                    >
                      {child.text}
                    </span>
                  );
                }
              })}
            </div>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadingTime = (content) => {
    const wordCount = content.reduce((count, block) => {
      if (block.type === "paragraph") {
        const text = block.children.map((child) => child.text).join(" ");
        return count + text.split(" ").length;
      }
      return count;
    }, 0);
    return Math.ceil(wordCount / 200); // Average reading speed
  };
  if (!blog)
    return <div className="text-center py-20 text-white">Loading...</div>;
  return (
    <>
      <Header />
      <div className="min-h-screen text-white mt-10">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-gray-200 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(blog.publishedat)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{getReadingTime(blog.content)} min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            {blog.Title}
          </h1>

          {/* Cover Image */}
          <div className="relative mb-12 group">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={`${API_URL.replace(/\/$/, "")}${blog.cover_image.url}`}
                alt={blog.cover_image?.alternativeText || "Blog cover"}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-10">
              <div className="prose prose-lg max-w-none">
                <div className="text-lg  leading-relaxed">
                  {renderContent(blog.content)}
                </div>
              </div>

              {/* Article Footer */}
              <div className="mt-16 mb-10 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-200">
                    Published on {formatDate(blog.publishedat)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Share:</span>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-gray-900 hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-200">
                        <Twitter size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-gray-900 hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-200">
                        <Linkedin size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-gray-900 hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-200">
                        <Facebook size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-gray-900 hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-200">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetail;
