import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";


function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axiosInstance.post("/api/auth/signup", formData);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err?.response?.data || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Signup</h2>

        <input
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          placeholder="Email"
          type="email"
          value={formData.emailId}
          onChange={(e) =>
            setFormData({ ...formData, emailId: e.target.value })
          }
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={() => handleSignup(formData)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
