require('dotenv').config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoutes");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ✅ CORS and middleware setup BEFORE routes
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Now register routes
app.use("/api/auth", authRouter);

const blogRoutes = require('./routes/blogRoutes');
app.use('/api/blogs', blogRoutes);

// Optional: base route
// app.get("/", (req, res) => {
//   res.send("hello");
// });

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch((err) => console.log(err));
