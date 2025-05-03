const express = require('express');
const router = express.Router();
const Blog = require("../models/blog")

const { userAuth } = require("../middleware/userAuth")

// Create blog
router.post('/', userAuth ,async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all blogs
router.get('/', userAuth, async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single blog
router.get('/:id',userAuth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Not Found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a blog
router.put('/:id', userAuth, async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // returns updated document
      );
      if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
      res.json(updatedBlog);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

// Delete blog
router.delete('/:id', userAuth, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
