import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
    const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      console.log("Blog response:", res.data);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

    // Handle delete blog
    const handleDelete = async (id) => {
        try {
          await axios.delete(`/api/blogs/${id}`);
          setBlogs(blogs.filter(blog => blog._id !== id)); // Remove deleted blog from state
          console.log("Blog deleted successfully!");
        } catch (err) {
          console.error("Error deleting blog:", err);
        }
      };

        // Navigate to Create Blog page
  const handleCreateBlog = () => {
    navigate("/create-blog");
  };
    

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">All Blogs</h1>
        <button
          onClick={handleCreateBlog}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm transition"
        >
          + Create Blog
        </button>
      </div>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No blogs found.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start">
                <div className="pr-4">
                  <h2 className="text-2xl font-medium text-gray-900 mb-2">{blog.title}</h2>
                  <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                    {blog.content.length > 150
                      ? blog.content.slice(0, 150) + "..."
                      : blog.content}
                  </p>
                  <span className="text-sm text-gray-400">By {blog.author || "Anonymous"}</span>
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => navigate(`/edit/${blog._id}`)}
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="Edit"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Delete"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ); 
};

export default BlogList;
