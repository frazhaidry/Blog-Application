import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../config/axiosInstance"; // Import axiosInstance

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the blog ID from the URL
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  // Fetch blog data
  const fetchBlog = async () => {
    try {
      const res = await axiosInstance.get(`/api/blogs/${id}`, { withCredentials: true });
      setFormData({
        title: res.data.title,
        content: res.data.content,
      });
    } catch (err) {
      console.error("Failed to fetch blog:", err);
    }
  };

  // Handle the update request
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(
        `/api/blogs/${id}`,
        { ...formData },
        { withCredentials: true }
      );
      navigate("/"); // Redirect to blog list after successful update
    } catch (err) {
      console.error("Failed to update blog:", err);
    }
  };

  useEffect(() => {
    fetchBlog(); // Fetch blog details when component mounts
  }, [id]); // Re-run when the `id` changes

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Edit Blog
      </h1>
  
      <form onSubmit={handleUpdate} className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter blog title"
            required
          />
        </div>
  
        <div>
          <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="8"
            placeholder="Write your blog content here..."
            required
          ></textarea>
        </div>
  
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow transition"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
