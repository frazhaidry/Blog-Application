import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axiosInstance from "../config/axiosInstance"; // Assuming you have an axiosInstance set up

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  
  // Check if the user is logged in on initial render
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axiosInstance.get("/api/auth/status", { withCredentials: true });
        setIsLoggedIn(res.data.loggedIn); // Assuming your backend returns { loggedIn: true/false }
      } catch (err) {
        console.error("Error checking login status:", err);
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);


  // Handle logout
  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout", {}, { withCredentials: true });
      setIsLoggedIn(false); // Update login status
      navigate("/login"); // Redirect to login page after logout
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/">BlogApp</Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        
      <Link
  to="/login"
  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
>
  Login
</Link>

<button
  onClick={handleLogout}
  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
>
  Logout
</button>
       
      </div>
    </nav>
  );
}

export default Navbar;
