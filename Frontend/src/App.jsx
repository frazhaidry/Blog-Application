

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BlogList from "./components/BlogList";
import Navbar from "./components/Navbar";
import EditBlog from "./components/EditBlog";
import DeleteBlog from "./components/DeleteBlog";
import CreateBlog from "./components/CreateBlog";
import LogoutPage from "./components/LogoutPage";

function App() {
 

  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
       <Route path="/delete/:id" element={<DeleteBlog />} />
       <Route path="/logout" element={<LogoutPage />} />
    </Routes>
  </Router>

  )
}

export default App
