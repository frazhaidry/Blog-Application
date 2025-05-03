import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/api/blogs", { title, content, author });
      console.log("Blog created:", res.data);
      navigate("/"); // Redirect to BlogList after creating the blog
    } catch (err) {
      console.error("Error creating blog:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Create New Blog
      </h1>
  
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="8"
            placeholder="Write your blog content here..."
            required
          ></textarea>
        </div>
  
        <div>
          <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your name (optional)"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow transition"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
  
};

export default CreateBlog;
